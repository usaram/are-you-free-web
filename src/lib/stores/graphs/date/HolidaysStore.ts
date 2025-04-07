import type { HolidaysStoreProps } from '@/lib/types/HolidaysStoreProps'
import { writable } from 'svelte/store'

export const HolidaysStore: HolidaysStoreProps = writable([])
