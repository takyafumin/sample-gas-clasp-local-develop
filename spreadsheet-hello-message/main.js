/**
 * アクティブシートから名前を取得してメッセージを表示する
 * 2列目のセルA2に名字、B2に名前が入力されていることを前提とする
 */
function displayGreeting() {
  try {
    // アクティブなシートを取得
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // 名字と名前を取得（A2とB2のセル）
    const sei = sheet.getRange(2, 1).getValue() || '';
    const mei = sheet.getRange(2, 2).getValue() || '';
    
    // メッセージボックスを表示
    Browser.msgBox(`こんにちは!\n\n${sei}${mei}さん`);
  } catch (error) {
    console.error('エラーが発生しました:', error);
    Browser.msgBox('エラーが発生しました。詳細はログを確認してください。');
  }
}
