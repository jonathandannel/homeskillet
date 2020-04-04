export const paginate = (data: ReadonlyArray<any>): Map<number, []> => {
  const pages = new Map();

  if (data.length <= 25) {
    pages.set(1, data);
    return pages;
  }

  let currentPage = 1;
  const pageCount = Math.ceil(data.length / 25);
  const perPage = 25;

  while (currentPage !== pageCount + 1) {
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;
    const a = data.slice(startIndex, endIndex);
    pages.set(currentPage, data.slice(startIndex, endIndex));
    currentPage += 1;
  }
  return pages;
};
