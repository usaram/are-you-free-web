import { configs } from '@/lib/configs'

export function GenerateHourlyTimeSlots(): string[] {
	const hourlyTimeSlots = GenerateHourlyTimeSlots(
		configs.ScheduleStartTime,
		configs.ScheduleEndTime,
	)

	const quarterHourTimeSlots = hourlyTimeSlots.flatMap((time, index) => {
		const [hour] = time.split(':').map(Number)

		const slots = Array.from({ length: 4 }, (_, i) => {
			const minutes = i * 15
			return `${String(hour).padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
		})

		if (index === hourlyTimeSlots.length - 1) {
			slots.push('00:00')
		}

		return slots
	})

	return quarterHourTimeSlots
}
