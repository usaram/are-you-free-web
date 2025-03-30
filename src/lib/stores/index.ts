import { CalendarStore } from '@/lib/stores/components/calendar'
import { SignInFormStore } from '@/lib/stores/components/form/SignInFormStore'
import { SignUpFormStore } from '@/lib/stores/components/form/SignUpFormStore'
import { NowInJSTStore } from '@/lib/stores/graphs/date/NowInJSTStore'


export const stores = {
	// components
	// * form
	SignUpFormStore,
	SignInFormStore,
	// * calendar
	CalendarStore,

	// graphs
	// * date
	NowInJSTStore,
}
