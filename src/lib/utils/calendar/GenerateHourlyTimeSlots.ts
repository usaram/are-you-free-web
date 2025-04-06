/**
 * 指定された開始時刻と終了時刻の間で、1時間ごとの時間スロットを生成します。
 *
 * @param scheduleStartHour - スケジュールの開始時刻 (0〜23の範囲)
 * @param scheduleEndHour - スケジュールの終了時刻 (0〜23の範囲)
 * @returns 1時間ごとの時間スロットの配列 (例: ["05:00", "06:00", ...])
 */
export function GenerateHourlyTimeSlots(
	scheduleStartHour: number,
	scheduleEndHour: number,
): string[] {
	// 開始時刻と終了時刻の差からスロットの数を計算
	const timeSlotLength = scheduleEndHour - scheduleStartHour

	// 1時間ごとの時間スロットを生成
	const hourlyTimeSlots = Array.from({ length: timeSlotLength }, (_, i) => {
		// 現在の時間を計算 (24時間制)
		const hour = scheduleStartHour + i % 24
		// 時間を "HH:00" の形式で返す
		return `${hour.toString().padStart(2, '0')}:00`
	})

	// 生成された時間スロットを返す
	return hourlyTimeSlots
}
