export const sortItemsByDate = (field, items) => {
  const itemsToSort = items.slice(0);
  itemsToSort.sort(function(a,b){
    return new Date(b[field]) - new Date(a[field]);
  });
  return itemsToSort;
};