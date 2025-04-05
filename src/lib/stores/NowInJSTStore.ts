import type { types } from '@/lib/types'
import { writable } from 'svelte/store'

export const NowInJSTStore: types.stores.NowInJSTStoreProps = writable(new Date())
