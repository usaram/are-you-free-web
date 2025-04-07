import type { NowInJSTStoreProps } from '@/lib/types/NowInJSTStoreProps'
import { writable } from 'svelte/store'

export const NowInJSTStore: NowInJSTStoreProps = writable(new Date())
