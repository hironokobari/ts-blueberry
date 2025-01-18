module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // ✨ 新機能
        'fix', // 🐛 バグ修正
        'docs', // 📚 ドキュメントのみの変更
        'style', // 💎 コードの意味に影響を与えない変更（空白、フォーマット、セミコロンなど）
        'refactor', // 📦 バグ修正や機能追加のないコードの変更
        'perf', // ⚡ パフォーマンスを向上させるコードの変更
        'test', // 🧪 テストの追加・修正
        'chore', // 🔧 ビルドプロセスやツールの変更、ライブラリの更新など
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'pascal-case']],
    'subject-full-stop': [2, 'never', '.'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
};
