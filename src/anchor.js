const heroRef = document.querySelector('[data-hero]');
const morePhotoRef = document.querySelector('[data-more-photo]');
const morePhotoTopPosition = morePhotoRef.getBoundingClientRect().top + window.pageYOffset;

heroRef.addEventListener('click', e => {
  window.scroll({
    top: morePhotoTopPosition,
    behavior: 'smooth',
  });
});
