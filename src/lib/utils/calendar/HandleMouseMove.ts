import type { Writable } from 'svelte/store'
import { CalculateYInContainer } from '@/lib/utils/calendar/CalculateYInContainer'
import { get } from 'svelte/store'

/**
 * マウス移動イベントを処理し、現在のY座標を更新します。
 *
 * @param e - マウスイベント
 * @param containerRef - コンテナ要素の参照 (HTMLDivElement)
 * @param isSelect - 選択状態を示すストア
 * @param currentY - 現在のY座標を示すストア
 */
export function HandleMouseMove(
	e: MouseEvent,
	containerRef: HTMLDivElement | null,
	isSelect: Writable<boolean>,
	currentY: Writable<number>,
) {
	// 選択状態でない場合は処理を終了
	if (!get(isSelect)) {
		return
	}

	// マウスのY座標をコンテナ内の範囲に制限
	const y = CalculateYInContainer(e.clientY, containerRef)

	// 現在のY座標を更新
	currentY.set(y)
}
