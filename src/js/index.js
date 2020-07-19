import * as mdb from 'mdb-ui-kit';
import formValidation from './utils/mdbFormValidation';

import { selectors } from './views/selectors';

import Product from './ctrls/productController';
import Category from './ctrls/categoryController';
import FormController from './ctrls/formController';
import List from './ctrls/listController';

import { clearCategories, renderCategories } from './views/categoryView';
import { clearProducts } from './views/productView';
import { clearInputs } from './views/formView';
import { printList } from './views/printView';

export default {
  mdb,
};

// set initial data for the application
const state = {};

window.addEventListener('load', () => {
  // setup initial data from the localStorage
  state.list = new List();
  state.list.readStorage();

  resetView();

  formValidation();
  setupListeners();
});

export const resetView = () => {
  clearCategories();
  clearProducts();

  if (state.list.items) {
    state.list.items.forEach((item) => renderCategories(item));
  }
};

const setupListeners = () => {
  selectors.productForm.addEventListener('submit', controlFormSubmit);
  selectors.header.addEventListener('click', resetView);
};

const controlFormSubmit = (e) => {
  e.preventDefault();

  const newForm = new FormController();
  const { category, ...product } = new Product(newForm.values);
  const { items } = state.list;

  // check if there is any item in the state or category already exists
  if (!items.length > 0 || !items.find((item) => item.name === category)) {
    const newCategory = new Category(category);
    state.list.addCategory(newCategory);
  }

  // add product to category and persist it in the localStorage
  state.list.addItem(product, category);
  state.list.persistData();
  clearInputs();

  resetView();
};

export const getState = () => {
  return state;
};

selectors.printBtn.addEventListener('click', () => {
  printList(state.list.items);
});
