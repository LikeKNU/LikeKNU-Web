export const sortPinElementTop = (list, predicate) => {
  const cloneList = list.slice();
  const index = cloneList.findIndex(predicate);
  if (index !== -1) {
    const [element] = cloneList.splice(index, 1);
    cloneList.unshift(element);
  }
  return cloneList;
};
