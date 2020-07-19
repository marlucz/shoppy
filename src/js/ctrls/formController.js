import { selectors } from '../views/selectors';

class FormController {
  constructor() {
    this.name = selectors.inputName.value;
    this.quantity = selectors.inputQuantity.value;
    this.unit = selectors.inputUnit.value;
    this.category = selectors.inputCategory.value;
  }

  get values() {
    const values = {
      name: this.name,
      quantity: this.quantity,
      unit: this.unit,
      category: this.category,
    };

    return values;
  }

  clearInputs = () => {
    selectors.productForm.classList.remove('was-validated');
    selectors.productForm.classList.add('needs-validation');
    selectors.inputName.value = '';
    selectors.inputQuantity.value = '';
    selectors.inputUnit.value = '';
    selectors.inputCategory.value = '';
  };
}

export default FormController;
