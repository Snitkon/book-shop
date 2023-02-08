// Read data books
fetch("../assets/books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
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
