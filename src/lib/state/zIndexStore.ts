import { writable } from "svelte/store";

export const highestZIndex = writable(1);

export function incrementZIndex() {
    let newZIndex: number;
    highestZIndex.update(n => {
      newZIndex = n + 1;
      return newZIndex;
    });
    return 0;
  }