import { CalculateTimeFromY, GenerateCalendar, GenerateHourlyTimeSlots, GenerateQuarterlyHourTimeSlots, GetMonthNameInEnglish, GetYearMonth, NextMonth, PrevMonth } from '@/lib/utils/calendar'
import { DebounceFunction, DebounceKeyUp, DebounceOnClick } from '@/lib/utils/debounce'
import { CalculateExpiresAt, IsExpiresAt } from '@/lib/utils/expiration'

export const utils = {
	// calendar
	GenerateCalendar,
	GetYearMonth,
	GetMonthNameInEnglish,
	PrevMonth,
	NextMonth,
	GenerateHourlyTimeSlots,
	GenerateQuarterlyHourTimeSlots,
	CalculateTimeFromY,

	// debounce
	DebounceFunction,
	DebounceKeyUp,
	DebounceOnClick,

	// expiration
	CalculateExpiresAt,
	IsExpiresAt,
}
