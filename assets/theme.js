(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let selected = null;
  try { selected = localStorage.getItem('theme'); } catch (_) {}
  if (selected !== 'light' && selected !== 'dark') selected = null;
  const apply = theme => {
    root.dataset.theme = theme;
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.title = button.getAttribute('aria-label');
    }
  };
  apply(selected || (system.matches ? 'dark' : 'light'));
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme);
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      selected = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(selected);
      try { localStorage.setItem('theme', selected); } catch (_) {}
    });
  });
  system.addEventListener('change', event => { if (!selected) apply(event.matches ? 'dark' : 'light'); });
})();
