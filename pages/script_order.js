import { Cart, CartWindow } from "../modules/cart.js";
import { Form, CustomForm } from "../modules/form.js";

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

// const form = new Form();
// const renderForm = form.createFormTemplate();
// form_content.innerHTML = renderForm;
const customForm = new CustomForm();
const form = customForm.createForm();
form_content.insertAdjacentElement("afterbegin", form);
const subForm = customForm.createUserInfoSubForm();
form.insertAdjacentElement("beforeend", subForm);
const subFormTwo = customForm.createUserInfoSubFormTwo();
form.insertAdjacentElement("beforeend", subFormTwo);
const subFormThree = customForm.createUserInfoSubFormThree();
form.insertAdjacentElement("beforeend", subFormThree);
const sendBtn = customForm.createBtnSend();
form.insertAdjacentElement("beforeend", sendBtn);

// document.addEventListener("keydown", () => {
//   console.log(customForm.apartmentInput.value);
// });

// customForm.radioBlockOne.addEventListener("focus", (event) => {
// });
// customForm.radioBlockOne.addEventListener("click", (event) => {
// });

const delivery_form = document.forms.delivery_form;
const regularExpressionsLetters = /^[a-zA-ZА-Яа-яЁё]+$/;
const regularExpressionsNumbersandLetters = /^[a-zA-ZА-Яа-яЁё0-9]+$/;
const regularExpressionsNumbersWithDash = /(^[1-9])|(^[1-9][0-9]-*[0-9]+$)/;

function reciveFormValue(event) {
  event.preventDefault();

  // const value = {
  //   name: delivery_form.nameInput.value,
  //   surname: delivery_form.surnameInput.value,
  //   date: delivery_form.dateInput.value,
  //   street: delivery_form.streetInput.value,
  //   house: delivery_form.houseInput.value,
  //   flat: delivery_form.flatInput.value
  // };

  // const form = new Form(value);
  // const result = form.createOrderInformation()
  // console.log(result)

  const orderForm = customForm.createUserOrderForm();
  console.log(orderForm)

}

