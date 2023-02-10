import { Book } from "../modules/card.js";
import { Cart } from "../modules/cart.js";

// Read data books
fetch('../assets/books.json')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  renderBooks(data);
})


// Creat Header
const body = document.body;

const header = document.createElement('header');
header.classList.add('header');
body.appendChild(header);

const container = document.createElement('div');
container.classList.add('container');
header.appendChild(container);

const logo = document.createElement('img');
logo.src = '../assets/images/Books Logo.jpg';
logo.classList.add('logo');
container.appendChild(logo);

const titlePage = document.createElement('h1');
titlePage.classList.add('title');
titlePage.innerText = 'Lukovka Store';
container.appendChild(titlePage);

const basketContainer = document.createElement('div');
basketContainer.classList.add('basketContainer');
container.appendChild(basketContainer)

const basket = document.createElement('img');
basket.classList.add('basket');
basket.src = '../assets/images/bag.svg';
basketContainer.appendChild(basket);

const amount = document.createElement('span');
amount.classList.add('amount');
basketContainer.appendChild(amount)

const postContainer = document.createElement('div');
postContainer.classList.add('postContainer');
header.appendChild(postContainer);

const poster = document.createElement('img');
poster.src = '../assets/images/shelfs.jpeg';
poster.classList.add('poster');
postContainer.appendChild(poster);


// Creat Main
const main = document.createElement('main');
main.classList.add('main');
body.appendChild(main);

const booksList = document.createElement('div');
booksList.classList.add("booksContainer");
main.appendChild(booksList);



function renderBooks(products) {
  const result = products.reduce((prevValue, currValue) => {
    const book = new Book(currValue);
    const template = book.createBookTemplate();
    return prevValue + template;
  }, '');

  if (booksList) {
    booksList.innerHTML = result;
  }
}

// Book card popup
const createPopupOverlay = document.createElement('div');
createPopupOverlay.classList.add("popup-overlay");
body.appendChild(createPopupOverlay)

const createPopup = document.createElement('div');
createPopup.classList.add('popup');
body.appendChild(createPopup)

const createBtnPopupClose = document.createElement('button');
createBtnPopupClose.classList.add('popup-close');
createPopup.appendChild(createBtnPopupClose);

const createPopupWrapper = document.createElement('div');
createPopupWrapper.classList.add('popup-wrapper');
createPopup.appendChild(createPopupWrapper)


const popup = document.querySelector(".popup");
const popupContainer = popup.querySelector(".popup-wrapper");
const booksContainer = document.querySelector(".booksContainer");
const btnClose = popup.querySelector(".popup-close");
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
    popupContainer.innerHTML = pagePopup;
  }
});

function closePopup() {
  body.classList.remove("lock");
  popupOverlay.classList.remove("_active");
  popup.classList.remove("active");
}

btnClose.addEventListener("click", closePopup);
popupOverlay.addEventListener("click", closePopup);

popupOverlay.addEventListener("mouseenter", (event) => {
  btnClose.classList.add("hover");
});

popupOverlay.addEventListener("mouseleave", (event) => {
  btnClose.classList.remove("hover");
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


booksContainer.addEventListener('click', (event) => {
  const btn = event.target;
  if(btn && btn.classList.contains("book-btn-add")) {
    const id = btn.parentElement.getAttribute("id")
    const book = arrBook[id - 1]
    cart.putItem(book)
  }
})