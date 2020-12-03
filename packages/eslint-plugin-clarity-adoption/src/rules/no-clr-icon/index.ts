import { ESLintUtils } from '@typescript-eslint/experimental-utils';
import { HTMLElement, HTMLAttributeName, HTMLAttribute } from '../../types';
import { RuleFixer, RuleFix } from '@typescript-eslint/experimental-utils/dist/ts-eslint';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);

function getAttributeFixer(
  fixer: RuleFixer,
  nodeAttributes: HTMLAttribute[],
  oldName: string,
  newName: string
): RuleFix | undefined {
  const dirAttribute = nodeAttributes.find(attribute => attribute.attributeName.value === oldName);
  if (!dirAttribute) {
    return;
  }

  const dirStart = dirAttribute?.range[0];
  const dirEnd = dirStart + oldName.length;
  return fixer.replaceTextRange([dirStart, dirEnd], newName);
}

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
      // Covers the case where the tag name was migrated manually but the attribute was not
      'HTMLElement[tagName="cds-icon"] HTMLAttributeName[value="dir"]': (node: HTMLAttributeName): void => {
        context.report({
          node: node as any,
          messageId: 'clrIconFailure',
          fix: fixer => fixer.replaceText(node as any, 'direction'),
        });
      },
      'HTMLElement[tagName="clr-icon"]': (node: HTMLElement): void => {
        const { value, range } = node;
        const nodeStart = range[0];
        const openingTag = '<clr-icon';
        const openingTagStart = value.indexOf(openingTag) + nodeStart;
        const openingTagEnd = openingTagStart + openingTag.length + nodeStart;

        const closingTag = '</clr-icon>';
        const closingTagStart = value.indexOf(closingTag) + nodeStart;
        const closingTagEnd = closingTagStart + closingTag.length + nodeStart;

        context.report({
          node: node as any,
          messageId: 'clrIconFailure',
          fix: fixer => {
            const openingTagFixer = fixer.replaceTextRange([openingTagStart, openingTagEnd], '<cds-icon');
            const closingTagFixer = fixer.replaceTextRange([closingTagStart, closingTagEnd], '</cds-icon>');

            const fixers = [openingTagFixer, closingTagFixer];

            const attributes = node.attributes || [];
            const dirFixer = getAttributeFixer(fixer, attributes, 'dir', 'direction');
            if (dirFixer) {
              fixers.push(dirFixer);
            }

            return fixers;
          },
        });
      },
    };
  },
});
