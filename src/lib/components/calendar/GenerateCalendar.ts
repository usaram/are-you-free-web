// // 指定された月のカレンダーの日付を生成する関数
// function GenerateCalendar(monthOffset: Number, nowInJST: Date) {
// 	// 現在の年と月を取得
// 	const year = nowInJST.getFullYear()
// 	const month = nowInJST.getMonth() + monthOffset

// 	// 月の最初の日と最後の日を取得
// 	const firstDay = new Date(year, month, 1)
// 	const lastDay = new Date(year, month + 1, 0)

// 	// 月の日数と最初の曜日を取得
// 	const daysInMonth = lastDay.getDate()
// 	const startingDayOfWeek = firstDay.getDay()

// 	let days = []

// 	// 月の最初の日の前に空白セルを追加
// 	for (let i = 0; i < startingDayOfWeek; i++) {
// 		days.push({ day: null, isCurrentDay: false, isWeekend: false, isHoliday: false })
// 	}

// 	// 月の日付を追加
// 	for (let day = 1; day <= daysInMonth; day++) {
// 		const date = new Date(year, month, day)
// 		const dayOfWeek = date.getDay()

// 		// 今日の日付かどうかを判定
// 		const isCurrentDay
// 					= date.getDate() === nowInJST.getDate()
// 						&& date.getMonth() === nowInJST.getMonth()
// 						&& date.getFullYear() === nowInJST.getFullYear()

// 		// 週末かどうかを判定 (日曜日または土曜日)
// 		const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

// 		// 祝日かどうかを判定
// 		const holiday = holidays.find(h =>
// 			h.date.getDate() === date.getDate()
// 			&& h.date.getMonth() === date.getMonth()
// 			&& h.date.getFullYear() === date.getFullYear(),
// 		)

// 		// 日付情報を配列に追加
// 		days.push({
// 			day, // 日付
// 			date, // Date オブジェクト
// 			isCurrentDay, // 今日かどうか
// 			isWeekend, // 週末かどうか
// 			isHoliday:   !!holiday, // 祝日かどうか
// 			holidayName: holiday?.name, // 祝日の名前 (存在する場合)
// 		})
// 	}

// 	// 生成された日付の配列を返す
// 	return days
// }
