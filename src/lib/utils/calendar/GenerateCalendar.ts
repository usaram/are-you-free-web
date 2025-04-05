import type { DayProps } from '@/lib/types/DayProps'
import type { Writable } from 'svelte/store'
import { configs } from '@/lib/configs'

export function GenerateCalendar(
	nowInJST: string,
	holidays: Date[],
): DayProps[][] {
	let calendar: DayProps[][] = []

	console.log('nowInJST', nowInJST)

	nowInJST = new Date(nowInJST)
	const year = nowInJST.getFullYear()
	const month = nowInJST.getMonth()

	// 指定された月数分ループ
	for (let offset = 0; offset < configs.CalendarDisplayMonths; offset++) {
		const targetYear = year + Math.floor((month + offset) / 12)
		const targetMonth = month + offset

		const firstDay = new Date(year, targetMonth, 1)
		const lastDay = new Date(year, targetMonth + 1, 0)

		const daysInMonth = lastDay.getDate()
		const startingDayOfWeek = firstDay.getDay()

		// 1か月分のデータを格納するリスト
		const days: DayProps[] = []

		// 月の最初の日の前に空白セルを追加
		for (let i = 0; i < startingDayOfWeek; i++) {
			days.push({
				year:				     targetYear,
				month:			     targetMonth + 1,
				day:          0,
				isCurrentDay: false,
				isPastDay:    false,
				isWeekend:    false,
				isHoliday:    false,
			})
		}

		// 月の日付を追加
		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(year, targetMonth, day)
			const dayOfWeek = date.getDay()

			// 今日の日付かどうかを判定
			const isCurrentDay
                = date.getDate() === nowInJST.getDate()
                	&& date.getMonth() === nowInJST.getMonth()
                	&& date.getFullYear() === nowInJST.getFullYear()

			// 今日より前の日かどうかを判定
			const isPastDay = date < nowInJST && !isCurrentDay

			// 土曜日または日曜日かどうかを判定
			const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

			// 祝日かどうかを判定
			const isHoliday = holidays.some((holiday) => {
				const holidayDate = new Date(holiday)
				return (
					holidayDate.getDate() === date.getDate()
					&& holidayDate.getMonth() === date.getMonth()
					&& holidayDate.getFullYear() === date.getFullYear()
				)
			})

			days.push({
				year:  targetYear,
				month: targetMonth + 1,
				day,
				isCurrentDay,
				isPastDay,
				isWeekend,
				isHoliday,
			})
		}

		calendar.push(days)
	}

	return calendar
}
