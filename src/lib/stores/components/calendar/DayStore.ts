import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const DayStore: types.stores.DayStoreProps = {
	day:					     writable(0), // 日付 (1, 2, 3, ...)
	date:					    writable(new Date()), // 日付オブジェクト
	isCurrentDay:	writable(false), // 今日の日付かどうか
	isWeekend:		  writable(false), // 土曜日または日曜日
	isHoliday:		  writable(false), // 祝日かどうか (必要に応じて設定)
}
