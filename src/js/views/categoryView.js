import { selectors } from './selectors';

export const clearCategories = () => {
  selectors.categorySection.innerHTML = '';
};

export const renderCategories = ({ name, products }) => {
  // check if there is already list for categories rendered
  if (!selectors.categorySection.hasChildNodes()) {
    const ul = document.createElement('ul');
    ul.classList.add('row');
    ul.classList.add('category-list');
    selectors.categorySection.appendChild(ul);
  }

  const itemsCount = products.length;

  const ul = document.querySelector('.category-list');
  const markup = `
    <li class="col-md-4 mb-3">
    <a class="card card-body p-3">
      <div class="d-flex w-100 flex-column justify-content-between align-items-center">
        <img src="img/icons/${name}.svg" class="card-img-custom card-img-top pb-3 " alt="${name}" />
        <h5 class="card-title mb-1">${name}</h5>
        <small>${itemsCount} ${itemsCount > 1 ? 'items' : 'item'}</small>
      </div>
    </a>
  </li>
    `;

  ul.insertAdjacentHTML('beforeend', markup);
};
