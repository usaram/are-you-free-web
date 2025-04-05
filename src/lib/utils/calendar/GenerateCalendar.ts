// import type { types } from '@/lib/types'
// import type { Writable } from 'svelte/store'
// import { stores } from '@/lib/stores'
// import { get } from 'svelte/store'

// // 指定された月のカレンダーの日付を生成する関数
// export function GenerateCalendar(
// 	monthOffset: number,
// 	nowInJST: Writable<Date>,
// 	holidays: Writable<Date[]>,
// 	calendar: types.stores.CalendarStoreProps,
// ) {
// 	// 表示したい年と月を設定
// 	const nowDate = get(nowInJST) // Writable<Date> の値を取得
// 	const year = nowDate.getFullYear()
// 	const month = nowDate.getMonth() + monthOffset

// 	// 月の最初の日と最後の日を取得
// 	const firstDay = new Date(year, month, 1)
// 	const lastDay = new Date(year, month + 1, 0)

// 	// 月の日数と最初の曜日を取得
// 	const daysInMonth = lastDay.getDate()
// 	const startingDayOfWeek = firstDay.getDay()

// 	// 初期化: lastDay 分の DayStore を格納
// 	days.set(
// 		Array.from({ length: daysInMonth }, (_, i) => ({
// 			day:          i + 1,
// 			date:         new Date(year, month, i + 1),
// 			isCurrentDay: false,
// 			isWeekend:    false,
// 			isHoliday:    false,
// 		})),
// 	)

// 	// 月の最初の日の前に空白セルを追加
// 	days.update((list) => {
// 		const updatedList = [...list] // 新しい配列を作成

// 		// 月の最初の日の前に空白セルを追加
// 		for (let i = 0; i < startingDayOfWeek; i++) {
// 			updatedList.push({
// 				day:          0,
// 				date:         null,
// 				isCurrentDay: false,
// 				isWeekend:    false,
// 				isHoliday:    false,
// 			})
// 		}

// 		// 月の日付を追加
// 		for (let day = 1; day <= daysInMonth; day++) {
// 			const date = new Date(year, month, day)
// 			const dayOfWeek = date.getDay()

// 			const isCurrentDay
//             = date.getDate() === nowDate.getDate()
//             	&& date.getMonth() === nowDate.getMonth()
//             	&& date.getFullYear() === nowDate.getFullYear()

// 			const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

// 			const holidayList = get(holidays)
// 			const isHoliday = holidayList.some((holiday) => {
// 				const holidayDate = new Date(holiday)
// 				return (
// 					holidayDate.getDate() === date.getDate()
// 					&& holidayDate.getMonth() === date.getMonth()
// 					&& holidayDate.getFullYear() === date.getFullYear()
// 				)
// 			})

// 			updatedList.push({
// 				day,
// 				date,
// 				isCurrentDay,
// 				isWeekend,
// 				isHoliday,
// 			})
// 		}

// 	})

// 	// // 月の日付を追加
// 	// days.update((list) => {
// 	// 	console.log('33333333333333333333333')
// 	// 		console.log(list)
// 	// 	for (let day = 1; day <= daysInMonth; day++) {
// 	// 		const date = new Date(year, month, day)
// 	// 		const dayOfWeek = date.getDay()

// 	// 		// 今日の日付かどうかを判定
// 	// 		const isCurrentDay
// 	//               = date.getDate() === nowDate.getDate()
// 	//               	&& date.getMonth() === nowDate.getMonth()
// 	//               	&& date.getFullYear() === nowDate.getFullYear()

// 	// 		// 週末かどうかを判定 (日曜日または土曜日)
// 	// 		const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

// 	// 		// 祝日かどうかを判定
// 	// 		const holidayList = get(holidays) // Writable<Date[]> の値を取得
// 	// 		const isHoliday = holidayList.some((holiday) => {
// 	// 			const holidayDate = new Date(holiday)
// 	// 			return (
// 	// 				holidayDate.getDate() === date.getDate()
// 	// 				&& holidayDate.getMonth() === date.getMonth()
// 	// 				&& holidayDate.getFullYear() === date.getFullYear()
// 	// 			)
// 	// 		})

// 	// 		console.log('111111111111111111111111')
// 	// 		console.log(list)

import type { types } from '@/lib/types'
import type { Writable } from 'svelte/store'
// 	// 		// 日付情報を配列に追加
// 	// 		list.push({
// 	// 			day,
// 	// 			date,
// 	// 			isCurrentDay,
// 	// 			isWeekend,
// 	// 			isHoliday,
// 	// 		})
// 	// 	}
// 	// })
// }
import { configs } from '@/lib/configs'
import { get } from 'svelte/store'

export function GenerateCalendar(
	monthOffset: number,
	nowInJST: Writable<Date>,
	holidays: Writable<Date[]>,
	calendar: Writable<types.DayProps[][]>, // ストアの型を配列の配列に変更
) {
	const nowDate = get(nowInJST) // Writable<Date> の値を取得
	const year = nowDate.getFullYear()
	const month = nowDate.getMonth() + monthOffset

	// 指定された月数分ループ
	for (let offset = 0; offset < configs.CalendarDisplayMonths; offset++) {
		const targetMonth = month + offset
		const firstDay = new Date(year, targetMonth, 1)
		const lastDay = new Date(year, targetMonth + 1, 0)

		const daysInMonth = lastDay.getDate()
		const startingDayOfWeek = firstDay.getDay()

		// 1か月分のデータを格納するリスト
		const monthList: types.DayProps[] = []

		// 月の最初の日の前に空白セルを追加
		for (let i = 0; i < startingDayOfWeek; i++) {
			monthList.push({
				day:          0,
				date:         null,
				isCurrentDay: false,
				isWeekend:    false,
				isHoliday:    false,
			})
		}

		// 月の日付を追加
		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(year, targetMonth, day)
			const dayOfWeek = date.getDay()

			const isCurrentDay
                = date.getDate() === nowDate.getDate()
                	&& date.getMonth() === nowDate.getMonth()
                	&& date.getFullYear() === nowDate.getFullYear()

			const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

			const holidayList = get(holidays)
			const isHoliday = holidayList.some((holiday) => {
				const holidayDate = new Date(holiday)
				return (
					holidayDate.getDate() === date.getDate()
					&& holidayDate.getMonth() === date.getMonth()
					&& holidayDate.getFullYear() === date.getFullYear()
				)
			})

			monthList.push({
				day,
				date,
				isCurrentDay,
				isWeekend,
				isHoliday,
			})
		}

		// ストアに直接リストを追加
		calendar.update((list) => {
			return [...list, monthList] // 現在のリストに新しい月のリストを追加
		})
	}
}
