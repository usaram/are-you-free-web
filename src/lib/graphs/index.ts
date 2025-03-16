import type { err } from '@/lib/types/graphs/err'
import type { RequestProps } from '@/lib/types/graphs/RequestProps'
import type { ClientError } from 'graphql-request'
import { constants } from '@/lib/constants'
import { GraphQLClient } from 'graphql-request'

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
	}: RequestProps): Promise<{ data: unknown, err: err }> {
		if (token) {
			this.setHeader('Authorization', `Bearer ${token}`)
		}

		return this.client
			.request<T>(query, variables)
			.then((data) => {
				return { data, err: null }
			})
			.catch((error) => {
				return { data: null, err: this.parseGraphQLError(error) }
			})
	}

	private parseGraphQLError(err: ClientError): Error {
		if (err.response && err.response.errors && err.response.errors.length > 0) {
			const graphqlError = err.response.errors[0]
			if (graphqlError.extensions && graphqlError.extensions.code) {
				const code = String(graphqlError.extensions.code)
				return new Error(code)
			}
		}
		return new Error('Unknown GraphQL error occurred')
	}
}

export { GraphQLClientClass }

const clientApiEndpoint = `${constants.envs.public.clientApiEndpoint}:${constants.envs.public.apiPort}${constants.envs.public.graphqlHandlerPath}`
const serverApiEndpoint = `${constants.envs.public.serverApiEndpoint}:${constants.envs.public.apiPort}${constants.envs.public.graphqlHandlerPath}`

function Client(isSever: boolean): GraphQLClientClass {
	const apiEndpoint = isSever ? serverApiEndpoint : clientApiEndpoint
	return new GraphQLClientClass(apiEndpoint)
}

const isServer = typeof window === 'undefined'
export const client = Client(isServer)
