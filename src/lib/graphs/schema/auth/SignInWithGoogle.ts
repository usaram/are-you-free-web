import { gql } from 'graphql-request'

export const SignInWithGoogle = gql`
	mutation SignInWithGoogle($input: SignInWithGoogleInput!) {
		payload: signInWithGoogle(input: $input) {
			username
			token
		}
	}
`

export const SIGN_IN_WITH_GOOGLE_INPUT = gql`
	input SignInWithGoogle {
		username: String!
		email: String!
	}
`
