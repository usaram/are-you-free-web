export function CalculateExpiresAt(nowInJST: string, expirationDay: number): number {
	const now = new Date(nowInJST)
	const expiresAt = new Date(now.getTime() + (60 * 60 * 24 * expirationDay * 1000))

	return expiresAt.getTime()
}

export function IsExpired(nowInJST: string, expiresAt: number): boolean {
	const now = Date.now(nowInJST)
	return now > expiresAt
}
