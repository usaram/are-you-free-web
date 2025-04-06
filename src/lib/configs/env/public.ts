import {
	PUBLIC_API_ENDPOINT_CLIENT,
	PUBLIC_API_ENDPOINT_SERVER,
	PUBLIC_API_PORT,
	PUBLIC_ENVIRONMENT,
} from '$env/static/public'

export const env = {
	environment:       PUBLIC_ENVIRONMENT,
	apiPort:           PUBLIC_API_PORT,
	apiEndpointClient: PUBLIC_API_ENDPOINT_CLIENT,
	apiEndpointServer: PUBLIC_API_ENDPOINT_SERVER,
}
