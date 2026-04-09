import { cardData } from './blogData';

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cardData);
    }, 500);
  });
}
