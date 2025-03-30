import type { Writable } from "svelte/store";

export interface CalendarStoreProps {
	viewMonth: Writable<number>;
}
