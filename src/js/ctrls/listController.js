class List {
  constructor() {
    this.items = [];
  }

  addItem = (product, categoryName) => {
    const categoryIndex = this.items.findIndex((item) => item.name === categoryName);
    this.items[categoryIndex].products.push(product);
  };

  getCategoryLength = (categoryName) => {
    const categoryIndex = this.items.findIndex((item) => item.name === categoryName);
    return this.items[categoryIndex].products.length;
  };

  addCategory = (categoryName) => {
    this.items.push(categoryName);
  };

  deleteItem = (productName, categoryName) => {
    const categoryIndex = this.items.findIndex((item) => item.name === categoryName);
    const productIndex = this.items[categoryIndex].products.findIndex(
      (product) => product.name === productName
    );

    if (productIndex > -1) {
      this.items[categoryIndex].products.splice(productIndex, 1);
    }

    this.persistData();
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
