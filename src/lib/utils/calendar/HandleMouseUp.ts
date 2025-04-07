import type { Writable } from 'svelte/store'
import { configs } from '@/lib/configs'
import { utils } from '@/lib/utils'
import { get } from 'svelte/store'

/**
 * マウスの押下解除イベントを処理し、選択範囲を確定します。
 *
 * @param containerRef - コンテナ要素の参照 (HTMLDivElement)
 * @param quarterlyHourTimeSlots - 15分刻みの時間スロット
 * @param isSelect - 選択状態を示すストア
 * @param startY - 選択の開始位置を示すストア
 * @param currentY - 現在のY座標を示すストア
 * @param selectedRange - 選択された時間範囲を示すストア
 */
export function HandleMouseUp(
	containerRef: HTMLDivElement | null,
	quarterlyHourTimeSlots: string[],
	isSelect: Writable<boolean>,
	startY: Writable<number>,
	currentY: Writable<number>,
	selectedRange: Writable<{ start: string, end: string }>,
) {
	// コンテナが存在しない、選択状態でない、または開始位置と現在位置が初期値の場合は処理を終了
	if (!containerRef || !get(isSelect) || get(startY) === 0 && get(currentY) === 0) {
		return
	}

	// 選択状態を解除
	isSelect.set(false)

	// ドラッグ距離が閾値未満の場合は選択をリセットして終了
	if (Math.abs(get(startY) - get(currentY)) < configs.TimeSlotMouseDragThreshold) {
		startY.set(0)
		currentY.set(0)
		return
	}

	// 開始位置と終了位置を計算
	const minY = Math.min(get(startY), get(currentY))
	const maxY = Math.max(get(startY), get(currentY))

	// Y座標から時間範囲を計算
	const [startTime, endTime] = utils.CalculateTimeFromY(minY, maxY, containerRef, quarterlyHourTimeSlots)

	// 選択された時間範囲を設定
	selectedRange.set({
		start: startTime,
		end:   endTime,
	})
}
