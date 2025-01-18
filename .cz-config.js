module.exports = {
  types: [
    {
      name: 'feat:     ✨ 新機能の追加',
      value: '✨ feat',
    },
    {
      name: 'improve:  🎨 コードの構造/ロジックの改善',
      value: '🎨 improve',
    },
    {
      name: 'update:   🩹 軽微な修正',
      value: '🩹 update',
    },
    {
      name: 'fix:      🐛 バグ修正',
      value: '🐛 fix',
    },
    {
      name: 'hotfix:   🚑 緊急バグ修正',
      value: '🚑 hotfix',
    },
    {
      name: 'refactor: ♻️ リファクタリング',
      value: '♻️ refactor',
    },
    {
      name: 'delete:   🔥 ファイルやコードの削除',
      value: '🔥 delete',
    },
    {
      name: 'style:    💄 UIやスタイルの更新',
      value: '💄 style',
    },
    {
      name: 'docs:     📝 ドキュメントの更新',
      value: '📝 docs',
    },
    {
      name: 'move:     🚚 ファイル/ディレクトリの移動',
      value: '🚚 move',
    },
    {
      name: 'test:     ✅ テストの追加/更新',
      value: '✅ test',
    },
    {
      name: 'chore:    🔧 設定ファイルの更新',
      value: '🔧 chore',
    },
    {
      name: 'package:  📦 パッケージの追加/更新',
      value: '📦 package',
    },
    {
      name: 'WIP:      🚧 作業途中',
      value: '🚧 WIP',
    },
  ],
  messages: {
    type: 'コミットする変更タイプを選択してください:',
    scope:
      '変更内容のスコープを入力してください (例: component名, ファイル名):',
    subject: '変更内容を簡潔に入力してください:\n',
    body: '変更内容の詳細があれば入力してください (任意):\n',
    breaking: '破壊的な変更があれば入力してください (任意):\n',
    confirmCommit: 'このコミット内容でよろしいですか? (Y/n)',
  },
  skipQuestions: ['breaking', 'footer'],
  subjectLimit: 100,
  upperCaseSubject: true,
};
