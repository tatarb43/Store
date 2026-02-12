const THEME_KEY = 'theme';

export function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === 'system') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = isDark ? 'dark' : 'light';
  } else {
    root.dataset.theme = theme;
  }
}

export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'system';
  applyTheme(saved);

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      const current = localStorage.getItem(THEME_KEY);
      if (current === 'system') {
        applyTheme('system');
      }
    });
}

export function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}
