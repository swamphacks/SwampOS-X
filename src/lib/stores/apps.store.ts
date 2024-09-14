import { writable } from "svelte/store";

export enum AppType {
  WINDOW,
  STICKY
}

let stickyCount = 0;

export const openApps = writable<Record<string, AppType>>({});

export const addSticky = () => {
  const id = `sticky-${stickyCount}`
  stickyCount += 1;

  openApps.update((store) => {
    return {
      ...store,
      [id]: AppType.STICKY
    }
  })
}
