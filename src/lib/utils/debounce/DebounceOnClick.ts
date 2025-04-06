/**
 * クリックイベントをデバウンスして処理します。
 * ローディング状態を管理しながら、クリックイベントを処理します。
 *
 * @param func - クリックイベント時に実行する関数 (非同期関数も可)
 * @param wait - デバウンスの待機時間 (ミリ秒)
 * @param isLoading - ローディング状態を管理するオブジェクト
 * @param isLoading.set - ローディング状態を更新するメソッド (true: ローディング開始, false: ローディング終了)
 * @returns クリックイベント処理関数
 */
export function DebounceOnClick(
	func: (e: MouseEvent)=> void | Promise<void>,
	wait: number,
	isLoading: { set: (state: boolean)=> void },
): (e: MouseEvent)=> void {
	let timeout: NodeJS.Timeout | null = null

	return (e: MouseEvent) => {
		if (timeout)
			clearTimeout(timeout)

		isLoading.set(true)
		timeout = setTimeout(async () => {
			await func(e)
			isLoading.set(false)
		}, wait)
	}
}
