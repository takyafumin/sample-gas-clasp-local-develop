# GitHub Environment Secretsの設定方法

このドキュメントでは、GitHubのEnvironment Secretsを使用して、環境ごとに異なる機密情報を安全に管理する方法について説明します。

## Environment Secretsとは

GitHub Repositoryの「Environment」機能を使用すると、各デプロイ環境（development、productionなど）に固有のSecretsを設定できます。これにより、環境ごとに異なるAPIキーやID、トークンなどを安全に管理できます。

## 事前準備: 環境の作成

|    環境名     |   説明   |
| ------------- | -------- |
| `development` | 開発環境 |
| `production`  | 本番環境 |

1. GitHubリポジトリページの **Settings** タブを開く
2. 左側のサイドバーから **Environments** を選択
3. **New environment** ボタンをクリック
4. 環境名を入力（`development`または`production`）
5. 必要に応じて保護ルールを設定し、**Configure environment** をクリック

### 各環境のSecretsの設定

各環境（development, production）に以下のSecretsを設定します：

|   Secret名    |                      説明                      |           例           |
| ------------- | ---------------------------------------------- | ---------------------- |
| `CLASP_TOKEN` | Claspの認証トークン                            | ~/.clasprc.jsonの内容  |
| `SCRIPT_ID`   | 環境固有のGASスクリプトID                      | `1a2b3c4d5e6f7g8h9i0j` |
| `PARENT_ID`   | 環境固有の親リソースID（スプレッドシートなど） | `1a2b3c4d5e6f7g8h9i0j` |

1. GitHubリポジトリページの **Settings** タブに移動
2. 左側のサイドバーから **Environments** を選択
3. 設定したい環境（例：`development`）をクリック
4. **Environment secrets** セクションの **Add secret** ボタンをクリック
5. Secret名（`SCRIPT_ID`など）と値を入力して **Add secret** をクリック
6. 同様の手順で必要なSecretsをすべて追加
7. 他の環境（`production`など）に対しても同じ手順を繰り返す

## IDの取得方法

### SCRIPT_ID

1. Google Apps Script プロジェクトを作成または既存のものを開く
2. プロジェクトのURLから取得: `https://script.google.com/d/[SCRIPT_ID]/edit`
   - URLの `[SCRIPT_ID]` 部分がスクリプトID

### PARENT_ID

スプレッドシートに関連付ける場合:
1. Google スプレッドシートを開く
2. URLから取得: `https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`
   - URLの `[SPREADSHEET_ID]` 部分が親リソースID

## CLASP_TOKENの取得

1. ローカル環境でclaspにログイン
   ```bash
   clasp login
   ```

2. ログイン後、以下のファイルの内容をコピー
   ```bash
   cat ~/.clasprc.json
   ```

## 注意事項

- 環境ごとに異なるIDを使用することで、開発中に本番データを誤って操作するリスクを軽減できます
- Secretsは暗号化されて保存され、ワークフローのログには表示されません
- 各環境のSecretsは、その環境のワークフローでのみ利用可能です
- トークンの有効期限が切れた場合は、再度ローカルでログインし、トークンを更新してください
