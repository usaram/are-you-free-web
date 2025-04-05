import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const DaysStore: types.stores.DaysStoreProps = writable([])
