const heroRef = document.querySelector('[data-hero]');
const morePhotoRef = document.querySelector('[data-more-photo]');

heroRef.addEventListener('click', e => {
  const morePhotoTopPosition = morePhotoRef.getBoundingClientRect().top + window.pageYOffset;
  window.scroll({
    top: morePhotoTopPosition,
    behavior: 'smooth',
  });
});
