import type { DaysProps } from '@/lib/types/components/DaysProps'
import type { Writable } from 'svelte/store'

export interface CalendarStoreProps extends Writable<DaysProps[]> {}
