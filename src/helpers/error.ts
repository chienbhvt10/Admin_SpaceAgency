import { NotificationError } from 'commons/components/Notification';

export function clientError(code: string) {
  if (code === 'A000') {
    NotificationError('', '認証されていません。');
  }
  if (code === 'A001') {
    NotificationError('', 'ユーザーIDが存在しません。');
  }
  if (code === 'A002') {
    NotificationError('', 'パスワードが間違っています。');
  }
  if (code === 'A003') {
    NotificationError('', 'Refesh tokenまたはauth tokenが無効です。');
  }
  if (code === 'A004') {
    NotificationError('', 'リフレッシュトークンが見つかりません。');
  }
  if (code === 'A012') {
    NotificationError('', 'リフレッシュトークンが取り消されました。');
  }
  if (code === 'A013') {
    NotificationError('', 'リフレッシュトークンが不正な形式になっています。');
  }
  if (code === 'A014') {
    NotificationError('', '新しいパスワードは古いパスワードと同じです。');
  }

  if (code === 'A016') {
    NotificationError('', 'トークンが間違っています。');
  }
  if (code === 'A017') {
    NotificationError('', 'ApiKeyが正しくありません。');
  }
  if (code === 'A018') {
    NotificationError('', 'ユーザーは未確認です。');
  }
  if (code === 'A019') {
    NotificationError('', 'ログインに失敗しました。');
  }
  if (code === 'A021') {
    NotificationError('', 'ユーザーが存在しないため、トークンが生成できません。');
  }
  if (code === 'A022') {
    NotificationError('', 'リフレッシュトークン生成に失敗しました。');
  }
  if (code === 'A023') {
    NotificationError('', 'トークンのデコードに失敗しました。');
  }
  if (code === 'F000') {
    NotificationError('', 'アクセス拒否。');
  }

  if (code === 'B000') {
    NotificationError('', '関数が失敗します。');
  }
  if (code === 'B001') {
    NotificationError('', 'ユーザーが存在しません。');
  }
  if (code === 'B002') {
    NotificationError('', 'パスワードが正しくありません。');
  }
  if (code === 'B003') {
    NotificationError('', '新しいパスワードは古いパスワードと同じです。');
  }
  if (code === 'B004') {
    NotificationError('', '古いパスワードが正しくありません。');
  }
  if (code === 'B005') {
    NotificationError('', 'マテリアルが見つかりません。');
  }
  if (code === 'B006') {
    NotificationError('', 'マテリアルタイプが見つかりません。');
  }
  if (code === 'B007') {
    NotificationError('', 'スタイルが見つかりません。');
  }

  if (code === 'B008') {
    NotificationError('', 'ID形式が間違っています。');
  }
  if (code === 'B009') {
    NotificationError('', 'クエリエラー。');
  }
  if (code === 'B010') {
    NotificationError('', 'リクエストが見つかりません。');
  }
  if (code === 'B011') {
    NotificationError('', 'シミュレーションが見つかりません。');
  }
  if (code === 'B012') {
    NotificationError('', 'ComponentIdまたはcomponentInputが必要です');
  }
  if (code === 'B013') {
    NotificationError('', '画像ファイル（jpg | jpeg | png | gif）のみが許可されています。');
  }
  if (code === 'B014') {
    NotificationError('', '有効期限が切れているため、このユーザーをアクティブできません。');
  }
  if (code === 'B0015') {
    NotificationError('', 'ユーザーはすでにアクティブしています。');
  }
  if (code === 'B018 ') {
    NotificationError('', 'デザインに登録されているタイプを削除できません。');
  }
  if (code === 'B019 ') {
    NotificationError('', 'カスタマイズに登録されているデザインを削除できません。');
  }
  if (code === 'N000') {
    NotificationError('', 'リソースが見つかりません。');
  }
  if (code === 'N001') {
    NotificationError('', 'ID値が無効です');
  }
  if (code === 'N002') {
    NotificationError('', 'Reference Id または reference typeが見つかりません。');
  }
  if (code === 'V000') {
    NotificationError('', 'ユーザーの入力が間違っています。');
  }
}
