export function IsExpires(nowInJST: string, expiresAt: number): boolean {
	const now = Date.now(nowInJST)
	return now > expiresAt
}
