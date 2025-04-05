import { GenerateCalendar } from '@/lib/utils/calendar'
import { DebounceFunction, DebounceKeyUp, DebounceOnClick } from '@/lib/utils/debounce'
import { CalculateExpiresAt, IsExpiresAt } from '@/lib/utils/expiration'

export const utils = {
	// calendar
	GenerateCalendar,

	// debounce
	DebounceFunction,
	DebounceKeyUp,
	DebounceOnClick,

	// expiration
	CalculateExpiresAt,
	IsExpiresAt,
}
