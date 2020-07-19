import { selectors } from './selectors';
import { renderProducts } from './productView';

export const clearCategories = () => {
  selectors.categorySection.innerHTML = '';
};

export const renderCategories = ({ name, products }) => {
  // check if there is already list for categories rendered
  if (!selectors.categorySection.hasChildNodes()) {
    const ul = document.createElement('ul');
    ul.classList.add('row', 'list-category');
    selectors.categorySection.appendChild(ul);
  }

  const itemsCount = products.length;
  if (!itemsCount) return;

  const ul = document.querySelector('.list-category');
  const li = document.createElement('li');
  li.className = 'col-md-4 mb-3 list-product';
  const markup = `
    <a class="card card-body p-3">
      <div class="d-flex w-100 flex-column justify-content-between align-items-center">
        <img src="img/icons/${name}.svg" class="card-img-custom card-img-top pb-3 " alt="${name}" />
        <h5 class="card-title mb-1">${name}</h5>
        <small>${itemsCount} ${itemsCount > 1 ? 'items' : 'item'}</small>
      </div>
    </a>
    `;

  li.insertAdjacentHTML('beforeend', markup);
  ul.appendChild(li);

  // add event listener for rendering products in category
  li.addEventListener('click', () => {
    clearCategories();
    renderProducts(name, products);
  });
};
