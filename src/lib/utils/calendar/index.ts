// Navigate to previous month (but not before current month)
function prevMonth() {
	if (viewMonth > 0) {
		viewMonth--;
		updateCalendar();
	}
}

// Navigate to next month (but not after month+2)


// Get month name
function getMonthName(monthOffset) {
	const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, 1);
	return date.toLocaleString('ja-JP', { year: 'numeric', month: 'long' });
}
