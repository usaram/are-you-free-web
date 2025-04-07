import type { Writable } from 'svelte/store'

export interface TimeSlotStoreProps {
	isSelect:      Writable<boolean> // 選択状態を管理
	startY:        Writable<number> // 開始位置（数値型）
	currentY:      Writable<number> // 現在位置（数値型）
	selectedRange: Writable<{ start: string, end: string }> // 選択範囲（開始と終了の文字列型）
}
