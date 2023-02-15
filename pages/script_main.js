import { Book } from "../modules/card.js";
import { Cart, CartWindow } from "../modules/cart.js";

// Read data books
fetch("../assets/books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderBooks(data);
  });
// Creat Header
const body = document.body;

const header = document.createElement("header");
header.classList.add("header");
body.append(header);

const container = document.createElement("div");
container.classList.add("container");
header.append(container);

const logo = document.createElement("img");
logo.src = "../assets/images/Books Logo.jpg";
logo.classList.add("logo");
container.append(logo);

const titlePage = document.createElement("h1");
titlePage.classList.add("title");
titlePage.innerText = "Lukovka Store";
container.append(titlePage);

const basketContainer = document.createElement("div");
basketContainer.classList.add("basketContainer");
container.append(basketContainer);

const basket = document.createElement("img");
basket.classList.add("basket");
basket.src = "../assets/images/bag.svg";
basketContainer.append(basket);

const amount = document.createElement("span");
amount.classList.add("amount");
basketContainer.append(amount);

const postContainer = document.createElement("div");
postContainer.classList.add("postContainer");
header.append(postContainer);

const poster = document.createElement("img");
poster.src = "../assets/images/shelfs.jpeg";
poster.classList.add("poster");
postContainer.append(poster);

// Creat Main
const main = document.createElement("main");
main.classList.add("main");
body.append(main);

const booksList = document.createElement("div");
booksList.classList.add("booksContainer");
main.append(booksList);

function renderBooks(products) {
  const result = products.reduce((prevValue, currValue) => {
    const book = new Book(currValue);
    const template = book.createBookTemplate();
    return prevValue + template;
  }, "");

  if (booksList) {
    booksList.innerHTML = result;
  }
}

// Creat Footer
const footer = document.createElement("footer");
footer.classList.add("footer");
body.append(footer);

const footer_container = document.createElement("div");
footer_container.classList.add('footer_container');
footer.append(footer_container);

const footer_title = document.createElement("h2");
footer_title.innerText = "Contact info"
footer_title.classList.add("footer_title");
footer_container.append(footer_title);

const footer_info__container = document.createElement("div");
footer_info__container.classList.add("footer_info__container");
footer_container.append(footer_info__container);

const footer_email = document.createElement("p");
footer_email.innerText = "lukovka_store@yahoo.com";
footer_email.classList.add("email");
footer_info__container.append(footer_email)

const footer_phone = document.createElement("p");
footer_phone.innerText = "+1 212-473-1355";
footer_info__container.append(footer_phone)
footer_phone.classList.add("phone");

const footer_location = document.createElement("p");
footer_location.classList.add("location");
footer_location.innerText = "828 Broadway, New York, NY 10003"
footer_info__container.append(footer_location)

// Book card popup
const createPopupOverlay = document.createElement("div");
createPopupOverlay.classList.add("popup-overlay");
body.append(createPopupOverlay);

const createPopup = document.createElement("div");
createPopup.classList.add("popup");
body.append(createPopup);

const createBtnPopupClose = document.createElement("button");
createBtnPopupClose.classList.add("popup-close");
createPopup.append(createBtnPopupClose);

const createPopupWrapper = document.createElement("div");
createPopupWrapper.classList.add("popup-wrapper");
createPopup.append(createPopupWrapper);

const popup = document.querySelector(".popup");
const popupWrapper = popup.querySelector(".popup-wrapper");
const booksContainer = document.querySelector(".booksContainer");
const btnClosePopup = popup.querySelector(".popup-close");
const popupOverlay = document.querySelector(".popup-overlay");
const resp = await fetch("../assets/books.json");
const array = await resp.json();
let arrBook = array;

function openPopup() {
  body.classList.add("lock");
  popupOverlay.classList.add("_active");
  popup.classList.add("active");
}

booksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("book-btn-show")) {
    openPopup();
    const bookTitle = event.target.parentElement.getAttribute("data-name") || event.target.getAttribute("date-name");
    const bookInfo = arrBook.find((item) => {
      return item.title === bookTitle;
    });
    const pagePopup = `
    <div class="popup-container">
      <h3 class="popup-title">${bookInfo.title}</h3>
      <p class="popup-description">${bookInfo.description}</p>
    </div>
`;
    popupWrapper.innerHTML = pagePopup;
  }
});

function closePopup() {
  body.classList.remove("lock");
  popupOverlay.classList.remove("_active");
  popup.classList.remove("active");
}

btnClosePopup.addEventListener("click", closePopup);
popupOverlay.addEventListener("click", closePopup);

popupOverlay.addEventListener("mouseenter", (event) => {
  btnClosePopup.classList.add("hover");
});

popupOverlay.addEventListener("mouseleave", (event) => {
  btnClosePopup.classList.remove("hover");
});

//Cart
const cart = new Cart();
const amountItems = document.querySelector(".amount");
const labelAdd = "Add to Cart";
const labelRemove = "Remove from trash";
amountItems.innerText = "0";

