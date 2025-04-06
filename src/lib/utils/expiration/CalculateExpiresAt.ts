/**
 * 現在時刻と有効期限の日数を基に、有効期限のタイムスタンプを計算します。
 *
 * @param nowInJST - 現在時刻を表す ISO 8601 形式の文字列 (例: "2025-03-27T12:00:00+09:00")
 * @param expirationDay - 有効期限の日数
 * @returns 有効期限を表すタイムスタンプ (ミリ秒単位)
 *
 * @throws エラー - nowInJST が無効な日付形式の場合
 */
export function CalculateExpiresAt(nowInJST: string, expirationDay: number): number {
	// 現在時刻 (JST) を Date オブジェクトに変換
	const now = new Date(nowInJST)
	if (Number.isNaN(now.getTime())) {
		throw new TypeError('Invalid date format for nowInJST')
	}

	// 有効期限を計算 (現在時刻 + 指定された日数)
	const expiresAt = new Date(now.getTime() + (60 * 60 * 24 * expirationDay * 1000))

	// 有効期限のタイムスタンプを返す
	return expiresAt.getTime()
}
