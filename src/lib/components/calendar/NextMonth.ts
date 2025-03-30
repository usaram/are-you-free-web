// Navigate to next month (but not after month+2)
function nextMonth(monthOffset: number) {
	if (monthOffset < 2) {
		monthOffset++
		updateCalendar()
	}
}
