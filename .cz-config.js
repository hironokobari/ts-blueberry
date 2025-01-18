module.exports = {
  types: [
    { value: 'feat', name: 'feat:     ✨  新機能', emoji: '✨' },
    { value: 'fix', name: 'fix:      🐛  バグ修正', emoji: '🐛' },
    {
      value: 'docs',
      name: 'docs:     📚  ドキュメントのみの変更',
      emoji: '📚',
    },
    { value: 'style', name: 'style:    💎  コードスタイルの変更', emoji: '💎' },
    { value: 'refactor', name: 'refactor: 📦  リファクタリング', emoji: '📦' },
    { value: 'perf', name: 'perf:     ⚡  パフォーマンス改善', emoji: '⚡' },
    { value: 'test', name: 'test:     🧪  テストの追加・修正', emoji: '🧪' },
    {
      value: 'chore',
      name: 'chore:    🔧  ビルドプロセスやツールの変更',
      emoji: '🔧',
    },
  ],

  messages: {
    type: 'コミットする変更タイプを選択:',
    scope: '変更内容のスコープ(例：component や file名):',
    customScope: '変更内容のスコープ:',
    subject: '変更内容を簡潔に記入:\n',
    body: '変更内容の詳細があれば記入 ("|" で改行):\n',
    breaking: '破壊的変更があれば記入:\n',
    footer: '関連するIssue番号があれば記入 (例： #123):\n',
    confirmCommit: 'このコミット内容でよろしいですか?',
  },

  skipQuestions: ['footer'],

  subjectLimit: 100,
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  // コミットメッセージのフォーマット
  formatCommit: (type, scope, subject, emoji) => {
    return `${emoji} ${type}${scope ? `(${scope})` : ''}: ${subject}`;
  },
};