delivery_form.addEventListener("change", (event) => {
  const target = event.target;
  if (target.type === "checkbox") {
    console.log("checkbox")
    const divWrapper = target.parentElement;
    const parent = divWrapper.parentElement;
    console.log(divWrapper);
    console.log(parent);
    divWrapper.setAttribute("checked", "true");
    const checkBoxItems = Array.from(parent.children).filter((item) => item.classList.contains("box-check"));
    const checkedItems = checkBoxItems.filter((item) => item.firstElementChild.checked);
    console.log(checkBoxItems);
    console.log(checkedItems);

    checkBoxItems.forEach((divEl) => {
      if (checkedItems.length >= 2 && !divEl.firstElementChild.checked) {
        divEl.firstElementChild.disabled = true;
      } else if (checkedItems.length < 2 && divEl.firstElementChild.disabled) {
        divEl.firstElementChild.disabled = false;
      }
    });
  }

  if (target.name === "nameInput") {
    const nameInput = target;
    const name = nameInput.name;
    const value = nameInput.value;
    const textMistakeForName = "The field is invalid! At least 4 letters!";
    const valueLength = nameInput.value.length;
    const nameCheck = name === "nameInput" && valueLength >= 4 && value.match(regularExpressionsLetters);
    if (!nameCheck) {
      if (name === "nameInput" && document.querySelector(".name-mistake_container") === null) {
        const nameMistakeContainer = document.createElement("p");
        nameMistakeContainer.classList.add("name-mistake_container");
        nameMistakeContainer.innerText = textMistakeForName;
        nameInput.insertAdjacentElement("afterend", nameMistakeContainer);
      }
      nameInput.classList.add("mistake");
    } else {
      if (document.querySelector(".name-mistake_container")) {
        nameInput.nextElementSibling.remove();
      }
      nameInput.classList.remove("mistake");
    }
  }

  if (target.name === "surnameInput") {
    const surnameInput = target;
    const name = surnameInput.name;
    const value = surnameInput.value;
    const textMistakeForSurname = "The field is invalid! At least 5 letters!";
    const valueLength = surnameInput.value.length;
    const surnameCheck = name === "surnameInput" && valueLength >= 5 && value.match(regularExpressionsLetters);
    if (!surnameCheck) {
      if (name === "surnameInput" && document.querySelector(".surname-mistake_container") === null) {
        const surnameMistakeContainer = document.createElement("p");
        surnameMistakeContainer.classList.add("surname-mistake_container");
        surnameMistakeContainer.innerText = textMistakeForSurname;
        surnameInput.insertAdjacentElement("afterend", surnameMistakeContainer);
      }
      surnameInput.classList.add("mistake");
    } else {
      if (document.querySelector(".surname-mistake_container")) {
        surnameInput.nextElementSibling.remove();
      }
      surnameInput.classList.remove("mistake");
    }
  }

  if (target.name === "streetInput") {
    const streetInput = target;
    const name = streetInput.name;
    const value = streetInput.value;
    const textMistakeForStreet = "The field is invalid! At least 5 symbols!";
    const valueLength = streetInput.value.length;
    const streetCheck = name === "streetInput" && valueLength >= 5 && value.match(regularExpressionsNumbersandLetters);
    if (!streetCheck) {
      if (name === "streetInput" && document.querySelector(".street-mistake_container") === null) {
        const streetMistakeContainer = document.createElement("p");
        streetMistakeContainer.classList.add("street-mistake_container");
        streetMistakeContainer.innerText = textMistakeForStreet;
        streetInput.insertAdjacentElement("afterend", streetMistakeContainer);
      }
      streetInput.classList.add("mistake");
    } else {
      if (document.querySelector(".street-mistake_container")) {
        streetInput.nextElementSibling.remove();
      }
      streetInput.classList.remove("mistake");
    }
  }

  if (target.name === "dateInput") {
    const dateInput = target;
    const name = dateInput.name;
    const value = dateInput.value;
    const textMistakeForDate = "The field is invalid! Not earlier than next day!";
    let now = new Date();
    let dateToday = `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()}`;
    if (value <= dateToday) {
      if (name === "dateInput" && document.querySelector(".date-mistake_container") === null) {
        const dataMistakeContainer = document.createElement("p");
        dataMistakeContainer.classList.add("date-mistake_container");
        dataMistakeContainer.innerHTML = textMistakeForDate;
        dateInput.insertAdjacentElement("afterend", dataMistakeContainer);
      }

      dateInput.classList.add("mistake");
    } else {
      if (document.querySelector(".date-mistake_container")) {
        dateInput.nextElementSibling.remove();
      }

      dateInput.classList.remove("mistake");
    }
  }

  if (target.name === "houseInput") {
    const houseInput = target;
    const name = houseInput.name;
    const value = houseInput.value;
    console.log(typeof value);
    const textMistakeForHouse = "The field is invalid! Positive numbers only!";
    const houseCheck = value >= 1 && +value.split("")[0] >= 1;
    if (!houseCheck) {
      if (name === "houseInput" && document.querySelector(".house-mistake_container") === null) {
        const houseMistakeContainer = document.createElement("p");
        houseMistakeContainer.classList.add("house-mistake_container");
        houseMistakeContainer.innerText = textMistakeForHouse;
        houseInput.insertAdjacentElement("afterend", houseMistakeContainer);
      }
      houseInput.classList.add("mistake");
    } else {
      if (document.querySelector(".house-mistake_container")) {
        houseInput.nextElementSibling.remove();
      }
      houseInput.classList.remove("mistake");
    }
  }

  if (target.name === "apartmentInput") {
    const apartmentInput = target;
    const name = apartmentInput.name;
    const value = apartmentInput.value;
    const textMistakeForApartment =
      "The field is invalid! Positive numbers only! (For example: 1-25 or 25 is valid, but -25 is invalid)";
    const apartmentCheck = value.match(regularExpressionsNumbersWithDash);
    if (!apartmentCheck) {
      if (name === "apartmentInput" && document.querySelector(".apartment-mistake_container") === null) {
        const apartmentMistakeContainer = document.createElement("p");
        apartmentMistakeContainer.classList.add("apartment-mistake_container");
        apartmentMistakeContainer.innerText = textMistakeForApartment;
        apartmentInput.insertAdjacentElement("afterend", apartmentMistakeContainer);
      }
      apartmentInput.classList.add("mistake");
    } else {
      if (document.querySelector(".apartment-mistake_container")) {
        apartmentInput.nextElementSibling.remove();
      }
      apartmentInput.classList.remove("mistake");
    }
  }

  // const checkForm = Array.from(delivery_form).filter((el) => el.classList.contains("mistake"));
  // if (checkForm) {

  // }

  delivery_form.addEventListener("submit", reciveFormValue);
});


// Custom
// const customForm = new CustomForm();
// const subForm = customForm.createUserInfoSubForm();
// body.insertAdjacentElement('beforebegin', subForm);
// const subFormTwo = customForm.createUserInfoSubFormTwo();
// body.insertAdjacentElement("beforebegin", subFormTwo);
// const subFormThree = customForm.createUserInfoSubFormThree();
// body.insertAdjacentElement("beforebegin", subFormThree);

// document.addEventListener('keydown', () => {
//   console.log(customForm.apartmentInput.value);
// })

// customForm.radioBlockOne.addEventListener("focus", (event) => {
//   console.log(event.target.checked);
// });
// customForm.radioBlockOne.addEventListener("click", (event) => {
//   console.log(event);
// });