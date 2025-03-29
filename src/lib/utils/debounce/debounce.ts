/**
 * 指定した関数をデバウンスして実行します。
 * デバウンスとは、一定時間内に繰り返し呼び出された関数を1回だけ実行する仕組みです。
 *
 * @param func - 実行する関数 (イベントを引数に取る)
 * @param wait - デバウンスの待機時間 (ミリ秒)
 * @returns デバウンスされた関数
 */
export function debounce(func: (e: Event)=> void, wait: number) {
	let timer: ReturnType<typeof setTimeout> // このデバウンス関数専用のタイマー

	return (e: Event) => {
		clearTimeout(timer) // 前回のタイマーをクリア
		timer = setTimeout(() => {
			func(e) // 指定時間後に関数を実行
		}, wait)
	}
}
