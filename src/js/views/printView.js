/* esint-disable */
// jsPDF doesn't work well with eslint

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { selectors } from './selectors';

export const printList = (list) => {
  // create table that will be saved to file

  const table = document.createElement('table');
  table.setAttribute('id', 'table');
  const tbody = document.createElement('tbody');
  const markup = `
        <thead>
            <tr>
                <th colspan="4">Your product list</th>
            </tr>
        </thead>
    `;

  table.insertAdjacentHTML('afterbegin', markup);

  const headers = `
    <tr>
        <td ></td>
        <td >Product</td>
        <td >Quantity</td>
        <td >Unit</td>
    </tr>
    `;
  tbody.insertAdjacentHTML('afterbegin', headers);

  for (let i = 0; i < list.length; i++) {
    if (list[i].products.length !== 0) {
      const category = `<tr>
        <td colspan="4">${list[i].name.toUpperCase()}</td>
        </tr>`;
      tbody.insertAdjacentHTML('beforeend', category);

      list[i].products.map((el) => {
        const row = `
            <tr>
            <td></td>
            <td>${el.name}</td>
            <td>${el.quantity}</td>
            <td>${el.unit}</td>
            </tr>
      `;
        tbody.insertAdjacentHTML('beforeend', row);
      });
    }
  }
  table.appendChild(tbody);

  // apend table to document - otherwise can't be printed
  selectors.divPrint.appendChild(table);

  //   Export to pdf
  const doc = new jsPDF();
  doc.autoTable({ html: '#table' });
  doc.save('shopping-list.pdf');

  // delete table from document
  selectors.divPrint.innerHTML = '';
};
