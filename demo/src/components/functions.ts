export const removeClassName = (className: string) => {
  const element = document.querySelector(`.${className}`) as HTMLElement;

  element?.classList.remove(className);
};

export const addClassNameAtElement = (
  element: HTMLElement,
  className: string,
) => {
  element.classList.add(className);
};

export const scrollToItemById = (id: string) => {
  const element = document.querySelector(`#${id}`) as HTMLElement;

  element.scrollIntoView({
    behavior: 'smooth',
  });
};

export const setModalAnimation = () => {
  const element = document.querySelector('.modal-container') as HTMLElement;

  element.style.animation = 'modal-show-animation 3s';

  setTimeout(() => {
    element.style.animation = 'none';
  }, 3000);
};
