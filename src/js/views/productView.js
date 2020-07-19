import { selectors } from './selectors';
import { resetView } from '../index';

export const clearProducts = () => {
  selectors.productsSection.innerHTML = '';
};

const renderProduct = ({ name, quantity, unit }) => {
  const li = document.createElement('li');
  li.className = 'card d-flex flex-row justify-content-between align-items-center mb-2 p-2';
  li.innerHTML = `${name} - ${quantity} ${unit}`;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.className = 'btn btn-custom-red btn-outline btn-floating';
  deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;

  li.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', () => console.log(name));

  return li;
};

export const renderProducts = (categoryName, productsList) => {
  const itemsCount = productsList.length;

  // check if there is already list for categories rendered
  if (!selectors.productsSection.hasChildNodes()) {
    // create header for products list
    const headerMarkup = `
        <h2>${categoryName}</h2>
        <span>${itemsCount} ${itemsCount > 1 ? 'items' : 'item'}</span>
    `;

    // create list itself
    const ul = document.createElement('ul');
    ul.classList.add('row', 'list-products', 'p-2');

    //
    const backBtn = document.createElement('a');
    backBtn.textContent = `← Back`;
    backBtn.addEventListener('click', resetView);

    selectors.productsSection.appendChild(backBtn);
    selectors.productsSection.insertAdjacentHTML('beforeend', headerMarkup);

    selectors.productsSection.appendChild(ul);
  }

  const ul = document.querySelector('.list-products');

  productsList.forEach((product) => {
    const productItem = renderProduct(product);
    ul.appendChild(productItem);
  });
};
