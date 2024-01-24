import { renderRows } from './table';

/* Функция, которая создаёт элементы пагинации */
const createPaginationItems = (pagination, pagesCount) => {
    for (let counter = 1; counter <= pagesCount; counter++) {
        const paginationItem = document.createElement('div');
        paginationItem.classList.add('pagination__item');
        paginationItem.innerHTML = counter;

        pagination.appendChild(paginationItem);
    }
}

/* Функция, которая отрисовывает элементы пагинации */
export const renderPaginationItems = (pagesCount) => {
    const content = document.querySelector('.page__left_content');
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');

    createPaginationItems(pagination, pagesCount);

    content.appendChild(pagination);
}

/* Функция, которая помечает активную страницу при пагинации */
const markActivePage = (paginationItem) => {
    const activePaginationItem = document.querySelector('.pagination__item_active');

    if (activePaginationItem) {
        activePaginationItem.classList.remove('pagination__item_active');
    }

    paginationItem.classList.add('pagination__item_active');
}

/* Функция, которая отвечает за отрисовку начальной страницы */
export const renderFirstPage = (data, pageNotes) => {
    renderRows(data, pageNotes);

    const paginationItem = document.querySelector('.pagination__item');
    paginationItem.classList.add('pagination__item_active');
}

/* Функция, которая отвечает за отрисовку пагинации для каждой страницы */
export const renderPagination = (data, pageNotes) => {
    const paginationItems = document.querySelectorAll('.pagination__item');

    for (const paginationItem of paginationItems) {
        paginationItem.addEventListener('click', function () {
            markActivePage(paginationItem);

            let pageNumber = +this.innerHTML;

            renderRows(data, pageNotes, pageNumber);
        });
    }
}