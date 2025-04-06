import { configs } from '@/lib/configs'

/**
 * スケジュールの開始時刻と終了時刻の間で、15分ごとの時間スロットを生成します。
 *
 * @returns 15分ごとの時間スロットの配列 (例: ["05:00", "05:15", "05:30", ...])
 */
export function GenerateQuarterlyHourTimeSlots(): string[] {
	// 1時間ごとの時間スロットを生成
	const hourlyTimeSlots = GenerateHourlyTimeSlots(
		configs.ScheduleStartTime, // スケジュールの開始時刻 (例: 5)
		configs.ScheduleEndTime, // スケジュールの終了時刻 (例: 23)
	)

	// 15分ごとの時間スロットを生成
	const quarterlyHourTimeSlots = hourlyTimeSlots.flatMap((time, index) => {
		// 時間部分を取得 (例: "05:00" -> 5)
		const [hour] = time.split(':').map(Number)

		// 0, 15, 30, 45分のスロットを生成
		const slots = Array.from({ length: 4 }, (_, i) => {
			const minutes = i * 15
			// "HH:mm" の形式で時間を返す
			return `${String(hour).padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
		})

		// 最後の時間スロットに "00:00" を追加 (例: 23:45 -> 00:00)
		if (index === hourlyTimeSlots.length - 1) {
			slots.push('00:00')
		}

		return slots
	})

	// 生成された15分ごとの時間スロットを返す
	return quarterlyHourTimeSlots
}
