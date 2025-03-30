'use server'

import type { HealthCheckForBackendQuery } from '@/lib/graphs/generated/types'
import type { err } from '@/lib/types'
import { client } from '@/lib/graphs'
import { query } from '@/lib/graphs/schema/query'

export async function HealthCheckForBackend(): Promise<[string, err]> {
	const { data, err } = await client.request<HealthCheckForBackendQuery>({
		query:     query.HealthCheckForBackend,
		variables: {},
	})
	if (err) {
		return ['', err]
	}

	return [data.healthCheckForBackend, null]
}
