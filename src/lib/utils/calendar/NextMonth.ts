/**
 * @description この関数は、カレンダーで次の月に移動するために使用されます。
 * @param monthOffset - 現在の月からのオフセット（月数）。
 * @param calendarDisplayMonths - カレンダーに表示する月数。
 * @example
 * // 現在の月から次の月に移動
 * NextMonth(1, 12);
 */
export function NextMonth(monthOffset: number, calendarDisplayMonths: number) {
	if (calendarOffset < calendarDisplayMonths - 1) {
		calendarOffset++
	}
}
