// commitlint.config.js | .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    rules: {
      // @see: https://commitlint.js.org/#/reference-rules
    },
    prompt: {
      alias: { fd: 'docs: fix typos' },
      types: [
        { value: 'feat', name: 'feat:     A new feature', emoji: ':sparkles:' },
        { value: 'fix', name: 'fix:      A bug fix', emoji: ':bug:' },
        { value: 'docs', name: 'docs:     Documentation only changes', emoji: ':memo:' },
        { value: 'style', name: 'style:    Changes that do not affect the meaning of the code', emoji: ':lipstick:' },
        { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature', emoji: ':recycle:' },
        { value: 'perf', name: 'perf:     A code change that improves performance', emoji: ':zap:' },
        { value: 'test', name: 'test:     Adding missing tests or correcting existing tests', emoji: ':white_check_mark:' },
        { value: 'build', name: 'build:    Changes that affect the build system or external dependencies', emoji: ':package:' },
        { value: 'ci', name: 'ci:       Changes to our CI configuration files and scripts', emoji: ':ferris_wheel:' },
        { value: 'chore', name: 'chore:    Other changes that don\'t modify src or test files', emoji: ':hammer:' },
        { value: 'revert', name: 'revert:   Reverts a previous commit', emoji: ':rewind:' }
      ],
      useEmoji: false,
      scopes: ['ui','client'],
      allowBreakingChanges: ['feat', 'fix'],
      breaklineNumber: 50,
      breaklineChar: '|',
      maxHeaderLength: 95,
      maxSubjectLength: 95,
    }
  }
  