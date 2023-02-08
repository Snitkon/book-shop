import { Book } from "../modules/card.js";

// Read data books
fetch("../assets/books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
    renderCards(data);
  });


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

const basket = document.createElement('img');
basket.classList.add('basket');
basket.src = '../assets/images/bag.svg';
container.appendChild(basket);

const postContainer = document.createElement('div');
postContainer.classList.add('postContainer');
header.appendChild(postContainer);

const poster = document.createElement('img');
poster.src = "../assets/images/shelfs.jpeg";
poster.classList.add('poster');
postContainer.appendChild(poster);


// Creat Main
const main = document.createElement('main');
main.classList.add('main');
body.appendChild(main);

const containerProduct = document.createElement('div');
containerProduct.classList.add('containerProduct');
main.appendChild(containerProduct);




function renderCards(products) {
  const result = products.reduce((prevValue, currValue) => {
    const card = new Book(currValue);
    const template = card.createCardTemplate();
    return prevValue + template;
  }, "");

  if (containerProduct) {
    containerProduct.innerHTML = result;
  }
}

