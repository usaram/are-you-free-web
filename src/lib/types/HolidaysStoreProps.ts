import type { Writable } from 'svelte/store'

export interface HolidaysStoreProps extends Writable<Date[]> {}
