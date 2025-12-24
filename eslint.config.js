import pluginVue from 'eslint-plugin-vue'
import vueTsConfigs from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,cjs,ts,vue,jsx,tsx}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsConfigs(),
  skipFormatting,

  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
