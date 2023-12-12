document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const books = document.querySelectorAll('.card');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();

        books.forEach(function (book) {
            const titleElement = book.querySelector('.card-title');
            if (!titleElement) {
                // Si no se encuentra un título en el libro, omitirlo
                return;
            }
            const title = titleElement.textContent.trim().toLowerCase();
            const shouldShow = title.includes(searchTerm);

            if (shouldShow) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });
});


