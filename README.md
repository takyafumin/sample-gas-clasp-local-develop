# sample-gas-clasp-local-develop

GASをローカル環境で開発する検証サンプル

## 前提条件

このプロジェクトを利用するには、以下の環境が必要です。

- Node.js (v12以上推奨)
- npm または yarn
- [clasp](https://github.com/google/clasp) のglobalインストール（[インストール方法](#claspコマンドのインストール)）
- Googleアカウント

## プロジェクト構成

このリポジトリは複数のGoogle Apps Scriptプロジェクトをサブフォルダとして含んでいます。各プロジェクトは独立したGASアプリケーションとして機能します。

|                             フォルダ名                             |                                         機能概要                                         |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [spreadsheet-hello-message](./spreadsheet-hello-message/README.md) | スプレッドシート上の名前情報を取得し、挨拶メッセージを表示するシンプルなアプリケーション |

## デプロイ手順

各プロジェクトをデプロイする際の基本的な手順を以下に示します。

### 初期設定

```bash
# Google にログイン
clasp login

# プロジェクトディレクトリに移動
cd プロジェクトフォルダ名（例：spreadsheet-hello-message）
```

### GAS反映(アップロード)作業

ソースコードをローカルで編集した後、Google Apps Script プロジェクトにアップロードする手順です。

```bash
# ファイルをローカル編集後、Google Apps Script プロジェクトにアップロード
clasp push

# プロジェクトをブラウザで開く
clasp open
```

### デプロイ作業

デプロイは、Google Apps Script プロジェクトを公開するための手順です。以下のコマンドでデプロイを作成します。

```bash
# デプロイを作成
clasp deploy --description "デプロイの説明"

# バージョン付きでデプロイ
clasp version "バージョンの説明"
clasp deploy --version バージョン番号 --description "デプロイの説明"

# デプロイ履歴を確認
clasp deployments
```

## 新しいGASプロジェクトの追加方法

新しいGoogle Apps Scriptプロジェクトを追加する場合は、以下の2つのユースケースに応じて手順を実行してください。

### 新規でGASプロジェクトを作成する場合

1. リポジトリのルートに新しいサブフォルダを作成
   ```bash
   mkdir 新しいプロジェクトフォルダ名
   cd 新しいプロジェクトフォルダ名
   ```

2. そのフォルダ内で`clasp create`を実行してプロジェクトを初期化
   ```bash
   clasp create --title "プロジェクト名" --rootDir .
   ```

3. 必要なコードを実装

4. このREADMEに新プロジェクトの説明を追加

### 既存のGASプロジェクトを利用する場合

1. リポジトリのルートに移動
   ```bash
   cd リポジトリのルートディレクトリ
   ```

2. `clasp clone`コマンドで既存のプロジェクトを取得（サブフォルダが自動作成されます）
   ```bash
   clasp clone スクリプトID --rootDir 新しいプロジェクトフォルダ名
   ```

3. 必要に応じてコードを更新

4. このREADMEに新プロジェクトの説明を追加

## TIPS

### claspコマンドのインストール

このプロジェクトを使用するには、Google Apps Script をローカル環境で開発するためのCLIツール「clasp」が必要です。

```bash
# グローバルインストール
npm install -g @google/clasp

# または yarn を使用する場合
yarn global add @google/clasp

# インストールの確認
clasp --version
```

インストール後、Google アカウントでの認証が必要です:

```bash
# Google アカウントでログイン
clasp login
```

初回ログイン時は、ブラウザウィンドウが開き、Google認証を求められます。認証を完了することで、ローカル環境でのGAS開発が可能になります。

### トラブルシューティング

- `.clasp.json` ファイルが各プロジェクトフォルダに存在し、正しい `scriptId` を持っていることを確認してください
- 権限エラーが発生した場合は `clasp login` で再度ログインしてみてください
- 詳細なログを見るには `clasp push --log` を使用してください
