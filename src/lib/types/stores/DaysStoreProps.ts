import type { DayProps } from '@/lib/types/components/DayProps'
import type { Writable } from 'svelte/store'

export interface DaysStoreProps extends Writable<DayProps[]> {}
