import type { TimeSlotStoreProps } from '@/lib/types/TimeSlotStoreProps'
import { writable } from 'svelte/store'

export const TimeSlotStore: TimeSlotStoreProps = {
	isSelect:      writable(false),
	startY:        writable(0),
	currentY:      writable(0),
	selectedRange: writable({ start: '00:00', end: '00:00' }),
}
