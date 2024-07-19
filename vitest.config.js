import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'node',
    reporters: ['json', 'verbose', 'vitest-sonar-reporter'],
    outputFile: 'reporter.json',
    'vitest-sonar-reporter': 'testResults/sonar-report.xml',
    coverage: {
        reporter: ["text", "lcov"],
    },
  },
})