module.exports = {
  disableEmoji: false,
  format: '{emoji}{type}{scope}: {subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: '빌드 및 패키지 매니저 설정 등 자잘한 수정',
      emoji: '🧹',
      value: 'chore',
    },
    ci: {
      description: 'CI 변경',
      emoji: '🏭',
      value: 'ci',
    },
    docs: {
      description: 'Documentation 수정',
      emoji: '📄',
      value: 'docs',
    },
    feat: {
      description: '새로운 기능',
      emoji: '⚙️',
      value: 'feat',
    },
    fix: {
      description: '버그 수정',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: '성능 향상을 위한 수정',
      emoji: '🔧',
      value: 'perf',
    },
    refactor: {
      description: '리팩토링 작업',
      emoji: '📂',
      value: 'refactor',
    },
    release: {
      description: '릴리즈',
      emoji: '🎉',
      value: 'release',
    },
    style: {
      description: '마크업, formatting, 스타일 수정 등',
      emoji: '🎨',
      value: 'style',
    },
    test: {
      description: '누락된 테스트 추가',
      emoji: '🔬',
      value: 'test',
    },
    messages: {
      type: "Select the type of change that you're committing:",
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  },
};
