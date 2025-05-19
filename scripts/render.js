// # Логика отрисовки
// scripts/render.js
function renderBookCard(book) {
  return `
    <article class="book-card">
      <div class="book-cover-wrapper">
        <img src="images/${book.cover}" alt="${book.title}" class="book-cover" />
        <div class="book-status">${book.status}</div>
      </div>
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
      </div>
    </article>
  `;
}
// scripts/render.js
function renderSection(sectionId, booksArray) {
  const container = document.getElementById(sectionId);
  let html = "";

  booksArray.forEach((book) => {
    html += renderBookCard(book);
  });

  container.innerHTML = html;
}
// scripts/render.js
document.addEventListener("DOMContentLoaded", () => {
  renderSection("popular-books", booksData.popular);
  renderSection("new-books", booksData.new);
});
