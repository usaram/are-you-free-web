import { gql } from 'graphql-request'

export const SignInWithCredential = gql`
	mutation SignInWithCredential($input: SignInWithCredentialInput!) {
		payload: signInWithCredential(input: $input) {
			username
			token
		}
	}
`

export const SIGN_IN_WITH_CREDENTIAL_INPUT = gql`
	input SignInWithCredential {
		email: String!
		password: String!
	}
`
