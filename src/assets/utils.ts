export const smoothScroll = (targetId) => {
  const target = document.querySelector(targetId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 80, // Adjust for header height
      behavior: 'smooth'
    });
  }
};