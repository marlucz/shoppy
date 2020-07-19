import { selectors } from './selectors';
import { resetView, getState } from '../index';

export const clearProducts = () => {
  selectors.productsSection.innerHTML = '';
};

export const removeProductFromView = (li) => {
  const ul = li.parentNode;
  if (ul) ul.removeChild(li);
};

const recountItems = (categoryName) => {
  const state = getState();
  const itemsCount = state.list.getCategoryLength(categoryName);

  if (itemsCount === 0) {
    resetView();
    return;
  }

  document.getElementById('item-count').textContent = `${itemsCount} ${
    itemsCount > 1 ? 'items' : 'item'
  }`;
};

const renderProduct = (product, categoryName) => {
  const { name, quantity, unit } = product;

  const li = document.createElement('li');
  li.className = 'card d-flex flex-row justify-content-between align-items-center mb-2 p-2';
  li.innerHTML = `${name} - ${quantity} ${unit}`;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.className = 'btn btn-custom-red btn-outline btn-floating';
  // eslint-disable-next-line quotes
  deleteBtn.innerHTML = `<i class='far fa-trash-alt'></i>`;

  li.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', () => {
    const state = getState();
    state.list.deleteItem(name, categoryName);
    removeProductFromView(li);
    recountItems(categoryName);
    // resetView();
  });

  return li;
};

export const renderProducts = (categoryName, productsList) => {
  const itemsCount = productsList.length;

  // check if there is already list for categories rendered
  if (!selectors.productsSection.hasChildNodes()) {
    // create header for products list
    const headerMarkup = `
        <h2>${categoryName}</h2>
        <span id="item-count">${itemsCount} ${itemsCount > 1 ? 'items' : 'item'}</span>
    `;

    // create list itself
    const ul = document.createElement('ul');
    ul.classList.add('row', 'list-products', 'p-2');

    //
    const backBtn = document.createElement('a');
    // eslint-disable-next-line quotes
    backBtn.textContent = `← Back`;
    backBtn.addEventListener('click', resetView);

    selectors.productsSection.appendChild(backBtn);
    selectors.productsSection.insertAdjacentHTML('beforeend', headerMarkup);

    selectors.productsSection.appendChild(ul);
  }

  const ul = document.querySelector('.list-products');

  productsList.forEach((product) => {
    const productItem = renderProduct(product, categoryName);
    ul.appendChild(productItem);
  });
};
