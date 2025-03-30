import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const CalendarStore: types.CalendarStoreProps = {
	// 表示月のストア（0=今月、1=来月、2=再来月）
	viewMonth: writable(0),
}
