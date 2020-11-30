const md = require('markdown-it')();

module.exports = [
  // SUMMARY BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'summary',
      render: function (tokens, idx) {
        const item = tokens[idx];
        // TODO: revisit pr comment: https://github.com/vmware/clarity/pull/4820#discussion_r460762288
        if (item.type === 'container_summary_open') {
          return `<ClrSummary>`;
        } else if (item.type === 'inline') {
          return item.content;
        } else if (item.type === 'container_summary_close') {
          return `</ClrSummary>`;
        }
      },
    },
  ],
  // COMPONENT SUMMARY BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'compsummary',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_compsummary_open') {
          return `<div class="component-summary no-clr-ui" cds-text="subsection">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_compsummary_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 1 TITLE BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'complevelonetitle',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_complevelonetitle_open') {
          return `<div class="component-section-title no-clr-ui" cds-text="title" cds-layout="m-b:md">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_complevelonetitle_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 1 BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'complevelone',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_complevelone_open') {
          return `<div class="component-section no-clr-ui" cds-text="body">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_complevelone_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 2 TITLE BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'compleveltwotitle',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_compleveltwotitle_open') {
          return `<div class="component-section-title no-clr-ui" cds-text="section" cds-layout="m-b:md">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_compleveltwotitle_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 2 BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'compleveltwo',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_compleveltwo_open') {
          return `<div class="component-section no-clr-ui" cds-text="body">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_compleveltwo_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 3 TITLE BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'complevelthreetitle',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_complevelthreetitle_open') {
          return `<div class="component-subsection-title no-clr-ui" cds-text="subsection" cds-layout="m-b:xs">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_complevelthreetitle_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 3 BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'complevelthree',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_complevelthree_open') {
          return `<div class="component-subsection no-clr-ui" cds-text="body">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_complevelthree_close') {
          return `</div>`;
        }
      },
    },
  ],
  // DO BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'do',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_do_open') {
          return `<DocDo summary="${md.renderInline(item.info.replace('do ', ''))}">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_do_close') {
          return `</DocDo>`;
        }
      },
    },
  ],
  // DON'T BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'dont',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_dont_open') {
          return `<DocDont summary="${md.renderInline(item.info.replace('dont ', ''))}">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_dont_close') {
          return `</DocDont>`;
        }
      },
    },
  ],
  // COL BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'col',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_col_open') {
          return `<DocCol summary="${md.renderInline(item.info.trim().substr(3).trim())}">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_col_close') {
          return `</DocCol>`;
        }
      },
    },
  ],
  // INSET BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'inset',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_inset_open') {
          return `<DocInset align="${item.info.replace('inset ', '')}">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_inset_close') {
          return `</DocInset>`;
        }
      },
    },
  ],
];
