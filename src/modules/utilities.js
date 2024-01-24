/* Функция, которая отвечает за сокращение текста для колонки "Описание" */
export const reduceText = () => {
    const aboutCells = Array.from(document.querySelectorAll('.table__body_cell:nth-child(3)'));

    for (let index = 0; index < aboutCells.length; index++) {
        const p = document.createElement('p');

        p.classList.add('table__body_cell_about');
        p.innerHTML = aboutCells[index].innerHTML;

        aboutCells[index].innerHTML = '';
        aboutCells[index].prepend(p);
    }
}

/* Функция, которая отвечает за покраску ячейки в цвет значения, которое в ней хранится, для колонки "Цвет глаз" */
export const getEyeColorByText = () => {
    const eyeColorCells = Array.from(document.querySelectorAll('.table__body_cell:nth-child(4)'));

    for (let index = 0; index < eyeColorCells.length; index++) {
        eyeColorCells[index].style.background = eyeColorCells[index].innerHTML;
        eyeColorCells[index].style.color = 'transparent';
    }
}

/* Функция, которая отвечает за скрытие всех столбцов в таблице */
export const hideAllColumns = () => {
    const hideButton = document.querySelector('.button__hide');
    const tableBody = document.querySelector('.table__body');

    hideButton.addEventListener('click', () => {
        if (!tableBody.dataset.hidden || tableBody.dataset.hidden === 'off') {
            tableBody.setAttribute('data-hidden', 'on');
            hideButton.innerHTML = 'Показать все колонки';
            tableBody.style.display = 'none';
        } else {
            tableBody.setAttribute('data-hidden', 'off');
            hideButton.innerHTML = 'Скрыть все колонки';
            tableBody.style.display = '';
        }
    });
}

/* Функция сортировки колонок в таблице */
export const sortColumns = () => {
    const headerCells = document.querySelectorAll('.table__header_cell');

    headerCells.forEach((headerCell, counter) => {
        headerCell.addEventListener('click', () => {
            if (!headerCell.dataset.order || headerCell.dataset.order === '-1') {
                headerCell.setAttribute('data-order', 1);
            } else if (headerCell.dataset.order === '1') {
                headerCell.setAttribute('data-order', -1);
            }

            const order = headerCell.dataset.order;
            headerCell.classList.add('selected');

            sortStrings(counter, order);
        })
    });
}

/* Функция сортировки строк */
const sortStrings = (index, order) => {
    const tableBody = document.querySelector('.table__body');
    const rows = Array.from(tableBody.rows);

    rows.sort((rowA, rowB) => {
        return rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? order : -order;
    });

    tableBody.append(...rows);
}