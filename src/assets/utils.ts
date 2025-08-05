export const smoothScroll = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (target instanceof HTMLElement) {
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

export const smoothScrollPromise = (targetId: string): Promise<void> => {
  return new Promise((resolve) => {
    const target = document.querySelector(targetId);
    if (!(target instanceof HTMLElement)) {
      resolve();
      return;
    }

    const targetOffset = target.offsetTop - 80;

    const onScroll = () => {
      const current = window.scrollY;

      const distance = Math.abs(current - targetOffset);

      if (distance < 5) {
        window.removeEventListener("scroll", onScroll);
        resolve();
      }
    };

    window.addEventListener("scroll", onScroll);

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });

    setTimeout(() => {
      window.removeEventListener("scroll", onScroll);
      resolve();
    }, 800);
  });
};
