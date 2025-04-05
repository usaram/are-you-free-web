import type { err } from '@/lib/types'
import type { DayProps } from '@/lib/types/DaysProps'
import type { Load } from '@sveltejs/kit'
import { request } from '@/lib/graphs/request'
import { utils } from '@/lib/utils'

export const load: Load<Promise<{
	calendar: DayProps[][]
	err:      err
}>> = async () => {
	const [nowInJST, NowInJSTErr] = await request.GetNowInJst()
	if (NowInJSTErr) {
		return {
			calendar: [],
			err:      NowInJSTErr,
		}
	}

	const [holidays, GetHolidaysErr] = await request.GetHolidays()
	if (GetHolidaysErr) {
		return {
			calendar: [],
			err:      GetHolidaysErr,
		}
	}

	const calendar = utils.GenerateCalendar(
		nowInJST,
		holidays,
	)

	console.warn('calendar', calendar)

	return {
		calendar,
		err: null,
	}
}
