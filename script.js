// Lightweight interactivity: theme toggle, menu toggle, year insert
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle (simple, stores preference)
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') root.style.colorScheme = 'dark';

  themeToggle?.addEventListener('click', () => {
    const current = getComputedStyle(root).colorScheme || root.style.colorScheme || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    root.style.colorScheme = next;
    localStorage.setItem('theme', next);
  });

  // Mobile nav
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Basic form submit UX
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending…';
    }
  });
});
