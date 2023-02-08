export class Book {
  productData;
  labelAdd = "Add to Cart";
  labelRemove = "Remove from trash";

  constructor(productData) {
    this.productData = productData;
  }

  createCardTemplate() {
    return `
    <div class="book-item">
      <h3 class="book-item_title">${this.productData.author}</h3>
     <div class="product-item_img-container">
      <img class="product-item_img" src="${this.productData.imageLink}"
        alt="${this.productData.title}">
     </div>
     <ul class="product-item_information">
      <li>Price: ${this.productData.price}</li>
      <li>Description: ${this.productData.description}</li>
     </ul>
     <button type="button" class="products-btn">${this.labelAdd}</button>
    </div>
  `;
  }
}
