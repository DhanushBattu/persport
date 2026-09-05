const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (!window.location.hash) {
  window.history.scrollRestoration = 'manual';
  const resetInitialScroll = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setTimeout(() => window.scrollTo(0, 0), 0);
    setTimeout(() => window.scrollTo(0, 0), 80);
    setTimeout(() => document.documentElement.style.removeProperty('scroll-behavior'), 160);
  };
  if (document.readyState === 'complete') resetInitialScroll();
  else window.addEventListener('load', resetInitialScroll, { once: true });
}
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('span').textContent = open ? '×' : '＋';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  if (toggle) toggle.querySelector('span').textContent = '＋';
}));
document.querySelectorAll('.nav details').forEach(detail => detail.addEventListener('toggle', () => {
  if (detail.open) document.querySelectorAll('.nav details').forEach(other => { if (other !== detail) other.open = false; });
}));
