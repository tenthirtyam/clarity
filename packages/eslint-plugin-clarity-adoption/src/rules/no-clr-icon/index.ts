import { ESLintUtils } from '@typescript-eslint/experimental-utils';
import {
  HTMLElement,
  // HTMLAttribute
} from '../../types';

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
        // const attributes = node.attributes || [];
        context.report({
          node: node as any,
          messageId: 'clrIconFailure',
          fix: fixer => {
            return fixer.replaceText(node as any, '<cds-icon></cds-icon>');
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
