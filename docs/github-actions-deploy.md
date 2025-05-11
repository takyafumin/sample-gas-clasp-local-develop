# GitHub ActionsでのGASデプロイ方法

このプロジェクトではGitHub Actionsを使用して、Google Apps Script（GAS）プロジェクトを自動的にデプロイすることができます。

## セットアップ手順

### 1. GitHub Environment Secretsの設定

GitHub ActionsでGASをデプロイするには、各環境（development, production）に対して以下のSecretsを設定する必要があります：

- 各環境（development/production）固有のSecrets:
  - **SCRIPT_ID**: その環境のGASスクリプトID
  - **PARENT_ID**: その環境の親リソースID（スプレッドシート等）

- リポジトリ全体で共有するSecret:
  - **CLASP_TOKEN**: CLASPの認証情報

詳細な設定方法については、[GitHub Environment Secretsの設定方法](./github-environment-secrets-setup.md)を参照してください。

### 2. デプロイの実行

1. リポジトリの「Actions」タブに移動
2. 左側のサイドバーから「Manual GAS Deploy」ワークフローを選択
3. 「Run workflow」ボタンをクリック
4. 表示されるフォームで以下を設定:
   - デプロイするプロジェクト名（デフォルトは`apps/spreadsheet-hello-message`）
   - デプロイ環境（`development`または`production`）
   - デプロイの説明
5. 「Run workflow」をクリックして実行

**注意**: 選択した環境（development/production）に応じて、その環境に設定されたScriptIDとParentIDが自動的に使用されます。

### 注意事項

- デプロイは手動実行のみとなっています
- 機密情報はGitHub Environment Secretsに安全に保存されています
  - 環境固有の情報（SCRIPT_ID, PARENT_ID）は各環境のSecretsに設定
  - 共通情報（CLASP_TOKEN）はリポジトリSecretsに設定
- ローカル環境の`.clasp.json`ファイルをGitにコミットする必要はありません（`.gitignore`に追加推奨）
- トークンの有効期限が切れた場合は、再度ローカルでログインし、トークンを更新してください
- 新しい環境を追加する場合は、GitHubで新しい環境を作成し、必要なSecretsを設定してください
