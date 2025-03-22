import { gql } from 'graphql-request'

export const GetNowInJst = gql`
	query GetNowInJst {
		nowInJST: getNowInJST
	}
`
