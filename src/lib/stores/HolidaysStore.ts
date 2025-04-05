import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const HolidaysStore: types.stores.HolidaysStoreProps = writable([])
