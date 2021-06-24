module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      'error',
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'type-case': ['error', 'always'],
    'type-empty': ['error', 'always'],
    'subject-full-stop': ['error', 'always'],
  },
};
