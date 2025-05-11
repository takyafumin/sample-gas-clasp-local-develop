# GitHub Secrets の設定方法

このドキュメントでは、GitHub Actionsでの安全なデプロイに必要なGitHub Secretsの設定方法について説明します。

## 必要なSecrets

各環境に応じて以下のSecretsをリポジトリに設定する必要があります：

| Secret名 | 説明 | 例 |
|----------|------|-----|
| `CLASP_TOKEN` | Claspの認証トークン | ~/.clasprc.jsonの内容 |
| `development_SCRIPT_ID` | 開発環境のスクリプトID | `1a2b3c4d5e6f7g8h9i0j` |
| `development_PARENT_ID` | 開発環境の親リソースID（スプレッドシートなど） | `1a2b3c4d5e6f7g8h9i0j` |
| `production_SCRIPT_ID` | 本番環境のスクリプトID | `1a2b3c4d5e6f7g8h9i0j` |
| `production_PARENT_ID` | 本番環境の親リソースID（スプレッドシートなど） | `1a2b3c4d5e6f7g8h9i0j` |

## Secretsの設定手順

1. GitHub上のリポジトリページに移動
2. **Settings** タブを選択
3. 左側のサイドバーから **Secrets and variables** → **Actions** を選択
4. **New repository secret** ボタンをクリック
5. 各Secretを名前と値を入力して追加

## 各Secretの取得方法

### CLASP_TOKEN

1. ローカル環境でclaspにログイン
   ```bash
   clasp login
   ```

2. ログイン後、以下のファイルの内容をコピー
   ```bash
   cat ~/.clasprc.json
   ```

### 各環境の SCRIPT_ID

1. Google Apps Script プロジェクトを作成または既存のものを開く
2. プロジェクトのURLから取得: `https://script.google.com/d/[SCRIPT_ID]/edit`
   - URLの `[SCRIPT_ID]` 部分がスクリプトID
3. 環境名に応じて `development_SCRIPT_ID` または `production_SCRIPT_ID` としてGitHub Secretsに登録

### 各環境の PARENT_ID

スプレッドシートに関連付ける場合:
1. Google スプレッドシートを開く
2. URLから取得: `https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`
   - URLの `[SPREADSHEET_ID]` 部分が親リソースID
3. 環境名に応じて `development_PARENT_ID` または `production_PARENT_ID` としてGitHub Secretsに登録

## 注意事項

- これらのSecretsは機密情報としてGitHubに安全に保存され、ログには表示されません
- 環境（development/production）によって異なるIDを使用する場合は、両方の環境のIDを設定してください
- トークンの有効期限が切れた場合は、再度ローカルでログインし、トークンを更新してください
