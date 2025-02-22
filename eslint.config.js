import antfu from '@antfu/eslint-config'

export default antfu({
  svelte: true,

  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  formatters: {
    svelte: true,
  },
})
