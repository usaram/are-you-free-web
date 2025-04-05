/**
 * @description この関数は、カレンダーで前の月に移動するために使用されます。
 * @param calendarOffset - 現在の月からのオフセット（月数）。
 * @returns none
 * @example
 * // 現在の月から前の月に移動
 * PrevMonth(1);
 */
export function PrevMonth(calendarOffset: number) {
	if (calendarOffset > 0) {
			calendarOffset--
	}
}
