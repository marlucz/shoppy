import * as mdb from 'mdb-ui-kit';
import formValidation from './utils/mdbFormValidation';

import { readStorage } from './ctrls/localStorage';

export default {
  mdb,
};

// set initial data for the application
const data = readStorage();

window.addEventListener('load', () => {
  formValidation();
  console.log(data);
});
