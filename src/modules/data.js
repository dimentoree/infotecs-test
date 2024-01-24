export const getData = () => {
    return fetch('./data/data.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Произошла ошибка - ${response.status}! Невозможно получить данные!`);
            }
        })
        .catch(error => {
            document.body.innerHTML = `<p class="error">${error}</p>`;
        });
}