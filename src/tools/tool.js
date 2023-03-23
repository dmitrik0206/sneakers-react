export const getSumPrices = (cards) =>
  cards
    .filter((card) => card.isAdded)
    .map((card) => card.price)
    .reduce((sum, price) => sum + price, 0);
