import { LineAndColumnData } from '@typescript-eslint/types/dist/ts-estree';
import rule from '../src/rules/no-clr-icon';
import { RuleTester } from './test-helper';

const htmlRuleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  parser: '../src/html-parser',
});

interface InvalidTest {
  code: string;
  errors: Array<{
    messageId: string;
    line?: number;
    column?: number;
  }>;
  output?: string;
}

const iconFailureMessageId = 'clrIconFailure';

function getInvalidTest(
  code: string,
  locations?: Array<LineAndColumnData>,
  messageIds?: Array<string>,
  output?: string
): InvalidTest {
  if (!messageIds) {
    messageIds = [iconFailureMessageId];
  }

  const invalidTest: InvalidTest = {
    code,
    errors: [],
  };

  messageIds.forEach(messageId => {
    invalidTest.errors.push({ messageId });
  });

  locations?.forEach((location, index) => {
    invalidTest.errors[index].line = location.line;
    invalidTest.errors[index].column = location.column;
  });

  if (output) {
    invalidTest.output = output;
  }

  return invalidTest;
}

htmlRuleTester.run('no-clr-alert', rule, {
  invalid: [
    getInvalidTest(`<clr-icon></clr-icon>`, [], undefined, `<cds-icon></cds-icon>`),
    getInvalidTest(
      `<clr-icon dir="left"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon direction="left"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon dir="left"></cds-icon>`,
      [{ line: 1, column: 11 }],
      [iconFailureMessageId],
      `<cds-icon direction="left"></cds-icon>`
    ),
    // TODO: add the rest of the directions
    // ),
    // getInvalidTest(`
    //   <clr-icon class="is-solid"></clr-icon>
    // `)
  ],
  valid: [],
});

// TODO: Add the following scenarios
// .has-alert

// .has-badge

// .has-badge--success

// .has-badge--error

// .has-badge--info
