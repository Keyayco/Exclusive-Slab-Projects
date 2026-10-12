/* Exclusive Slab Projects — vanilla JavaScript, no dependencies. */
'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  if (!menuToggle || !mobileNav) return;
  mobileNav.dataset.open = 'false';
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    mobileNav.dataset.open = String(open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
document.querySelectorAll('a[href="#privacy"]').forEach(link => {
  link.addEventListener('click', () => {
    const details = document.querySelector('#privacy-details');
    if (details) details.open = true;
  });
});
const form = document.querySelector('#quote-form');
const feedback = document.querySelector('.form-feedback');
if (form && feedback) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const get = key => String(data.get(key) || '').trim();
    for (const key of ['name', 'location', 'requirements']) {
      if (!get(key)) {
        feedback.textContent = 'Please complete the required fields with your project information.';
        form.elements.namedItem(key).focus();
        return;
      }
    }
    const digits = get('phone').replace(/\D/g, '');
    if (digits.length < 9 || digits.length > 15) {
      feedback.textContent = 'Please enter a valid contact number (9–15 digits).';
      form.elements.namedItem('phone').focus();
      return;
    }
    const message = `Hello Exclusive Slab Projects, I would like to request a quotation.\n\nFull name: ${get('name')}\nContact number: ${get('phone')}\nProject type: ${get('type')}\nProject location: ${get('location')}\nRequirements: ${get('requirements')}\nAdditional details: ${get('details') || 'Not provided'}`;
    const link = document.createElement('a');
    link.href = 'https://wa.me/27728432830?text=' + encodeURIComponent(message);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
    feedback.textContent = 'Your enquiry is ready in WhatsApp. Review the message and press Send there to complete your enquiry.';
  });
}
