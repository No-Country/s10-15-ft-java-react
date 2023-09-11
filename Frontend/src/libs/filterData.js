export const filterData = (query, data, type) => {
  if (type === 'search') {
    if (!query) {
      return data;
    } else {
      return data.filter((data) =>
        data.productName.toLowerCase().includes(query),
      );
    }
  } else {
    if (!query) {
      return data;
    } else {
      return data.filter((data) => data.category.toString().includes(query));
    }
  }
};
