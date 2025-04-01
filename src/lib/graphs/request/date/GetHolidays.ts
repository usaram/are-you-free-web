'use server'

import type { GetHolidaysQuery } from '@/lib/graphs/generated/types'
import type { err } from '@/lib/types'
import { client } from '@/lib/graphs'
import { query } from '@/lib/graphs/schema/query'

export async function GetHolidays(): Promise<[Date[], err]> {
	const { res, err } = await client.request<GetHolidaysQuery>({
		query:     query.GetHolidays,
		variables: {},
	})
	if (err) {
		return [null, err]
	}

	return [res.holidays, null]
}
