module.exports = {
  rules: {
    'no-unawaited-async': require('./rules/no-unawaited-async'),
    'no-sync-fs': require('./rules/no-sync-fs'),
    'no-process-env-mismatch': require('./rules/no-process-env-mismatch'),
    'no-setinterval-without-clear': require('./rules/no-setinterval-without-clear'),
    'no-shared-mutable-state': require('./rules/no-shared-mutable-state'),
    'no-console-log-in-prod': require('./rules/no-console-log-in-prod'),
    'json-parse-requires-trycatch': require('./rules/json-parse-requires-trycatch'),
    'no-unused-promise-return': require('./rules/no-unused-promise-return'),
    'no-unclosed-server': require('./rules/no-unclosed-server'),
    'no-missing-await-in-test': require('./rules/no-missing-await-in-test'),
    'no-exports-mix': require('./rules/no-exports-mix'),
    'no-global-mutation': require('./rules/no-global-mutation'),
    'no-useless-async': require('./rules/no-useless-async'),
    'require-return-in-then': require('./rules/require-return-in-then'),
    'no-loose-equality-for-primitives': require('./rules/no-loose-equality-for-primitives'),
    'timers-require-abortcontroller': require('./rules/timers-require-abortcontroller'),
    'promise-requires-resolve-and-reject': require('./rules/promise-requires-resolve-and-reject'),
    'no-confusing-truthy-falsy': require('./rules/no-confusing-truthy-falsy'),
  }
};