import { gql } from 'graphql-request'

export const SignInWithSocial = gql`
	mutation SignInWithSocial($input: SignInWithSocialInput!) {
		payload: signInWithSocial(input: $input) {
			username
			token
		}
	}
`

export const SIGN_IN_WITH_SOCIAL_INPUT = gql`
	input SignInWithSocial {
		username: String!
		email: String!

		authProviderName: String!
		authProviderType: String!
		authProviderToken: String!
	}
`
