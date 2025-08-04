export const smoothScroll = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (target instanceof HTMLElement) {
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};