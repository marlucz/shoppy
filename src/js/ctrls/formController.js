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
}

export default FormController;
