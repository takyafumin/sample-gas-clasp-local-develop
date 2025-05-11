# GitHub ActionsでのGASデプロイ方法

このプロジェクトではGitHub Actionsを使用して、Google Apps Script（GAS）プロジェクトを自動的にデプロイすることができます。

## セットアップ手順

### 1. CLASPトークンの取得

GitHub ActionsでGASをデプロイするには、CLASPの認証情報をGitHubのSecretsに保存する必要があります。

1. ローカル環境でclaspにログインします
   ```bash
   clasp login
   ```

2. ログイン後、以下のファイルの内容をコピーします
   ```bash
   cat ~/.clasprc.json
   ```

3. コピーした内容をGitHub Repositoryの **Settings > Secrets and variables > Actions** に `CLASP_TOKEN` という名前で保存します

### 2. デプロイの実行

1. リポジトリの「Actions」タブに移動
2. 左側のサイドバーから「Manual GAS Deploy」ワークフローを選択
3. 「Run workflow」ボタンをクリック
4. 表示されるフォームで以下を設定:
   - デプロイするプロジェクト名（デフォルトは`spreadsheet-hello-message`）
   - デプロイの説明
5. 「Run workflow」をクリックして実行

### 注意事項

- デプロイは手動実行のみとなっています
- claspのログイン情報（トークン）はGitHub Secretsに保持されています
- トークンの有効期限が切れた場合は、再度ローカルでログインし、トークンを更新してください
