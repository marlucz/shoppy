import { selectors } from './selectors';

export const clearInputs = () => {
  selectors.productForm.classList.remove('was-validated');
  selectors.productForm.classList.add('needs-validation');
  selectors.inputName.value = '';
  selectors.inputQuantity.value = '';
  selectors.inputUnit.value = '';
  selectors.inputCategory.value = '';
  selectors.collapse.classList.remove('show');
};
