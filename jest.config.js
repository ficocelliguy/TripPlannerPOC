export default {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  "collectCoverage": true,
  "collectCoverageFrom": ["./src/**/*.{js,ts,vue}", "!**/node_modules/**"],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
}
