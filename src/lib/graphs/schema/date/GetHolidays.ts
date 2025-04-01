import { gql } from 'graphql-request'

export const GetHolidays = gql`
	query GetHolidays {
		holidays: getHolidays
	}
`
