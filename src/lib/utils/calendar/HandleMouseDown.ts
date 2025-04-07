import type { Writable } from 'svelte/store'
import { CalculateYInContainer } from '@/lib/utils/calendar/CalculateYInContainer'

/**
 * マウスの押下イベントを処理し、選択状態を開始します。
 *
 * @param e - マウスイベント
 * @param containerRef - コンテナ要素の参照 (HTMLDivElement)
 * @param isSelect - 選択状態を示すストア
 * @param startY - 選択の開始位置を示すストア
 * @param currentY - 現在の位置を示すストア
 */
export function HandleMouseDown(
	e: MouseEvent,
	containerRef: HTMLDivElement | null,
	isSelect: Writable<boolean>,
	startY: Writable<number>,
	currentY: Writable<number>,
) {
	// 選択状態を開始
	isSelect.set(true)

	// マウスが押下された時点のY座標を取得
	const y = CalculateYInContainer(e.clientY, containerRef)

	// 開始位置と現在位置を設定
	startY.set(y)
	currentY.set(y)
}
