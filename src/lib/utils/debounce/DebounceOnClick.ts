/**
 * クリックイベントをデバウンスして処理します。
 * ローディング状態を管理しながら、クリックイベントを処理します。
 *
 * @param func - クリックイベント時に実行する関数 (非同期関数も可)
 * @param wait - デバウンスの待機時間 (ミリ秒)
 * @param isLoading - ローディング状態を管理するオブジェクト。`set` メソッドで状態を更新します。
 * @returns クリックイベント処理関数
 */
export function DebounceOnClick(
	func: (e: MouseEvent)=> void | Promise<void>,
	wait: number,
	isLoading: { set: (value: boolean)=> void },
) {
	const debouncedOnClick = debounce(async (e: MouseEvent) => {
		await func(e) // デバウンスされたクリック処理関数
	}, wait)

	return (e: MouseEvent) => {
		isLoading.set(true) // ローディング状態を設定
		debouncedOnClick(e)
	}
}
