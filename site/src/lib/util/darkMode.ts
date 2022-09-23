import { writable } from 'svelte/store';

function createDarkMode() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    toggle: () => {
      update((val) => {
        setDarkMode(!val);
        return !val;
      })
    },
    setDark: () => {
      setDarkMode(true);
      set(true);
    },
    setLight: () => {
      setDarkMode(false);
      set(false);
    }
  }
}

export const darkMode = createDarkMode();


export function initDarkMode () {
  const isDarkMode = window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(isDarkMode);
  return isDarkMode;
}

function setDarkMode(isDark: boolean) {
  const htmlTag = document.querySelector('html');
  if (isDark) {
    htmlTag?.classList.remove('theme-default');
    htmlTag?.classList.remove('theme-light');
    htmlTag?.classList.add('theme-dark');
  } else {
    htmlTag?.classList.add('theme-default');
    htmlTag?.classList.add('theme-light');
    htmlTag?.classList.remove('theme-dark');
  }
};