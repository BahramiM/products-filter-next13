export const sortByDate = (array: any, key: string) => {
  let sorted = [...array];
  sorted.sort((a, b) =>
    new Date(b[key]) < new Date(a[key])
      ? 1
      : new Date(a[key]) < new Date(b[key])
      ? -1
      : 0
  );
  return sorted;
};
export const sortAscending = (array: any, key: string) => {
  let sorted = [...array];
  sorted.sort((a, b) => (b[key] > a[key] ? 1 : a[key] > b[key] ? -1 : 0));
  return sorted;
};
