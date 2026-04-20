import { cardData } from './blogData';

export function fetchData() {
  return new Promise((resolve) => {
    resolve(cardData);
  });
}
