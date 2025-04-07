import type { Writable } from 'svelte/store'
import { get } from 'svelte/store'

/**
 * マウスが要素から離れたときに選択状態を解除します。
 *
 * @param isSelect - 選択状態を示すストア
 */
export function HandleMouseLeave(isSelect: Writable<boolean>) {
	if (get(isSelect)) {
		isSelect.set(false)
	}
}
