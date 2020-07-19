export const persistData = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

export const readStorage = (data) => {
  const storage = localStorage.getItem(data);

  if (storage) {
    const items = JSON.paprse(storage);
    return items;
  }
  return [];
};
