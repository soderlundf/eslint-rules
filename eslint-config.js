module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ['node-safety'],
  rules: {
    'node-safety/no-unawaited-async': 'error',
    'node-safety/no-sync-fs': 'warn',
    'node-safety/no-process-env-mismatch': 'warn',
    'node-safety/no-setinterval-without-clear': 'warn',
    'node-safety/no-shared-mutable-state': 'warn',
    'node-safety/no-console-log-in-prod': 'warn',
    'node-safety/json-parse-requires-trycatch': 'error',
    'node-safety/no-unused-promise-return': 'warn',
    'node-safety/no-unclosed-server': 'warn',
    'node-safety/no-missing-await-in-test': 'warn',
    'node-safety/no-exports-mix': 'error',
    'node-safety/no-global-mutation': 'warn',
    'node-safety/no-useless-async': 'warn',
    'node-safety/require-return-in-then': 'warn',
    'node-safety/no-loose-equality-for-primitives': 'warn',
    'node-safety/timers-require-abortcontroller': 'warn',
    'node-safety/promise-requires-resolve-and-reject': 'error',
    'node-safety/no-confusing-truthy-falsy': 'warn',
    'node-safety/eslint-plugin-no-useless-promise-in-async.js': 'error',
    'no-non-atomic-array-updates.js': 'warn'
  }
};
