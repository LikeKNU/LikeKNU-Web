export const sortPinElementTop = (list, predicate) => {
  const index = list.findIndex(predicate);
  if (index !== -1) {
    const [element] = list.splice(index, 1);
    list.unshift(element);
  }
  return list;
};
