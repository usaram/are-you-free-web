/**
 * @description この関数は、指定された月オフセットに基づいて英語で月名を取得します。
 * @param monthOffset - 現在の月からのオフセット（月数）。
 * @returns {string} 英語の月名（例: "January", "February"）。
 * @example
 * // 現在の月から2ヶ月後の月名を取得
 * GetMonthNameInEnglish(2); // "June"（現在の月が4月の場合）
 */
export function GetMonthNameInEnglish(monthOffset: number): string {
	const date = new Date()
	date.setMonth(date.getMonth() + monthOffset)
	return date.toLocaleString('en-US', { month: 'long' })
}
