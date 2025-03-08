import { writable } from 'svelte/store'

export const isAuthenticated = writable(false)
export const user = writable(null)

export function login(userData) {
	isAuthenticated.set(true)
	user.set(userData)
}

export function logout() {
	isAuthenticated.set(false)
	user.set(null)
}
