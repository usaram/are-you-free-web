import type { err } from '@/lib/types/err'
import type { ClientError } from 'graphql-request'
import { GraphQLClient } from 'graphql-request'

interface RequestProps {
	query:      string
	variables?: unknown
	token?:     string
}

class GraphQLClientClass {
	private client: GraphQLClient

	constructor(apiEndpoint: string) {
		this.client = new GraphQLClient(apiEndpoint)
	}

	setHeader(key: string, value: string) {
		this.client.setHeader(key, value)
	}

	async request<T>({
		query,
		variables,
		token,
	}: RequestProps): Promise<{ res: unknown, err: err }> {
		if (token) {
			this.setHeader('Authorization', `Bearer ${token}`)
		}

		return this.client
			.request<T>(query, variables)
			.then((res) => {
				return { res, err: null }
			})
			.catch((error) => {
				return { res: null, err: this.parseGraphQLError(error) }
			})
	}

	private parseGraphQLError(err: ClientError): Error {
		console.error('GraphQL error details:', err)
		if (err.response && err.response.errors && err.response.errors.length > 0) {
			const graphqlError = err.response.errors[0]
			if (graphqlError.extensions && graphqlError.extensions.code) {
				const code = String(graphqlError.extensions.code)
				console.error('111111111111111111')
				return new Error(`GraphQL error: ${code} - ${graphqlError.message}`)
			}
			console.error('222222222222222222')
			return new Error(`GraphQL error: ${graphqlError.message}`)
		}
		console.error('333333333333333333')
		return new Error('Unknown GraphQL error occurred')
	}
}

export { GraphQLClientClass }
export const client = new GraphQLClientClass('http://localhost:1323/api/query')
// const clientApiEndpoint = `${constants.envs.public.clientApiEndpoint}:${constants.envs.public.apiPort}${constants.envs.public.graphqlHandlerPath}`
// const serverApiEndpoint = `${constants.envs.public.serverApiEndpoint}:${constants.envs.public.apiPort}${constants.envs.public.graphqlHandlerPath}`

// function Client(isSever: boolean): GraphQLClientClass {
// 	const apiEndpoint = isSever ? serverApiEndpoint : clientApiEndpoint
// 	return new GraphQLClientClass(apiEndpoint)
// }

// const isServer = typeof window === 'undefined'
// export const client = Client(isServer)
