// Book card
export class Book {
  bookData;
  labelAdd = "Add to Cart";
  labelRemove = "Remove from trash";
  labelShow = "Show more"

  constructor(bookData) {
    this.bookData = bookData;
  }

  createBookTemplate() {
    return `
    <div class="book-item" id="${this.bookData.id}" data-name="${this.bookData.title}" draggable="true">
     <h3 class="book-item_title">${this.bookData.title}</h3>
     <div class="book-item_img-container">
      <img class="book-item_img" src="${this.bookData.imageLink}"
      alt="${this.bookData.title}">
     </div>
     <h3 class="book-item_author">by ${this.bookData.author}</h3>
     <p class="book-item_price">Price: ${this.bookData.price}$</p>
     <button type="button" class="book-btn-add">${this.labelAdd}</button>
     <button type="button" class="book-btn-show">${this.labelShow}</button>
    </div>
  `;
  }
}

