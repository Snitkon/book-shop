import { Cart, CartWindow } from "../modules/cart.js";
import { Form } from "../modules/form.js";

const body = document.body;

// Create Header
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
titlePage.onclick = openMainPage;
container.append(titlePage);

//Create Main
const main = document.createElement("main");
main.classList.add("main");
body.append(main);

const info_container = document.createElement("div");
info_container.classList.add("info_container");
main.append(info_container);

const info_content = document.createElement("div");
info_content.classList.add("info_content");
info_container.append(info_content);

const form_container = document.createElement("div");
form_container.classList.add("form_container");
main.append(form_container);

const form_content = document.createElement("div");
form_content.classList.add("form_content");
form_container.append(form_content);

const totalOrderContainer = document.createElement("div");
totalOrderContainer.classList.add("total-order_container");
info_container.append(totalOrderContainer);

const totalOrder_Items = document.createElement("p");
totalOrder_Items.classList.add("total-items");
totalOrderContainer.append(totalOrder_Items);

const totalOrder_Amount = document.createElement("p");
totalOrder_Amount.classList.add("total-amount");
totalOrderContainer.append(totalOrder_Amount);

//Create Footer
const footer = document.createElement("footer");
footer.classList.add("footer");
body.append(footer);

const footer_container = document.createElement("div");
footer_container.classList.add("footer_container");
footer.append(footer_container);

const footer_title = document.createElement("h2");
footer_title.innerText = "Contact info";
footer_title.classList.add("footer_title");
footer_container.append(footer_title);

const footer_info__container = document.createElement("div");
footer_info__container.classList.add("footer_info__container");
footer_container.append(footer_info__container);

const footer_email = document.createElement("p");
footer_email.innerText = "lukovka_store@yahoo.com";
footer_email.classList.add("email");
footer_info__container.append(footer_email);

const footer_phone = document.createElement("p");
footer_phone.innerText = "+1 212-473-1355";
footer_info__container.append(footer_phone);
footer_phone.classList.add("phone");

const footer_location = document.createElement("p");
footer_location.classList.add("location");
footer_location.innerText = "828 Broadway, New York, NY 10003";
footer_info__container.append(footer_location);

function openMainPage() {
  window.location.href = "index.html";
}

// Order books
const cart = new Cart();

function renderOrderList() {
  let cartDataNew = cart.getItem(); //change structure date for save local storage
  console.log(cartDataNew);
  let result = cartDataNew.reduce((prevValue, currValue) => {
    const cartWindowBook = new CartWindow(currValue);
    const template = cartWindowBook.createCartWindowTemplate();
    return prevValue + template;
  }, "");
  if (info_content) {
    info_content.innerHTML = result;
  }
}

function totalOrder() {
  let cartDataOrder = cart.getItem(); //change structure date for save local storage
  console.log(cartDataOrder);
  const totalQuantityResult = cartDataOrder.reduce((prevValue, currValue) => {
    return prevValue + currValue.quantity;
  }, 0);
  const totalQuantityPrice = cartDataOrder.reduce((prevValue, currValue) => {
    return prevValue + currValue.price * currValue.quantity;
  }, 0);

  if (totalOrder_Items) {
    totalOrder_Items.innerHTML = `Total items: ${totalQuantityResult}`;
  }

  if (totalOrder_Amount) {
    totalOrder_Amount.innerHTML = `Total amount: ${totalQuantityPrice}$`;
  }
}

renderOrderList();
totalOrder();

// Delivery Forms
const form = new Form();
const renderForm = form.createFormTemplate();
form_content.innerHTML = renderForm;

const delivery_form = document.forms.delivery_form;

delivery_form.addEventListener("change", (event) => {
  const target = event.target;
  if (target.type === "checkbox") {
    const divWrapper = target.parentElement;
    const parent = divWrapper.parentElement;
    divWrapper.setAttribute("checked", "true");
    const checkBoxItems = Array.from(parent.children).filter((item) => item.classList.contains("box-check"));
    const checkedItems = checkBoxItems.filter((item) => item.firstElementChild.checked);

    checkBoxItems.forEach((divEl) => {
      if (checkedItems.length >= 2 && !divEl.firstElementChild.checked) {
        divEl.firstElementChild.disabled = true;
      } else if (checkedItems.length < 2 && divEl.firstElementChild.disabled) {
        divEl.firstElementChild.disabled = false;
      }
    });
  }
});
