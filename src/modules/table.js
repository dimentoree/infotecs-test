import { reduceText, getEyeColorByText } from "./utilities";

/* Функция, которая создаёт ячейку для строки таблицы и записывает в неё значение */
const createCell = (value, row) => {
  const cell = document.createElement('td');
  cell.classList.add('table__body_cell');
  cell.innerHTML = value;

  row.appendChild(cell);
}

/* Функция, которая создаёт строку таблицы с заполненными ячейками */
const createRow = (values) => {
  const row = document.createElement('tr');
  const tableBody = document.querySelector('.table__body');
  row.classList.add('table__body_row');

  for (let counter = 0; counter < values.length; counter++) {
      createCell(values[counter], row);
  }

  tableBody.appendChild(row);
}

/* Функция, которая очищает тело таблицы */
const clearTableBody = () => {
  const tableBody = document.querySelector('.table__body');
  tableBody.innerHTML = '';
}

/* Функция, которая отвечает за рендер строк на странице */
export const renderRows = (data, pageNotes, pageNumber = 1) => {
  let start = (pageNumber - 1) * pageNotes;
  let end = start + pageNotes;
  let notes = data.slice(start, end);

  clearTableBody();

  for (const note of notes) {
      const { about, eyeColor } = note;
      let { firstName, lastName } = note.name;

      createRow([firstName, lastName, about, eyeColor]);
  }

  reduceText();
  getEyeColorByText();
}

/* Функция, которая отвечает за редактирование строки таблицы, при помощи формы, которая появляется после нажатия на строку в таблице */
export const editTable = () => {
  const table = document.querySelector('.table');
  const form = document.querySelector('.form');
  const inputs = document.querySelectorAll('.form__input');
  const textarea = document.querySelector('.form__textarea');
  const editButton = document.querySelector('.button__edit');
  const cancelButton = document.querySelector('.button__cancel');

  table.addEventListener('click', function (event) {
      const row = event.target.closest('.table__body_row');

      if (!row) return;
      if (!table.contains(row)) return;

      form.style.display = "block";

      inputs[0].value = row.cells[0].innerHTML;
      inputs[1].value = row.cells[1].innerHTML;
      textarea.value = row.cells[2].childNodes[0].innerHTML;
      inputs[2].value = row.cells[3].innerHTML;

      editButton.addEventListener('click', function (event) {
          row.cells[0].textContent = inputs[0].value;
          row.cells[1].innerHTML = inputs[1].value;
          row.cells[2].childNodes[0].innerHTML = textarea.value;
          row.cells[3].innerHTML = inputs[2].value;

          event.preventDefault();
          form.style.display = "none";
      });
  });

  cancelButton.addEventListener('click', () => form.style = "none");
}
