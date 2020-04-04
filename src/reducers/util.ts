export const paginate = (data: ReadonlyArray<any>): Map<number, []> => {
  const pages = new Map();

  if (data.length <= 25) {
    pages.set(1, data);
    return pages;
  }

  let currentPage = 0;
  const pageCount = Math.ceil(data.length / 25);
  const perPage = 25;

  while (currentPage !== pageCount + 1) {
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;
    const slice = data.slice(startIndex, endIndex);
    if (slice.length) {
      pages.set(currentPage + 1, data.slice(startIndex, endIndex));
    }
    currentPage += 1;
  }
  return pages;
};
