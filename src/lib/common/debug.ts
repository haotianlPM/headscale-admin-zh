import { DebugStore } from '$lib/Stores';
import { get } from 'svelte/store';

<<<<<<< HEAD
export const version = 'v0.1.12b';
=======
export const version = 'v0.1.13b-dev';
>>>>>>> f7213ffae380f41a488fc6177fd0a1d3ecf12965

export function debug(...data: unknown[]) {
	// output if console debugging is enabled
	if (get(DebugStore)) {
		console.log(new Date().toLocaleTimeString('en-US', { hour12: false }), ...data);
	}
}
