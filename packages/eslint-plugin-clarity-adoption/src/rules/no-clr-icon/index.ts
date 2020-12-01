import { ESLintUtils } from '@typescript-eslint/experimental-utils';
import {
  HTMLElement,
  // HTMLAttributeName,
  // HTMLAttribute,
  // HTMLAttribute
} from '../../types';
import { RuleFix } from '@typescript-eslint/experimental-utils/dist/ts-eslint';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);

export default createESLintRule({
  name: 'no-clr-icons',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-icons',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrIconFailure: 'Using clr-icons is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="clr-icon"]': (node: HTMLElement): void => {
        const fixedOpeningTag = node.value.replace('<clr-icon', '<cds-icon');
        const fixedValue = fixedOpeningTag.replace('</clr-icon>', '</cds-icon>');

        const attributes = node?.attributes || [];
        const directionAttributes = attributes.filter(a => a.attributeName.value === 'dir');

        context.report({
          node: node as any,
          messageId: 'clrIconFailure',
          fix: fixer => {
            const fixes: RuleFix[] = [];
            directionAttributes.forEach(attribute => {
              fixes.push(fixer.replaceText(attribute.attributeName as any, 'direction'));
            });
            fixes.push(fixer.replaceText(node as any, fixedValue));

            return fixes;
          },
        });
      },
    };
  },
});

// function fixDirectionAttribute(nodeAttributes: HTMLAttribute[]) {
//   const direction = nodeAttributes.find(attribute => attribute.attributeName.value === "dir");
//   if (!direction) {
//     return;
//   }
// }
