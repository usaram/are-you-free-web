import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const CalendarStore: types.stores.CalendarStoreProps = writable([])
