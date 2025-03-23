import { GraphQLClient } from 'graphql-request'
import type { ClientError } from 'graphql-request'
import type { err } from '@/lib/types/err'
import { env } from '@/lib/configs/env/public'

interface RequestProps {
    query: string
    variables?: unknown
    token?: string
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

function NewGraphQLClient(isServer: boolean): GraphQLClientClass {
	console.warn('11111111111111111111')
	console.warn('env:', env)
	if (env.environment === 'local') {
		console.warn('22222222222222222222')
			const apiEndpointClient = env.apiEndpointClient
			const apiEndpointServer = env.apiEndpointServer // this is the docker-compose service name
			const apiEndpoint = isServer ? apiEndpointServer : apiEndpointClient
			console.warn('apiEndpoint:', apiEndpoint)
			console.warn('apiEndpointClient:', apiEndpointClient)
			console.warn('apiEndpointServer:', apiEndpointServer)
			console.warn(`${apiEndpoint}:${env.apiPort}/api/query`)

			return new GraphQLClientClass(`${apiEndpoint}:${env.apiPort}/api/query`)
	}

	return new GraphQLClientClass(`${env.apiEndpoint}:${env.apiPort}/api/query`)
}

export const isServer = typeof window === 'undefined'
console.warn('isServer:', isServer)
export const client = NewGraphQLClient(isServer)
