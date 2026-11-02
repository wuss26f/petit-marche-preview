'use strict';
(() => {
  const dialog = document.querySelector('#photo-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('.lightbox-image');
  const caption = dialog.querySelector('#lightbox-caption');
  const close = dialog.querySelector('.lightbox-close');
  let opener;
  document.querySelectorAll('[data-lightbox]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      caption.textContent = link.closest('figure').querySelector('figcaption').textContent;
      dialog.showModal();
      document.body.classList.add('lightbox-open');
      close.focus({ preventScroll: true });
    });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Tab') { event.preventDefault(); close.focus(); }
    if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
  });
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('lightbox-open');
    image.removeAttribute('src');
    image.alt = '';
    opener?.focus({ preventScroll: true });
  });
})();
