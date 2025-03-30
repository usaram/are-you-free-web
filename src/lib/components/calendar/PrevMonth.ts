// Navigate to previous month (but not before current month)
function prevMonth(monthOffset: number) {
	if (monthOffset > 0) {
		monthOffset--
		updateCalendar()
	}
}
