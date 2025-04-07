import type { CalendarStoreProps } from '@/lib/types/CalendarStoreProps'
import { writable } from 'svelte/store'

export const CalendarStore: CalendarStoreProps = writable([])
