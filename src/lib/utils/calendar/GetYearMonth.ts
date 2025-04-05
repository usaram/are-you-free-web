/**
 * @description この関数は、指定された月オフセットに基づいて「YYYY/MM」の形式で年月を取得します。
 * @param monthOffset - 現在の月からのオフセット（月数）。
 * @returns {string} 「YYYY/MM」の形式で表された年月。
 * @example
 * // 現在の月が4月の場合、2ヶ月後の年月を取得
 * GetYearMonth(2); // "2025/06"
 */
export function GetYearMonth(monthOffset: number): string {
	const date = new Date()
	date.setMonth(date.getMonth() + monthOffset)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0') // 月を2桁にフォーマット
	return `${year}/${month}`
}
