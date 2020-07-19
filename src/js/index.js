import * as mdb from 'mdb-ui-kit';
import formValidation from './utils/mdbFormValidation';

import { selectors } from './views/selectors';

import Product from './ctrls/productController';
import Category from './ctrls/categoryController';
import FormController from './ctrls/formController';
import List from './ctrls/listController';

export default {
  mdb,
};

// set initial data for the application
const state = {};

window.addEventListener('load', () => {
  formValidation();
  setupListeners();

  state.list = new List();
  state.list.readStorage();
});

const setupListeners = () => {
  selectors.productForm.addEventListener('submit', controlFormSubmit);
};

const controlFormSubmit = (e) => {
  e.preventDefault();

  const newForm = new FormController();
  const { category, ...product } = new Product(newForm.values);
  const { items } = state.list;

  if (!items.length > 0 || !items.find((item) => item.name === category)) {
    const newCategory = new Category(category);
    state.list.addCategory(newCategory);
  }

  state.list.addItem(product, category);
  state.list.persistData();
  newForm.clearInputs();
};
