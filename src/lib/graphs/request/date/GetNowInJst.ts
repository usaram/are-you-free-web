'use server'

import type { GetNowInJstQuery } from '@/lib/graphs/generated/types'
import { client } from '@/lib/graphs'
import { query } from '@/lib/graphs/schema/query'
import type { err } from '@/lib/types'

export async function GetNowInJst(): Promise<[Date, err]> {
	const { res, err } = await client.request<GetNowInJstQuery>({
		query:     query.GetNowInJst,
		variables: {},
	})
	if (err) {
		return [null, err]
	}

	return [res.nowInJST, null]
}
