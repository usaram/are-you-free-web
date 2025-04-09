import { CalendarStore } from '@/lib/stores/components/calendar/CalendarStore'
import { TimeSlotStore } from '@/lib/stores/components/calendar/TimeSlotStore'
import { SignInFormStore } from '@/lib/stores/components/form/SignInFormStore'
import { SignUpFormStore } from '@/lib/stores/components/form/SignUpFormStore'
import { HolidaysStore } from '@/lib/stores/graphs/date/HolidaysStore'
import { NowInJSTStore } from '@/lib/stores/graphs/date/NowInJSTStore'

export const stores = {
	// components
	// * calendar
	CalendarStore,
	TimeSlotStore,
	// * form
	SignInFormStore,
	SignUpFormStore,

	// graphs
	// * date
	NowInJSTStore,
	HolidaysStore,
}
