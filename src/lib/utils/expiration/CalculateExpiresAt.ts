export function CalculateExpiresAt(nowInJST: string, expirationDay: number): number {
	// Convert the current time in JST to milliseconds
	const now = new Date(nowInJST)
	// Get the current time in milliseconds
	const expiresAt = new Date(now.getTime() + (60 * 60 * 24 * expirationDay * 1000))

	return expiresAt.getTime()
}
