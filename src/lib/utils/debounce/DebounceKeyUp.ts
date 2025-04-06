/**
 * キーアップイベントをデバウンスして処理します。
 * 入力中の状態を管理し、一定時間入力が停止した後に処理を実行します。
 *
 * @param input - キーアップイベント時に実行する関数
 * @param wait - デバウンスの待機時間 (ミリ秒)
 * @param isTyping - 入力中の状態を管理するオブジェクト
 * @param isTyping.set - 入力中状態を更新するメソッド (true: 入力中, false: 入力終了)
 * @returns キーアップイベント処理関数
 */
export function DebounceKeyUp(
	input: (e: KeyboardEvent)=> void,
	wait: number,
	isTyping: { set: (value: boolean)=> void },
) {
	let typingTimeout

	const debouncedInput = debounce((e: KeyboardEvent) => {
		input(e) // デバウンスされた入力処理関数
		clearTimeout(typingTimeout)
		typingTimeout = setTimeout(() => {
			isTyping.set(false) // 一定時間後に入力中状態を解除
		}, wait)
	}, wait)

	return (e: KeyboardEvent) => {
		if (e.key === 'Tab') {
			isTyping.set(false) // Tabキーの場合は入力中状態を解除
			return
		}

		clearTimeout(typingTimeout)
		isTyping.set(true) // 入力中状態を設定
		debouncedInput(e)
	}
}
