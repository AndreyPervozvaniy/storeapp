export const useGetSum = (inBag) => {
  return inBag?.reduce((sum, book) => sum + book.count * book.price, 0);
};
