import { GetHolidays } from '@/lib/graphs/schema/date/GetHolidays'
import { GetNowInJst } from '@/lib/graphs/schema/date/GetNowInJST'
import { gql } from 'graphql-request'

export const HealthCheckForBackend = gql`
	query HealthCheckForBackend {
		healthCheckForBackend
	}
`

export const query = {
	HealthCheckForBackend,

	// Date
	GetNowInJst,
	GetHolidays,
}
