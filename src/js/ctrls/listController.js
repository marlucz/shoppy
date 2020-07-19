class List {
  constructor() {
    this.items = [];
  }

  addItem = (product, category) => {
    const categoryIndex = this.items.findIndex((item) => item.name === category);
    this.items[categoryIndex].products.push(product);
  };

  addCategory = (category) => {
    this.items.push(category);
  };

  persistData = () => {
    localStorage.setItem('list', JSON.stringify(this.items));
  };

  readStorage = () => {
    const storage = JSON.parse(localStorage.getItem('list'));
    if (storage) this.items = [...storage];
  };
}

export default List;
