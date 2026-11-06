document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(b => {b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  document.querySelectorAll('.reading-entry').forEach(entry => {entry.hidden = selected !== 'all' && entry.dataset.category !== selected;});
}));
