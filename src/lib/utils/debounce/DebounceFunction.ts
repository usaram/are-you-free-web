/**
 * 任意の関数をデバウンスして実行します。
 * ローディング状態を管理しながら、関数を実行します。
 *
 * @param func - 実行する関数 (非同期関数も可)
 * @param wait - デバウンスの待機時間 (ミリ秒)
 * @param isLoading - ローディング状態を管理するオブジェクト
 * @param isLoading.set - ローディング状態を更新するメソッド (true: ローディング開始, false: ローディング終了)
 * @returns デバウンスされた関数
 */
export function DebounceFunction(
	func: ()=> void | Promise<void>,
	wait: number,
	isLoading: { set: (value: boolean)=> void },
) {
	let timer: ReturnType<typeof setTimeout>

	const debouncedFunction = async () => {
		clearTimeout(timer) // 前回のタイマーをクリア
		timer = setTimeout(async () => {
			isLoading.set(true) // ローディング状態を設定
			await func() // 関数を実行
			isLoading.set(false) // ローディング状態を解除
		}, wait)
	}

	return debouncedFunction
}
