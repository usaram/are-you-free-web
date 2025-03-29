/**
 * 指定された現在時刻と有効期限を比較し、期限切れかどうかを判定します。
 *
 * @param nowInJST - 現在時刻を表す ISO 8601 形式の文字列 (例: "2025-03-27T12:00:00+09:00")
 * @param expiresAt - 有効期限を表すタイムスタンプ (ミリ秒単位)
 * @returns 期限切れの場合は true、そうでない場合は false
 *
 * @throws エラー - nowInJST が無効な日付形式の場合
 */
export function IsExpires(nowInJST: string, expiresAt: number): boolean {
	const now = new Date(nowInJST);
	if (isNaN(now.getTime())) {
			throw new Error("Invalid date format for nowInJST");
	}
	return now.getTime() > expiresAt; // 現在時刻が有効期限を超えているかを判定
}
