import { writable } from 'svelte/store';

export const darkMode = createDarkMode();

function createDarkMode() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    update,
    set: (val: boolean) => {
      set(val);
      setDarkMode(val);
    }
  }
}

function setDarkMode(isDark: boolean) {
  const htmlTag = document.querySelector('html');
  if (!htmlTag) return;
  if (isDark) {
    htmlTag.classList.remove('theme-default');
    htmlTag.classList.remove('theme-light');
    htmlTag.classList.add('theme-dark');
  } else {
    htmlTag.classList.add('theme-default');
    htmlTag.classList.add('theme-light');
    htmlTag.classList.remove('theme-dark');
  }
};

export function initDarkMode () {
  const isSystemDark = window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)').matches;
  darkMode.set(isSystemDark);
}