const shared = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['node_modules', '**/*.js', '**/*.jsx', 'src/styles/reset.scss'],
  plugins: ['stylelint-order'],
}

const sharedRules = {
  'block-closing-brace-empty-line-before': 'never',
  'block-closing-brace-newline-after': 'always',
  'block-closing-brace-newline-before': 'always-multi-line',
  'block-closing-brace-space-before': 'always-single-line',
  'block-opening-brace-space-after': 'always-single-line',
  'block-opening-brace-space-before': 'always',
  'block-opening-brace-newline-after': 'always-multi-line',
  'color-hex-case': 'upper',
  'color-hex-length': 'long',
  'color-no-invalid-hex': true,
  'color-named': 'never',
  'declaration-block-no-duplicate-properties': true,
  'declaration-block-no-redundant-longhand-properties': true,
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-trailing-semicolon': 'always',
  'indentation': 2,
  'max-empty-lines': 1,
  'no-eol-whitespace': true,
  'no-extra-semicolons': true,
  'no-missing-end-of-source-newline': true,
  'order/order': [
    'declarations',
    'rules',
    'at-rules'
  ],
  'order/properties-order': [
    '@charset',
    '@font-face',
    '@font-feature-values',
    '@import',
    '@keyframes',
    '@media',
    'all',
    'animation',
    'animation-delay',
    'animation-direction',
    'animation-duration',
    'animation-fill-mode',
    'animation-iteration-count',
    'animation-name',
    'animation-play-state',
    'animation-timing-function',
    'appearance',
    'backface-visibility',
    'background',
    'background-attachment',
    'background-blend-mode',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-repeat',
    'background-size',

    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',

    'border-collapse',

    'border-color',
    'border-top-color',
    'border-right-color',
    'border-bottom-color',
    'border-left-color',

    'border-image',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
    'border-image-source',
    'border-image-width',

    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',

    'border-spacing',

    'border-style',
    'border-top-style',
    'border-right-style',
    'border-bottom-style',
    'border-left-style',

    'border-width',
    'border-top-width',
    'border-right-width',
    'border-bottom-width',
    'border-left-width',

    'box-decoration-break',
    'box-shadow',
    'box-sizing',
    'break-after',
    'break-before',
    'break-inside',
    'caption-side',
    'caret-color',
    'clear',
    'clip',
    'color',
    'column-count',
    'column-fill',
    'column-gap',
    'column-rule',
    'column-rule-color',
    'column-rule-style',
    'column-rule-width',
    'column-span',
    'column-width',
    'columns',
    'content',
    'counter-increment',
    'counter-reset',
    'cursor',
    'direction',

    'display',
    'align-content',
    'align-items',
    'align-self',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'gap',
    'grid',
    'grid-area',
    'grid-auto-columns',
    'grid-auto-flow',
    'grid-auto-rows',
    'grid-column',
    'grid-column-end',
    'grid-column-gap',
    'grid-column-start',
    'grid-gap',
    'grid-row',
    'grid-row-end',
    'grid-row-gap',
    'grid-row-start',
    'grid-template',
    'grid-template-areas',
    'grid-template-columns',
    'grid-template-rows',
    'justify-content',
    'row-gap',
    'vertical-align',

    'empty-cells',
    'filter',
    'float',
    'font',
    'font-family',
    'font-feature-settings',
    'font-kerning',
    'font-language-override',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-synthesis',
    'font-variant',
    'font-variant-alternates',
    'font-variant-caps',
    'font-variant-east-asian',
    'font-variant-ligatures',
    'font-variant-numeric',
    'font-variant-position',
    'font-weight',
    'hanging-punctuation',
    'height',
    'hyphens',
    'image-rendering',
    'isolation',
    'letter-spacing',
    'line-break',
    'line-height',
    'list-style',
    'list-style-image',
    'list-style-position',
    'list-style-type',
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'mask',
    'mask-clip',
    'mask-composite',
    'mask-image',
    'mask-mode',
    'mask-origin',
    'mask-position',
    'mask-repeat',
    'mask-size',
    'mask-type',
    'max-height',
    'max-width',
    'min-height',
    'min-width',
    'mix-blend-mode',
    'object-fit',
    'object-position',
    'opacity',
    'order',
    'orphans',
    'outline',
    'outline-color',
    'outline-offset',
    'outline-style',
    'outline-width',
    'overflow',
    'overflow-wrap',
    'overflow-x',
    'overflow-y',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'page-break-after',
    'page-break-before',
    'page-break-inside',
    'perspective',
    'perspective-origin',
    'pointer-events',

    'position',
    'top',
    'right',
    'bottom',
    'left',

    'quotes',
    'resize',
    'scroll-behavior',
    'tab-size',
    'table-layout',
    'text-align',
    'text-align-last',
    'text-combine-upright',
    'text-decoration',
    'text-decoration-color ',
    'text-decoration-line',
    'text-decoration-style',
    'text-decoration-thickness',
    'text-indent',
    'text-justify',
    'text-orientation',
    'text-overflow',
    'text-shadow',
    'text-transform',
    'text-underline-position',
    'transform',
    'transform-origin',
    'transform-style',
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
    'unicode-bidi',
    'user-select',
    'visibility',
    'white-space',
    'widows',
    'width',
    'word-break',
    'word-spacing',
    'word-wrap',
    'writing-mode',
  ],
  'property-no-vendor-prefix': null,
  'rule-empty-line-before': [
    'always',
    { except: ['after-single-line-comment', 'inside-block-and-after-rule'] }
  ],
  'selector-class-pattern': [ /^([a-z-])+((--|__)([a-z0-9-])+)?$/, { resolveNestedSelectors: true }],
  'shorthand-property-no-redundant-values': null,
}

const development = {
  ...shared,
  rules: {
    ...sharedRules
  }
}

const production = {
  ...shared,
  rules: {
    ...sharedRules
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports = production
} else {
  module.exports = development
}