// booksContainer.addEventListener('click', (event) => {
//   const btn = event.target;
//     if (btn && btn.classList.contains("book-btn-add")) {
//       const id = btn.parentElement.getAttribute("id");
//       if (cart.itemsList.includes(id)) {
//         cart.deleteItem(id);
//         btn.innerText = labelAdd;
//         btn.classList.remove("book-btn-add_active");
//       } else if (cart.itemsList.length >= 7) {
//         return alert("Sorry, the basket is full");
//       } else {
//         cart.putItem(id);
//         btn.classList.toggle("book-btn-add_active");
//         btn.innerText = labelRemove;
//       }
//       amountItems.innerText = cart.itemsList.length.toString();
//     }
// });

booksContainer.addEventListener("click", (event) => {
  const btn = event.target;
  if (btn && btn.classList.contains("book-btn-add")) {
    const id = btn.parentElement.getAttribute("id");
    const book = arrBook[id - 1];
    cart.putItem(book);
    let count = 0;
    cart.itemsList.forEach((item) => {
      count += item.quantity;
    });
    amountItems.innerHTML = count.toString();
  }
});

//Cart window
const cartWindow = document.createElement("div");
cartWindow.classList.add("cart-window");
container.append(cartWindow);

const createBtnCartClose = document.createElement("button");
createBtnCartClose.classList.add("cart-window_close");
cartWindow.append(createBtnCartClose);

const cartWindowWrapper = document.createElement("div");
cartWindowWrapper.classList.add("cart-window_wrapper");
cartWindow.append(cartWindowWrapper);

const creatBtnConfirm = document.createElement("button");
creatBtnConfirm.classList.add("confirm");
creatBtnConfirm.innerText = "Confirm";
cartWindow.append(creatBtnConfirm);

const cartWrapper = document.querySelector(".cart-window_wrapper");

function openCart() {
  body.classList.add("lock_cart");
  cartWindow.classList.add("open_cart");
}

function renderCart() {
  let cartDataNew = cart.itemsList; //change structure date for save local storage
  let result = cartDataNew.reduce((prevValue, currValue) => {
    const cartWindowBook = new CartWindow(currValue);
    const template = cartWindowBook.createCartWindowTemplate();
    return prevValue + template;
  }, "");
  if (cartWrapper) {
    cartWrapper.innerHTML = result;
  }
}

basketContainer.addEventListener("click", (event) => {
  const btnBasket = event.target;
  if (btnBasket.classList.contains("basket")) {
    openCart();
    renderCart();
  }
});

function cloaseCart() {
  body.classList.remove("lock_cart");
  cartWindow.classList.remove("open_cart");
}
createBtnCartClose.addEventListener("click", cloaseCart);
popupOverlay.addEventListener("click", cloaseCart);

popupOverlay.addEventListener("mouseenter", (event) => {
  createBtnCartClose.classList.add("hover");
});

popupOverlay.addEventListener("mouseleave", (event) => {
  createBtnCartClose.classList.remove("hover");
});

//Drag and drop
const books = document.querySelectorAll(".book-item");
const cart_basket = document.querySelector(".basketContainer");

cart_basket.ondragover = allowDrop;
books.ondragover = allowDrop;

function allowDrop(event) {
  event.preventDefault();
}

cart_basket.ondrop = drop;
books.ondrop = drop;

books.forEach((book) => {
  book.ondragstart = drag;
});

function drag(event) {
  let target = event.target;
  if (target.parentElement.parentElement.id || target.id) {
    let bookID = target.parentElement.parentElement.id || target.id;
    event.dataTransfer.setData("id", bookID);
  }
}

function drop(event) {
  let itemId = event.dataTransfer.getData("id");
  let book = arrBook[itemId - 1];
  cart.putItem(book);
  let count = 0;
  cart.itemsList.forEach((item) => {
    count += item.quantity;
  });
  amountItems.innerHTML = count.toString();
}

// Minus button and plus button
const cart_window = document.querySelector(".cart-window");

cart_window.addEventListener("click", (event) => {
  const price = document.querySelector(".cart-window_price");
  let target = event.target;
  let update_price;
  let id_book;
  let update_counter;
  if (target && target.classList.contains("minus")) {
    let counter = target.nextElementSibling;
    id_book = target.parentElement.id;
    let remove_book = arrBook[id_book - 1];
    cart.removeItem(remove_book);
    update_counter = remove_book.quantity;
    counter.innerHTML = update_counter;
    update_price = remove_book.price * remove_book.quantity;
    price.innerHTML = `${update_price}$`;
  }
  if (target && target.classList.contains("plus")) {
    let counter = target.previousElementSibling;
    id_book = target.parentElement.id;
    let add_book = arrBook[id_book - 1];
    cart.putItem(add_book);
    update_counter = add_book.quantity;
    counter.innerHTML = update_counter;
    update_price = add_book.price * add_book.quantity;
    price.innerHTML = `${update_price}$`;
  }
  if (target && target.classList.contains("delete")) {
    id_book = target.parentElement.id;
    let delete_book = arrBook[id_book - 1];
    cart.deleteItem(delete_book);
    renderCart();
  }
});

// Confirm button
cart_window.addEventListener("click", (event) => {
  let target = event.target
  if(target && target.classList.contains("confirm")) {
    window.location.href = "order_page.html";
  }
})