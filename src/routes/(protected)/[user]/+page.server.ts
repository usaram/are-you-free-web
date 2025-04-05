import { request } from '@/lib/graphs/request'
import { stores } from '@/lib/stores'
import { get } from 'svelte/store'

export const load: Load = async () => {
	if (get(stores.HolidaysStore).length === 0) {
		const [holidays, err] = await request.GetHolidays()
		if (err) {
			return {
				err,
			}
		}
		stores.HolidaysStore.set(holidays)
	}
}
