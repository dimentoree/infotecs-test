import { renderPaginationItems, renderFirstPage, renderPagination } from './pagination';
import { sortColumns, hideAllColumns } from './utilities';
import { editTable } from './table';

export const renderTable = (data) => {
    const pageNotes = 10;
    const pagesCount = Math.ceil(data.length / pageNotes);

    renderPaginationItems(pagesCount);
    renderFirstPage(data, pageNotes);
    renderPagination(data, pageNotes);
    sortColumns();
    editTable();
    hideAllColumns();
}