import { gql } from 'graphql-request'

export const SignUpWithCredential = gql`
	mutation SignUpWithCredential($input: SignUpWithCredentialInput!) {
		payload: signUpWithCredential(input: $input) {
			isSuccess
		}
	}
`

export const SIGN_UP_WITH_CREDENTIAL_INPUT = gql`
	input SignUpWithCredential {
		username: String!
		email: String!
		password: String!
		confirmPassword: String!
	}
`
