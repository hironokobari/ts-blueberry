module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-case': [0, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        'feat', // ✨ 新機能
        'improve', // 🎨 改善
        'update', // 🩹 軽微な修正
        'fix', // 🐛 バグ修正
        'hotfix', // 🚑 緊急バグ修正
        'refactor', // ♻️ リファクタリング
        'delete', // 🔥 削除
        'style', // 💄 スタイル
        'docs', // 📝 ドキュメント
        'move', // 🚚 移動
        'test', // ✅ テスト
        'chore', // 🔧 設定/ツール
        'package', // 📦 パッケージ
        'WIP', // 🚧 作業中
      ],
    ],
  },
};
