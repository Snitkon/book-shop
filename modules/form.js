export class Form {
  formData;
  value = "";

  constructor(formData) {
    this.formData = formData;
  }

  // createFormTemplate() {
  //   return `
  //       <form class="delivery_form" name="delivery_form">
  //         <div class="box-input_container">
  //           <input class="input_name" type="text" name="nameInput" placeholder="Name" onfocus="placeholder=''" onblur="placeholder='Name'" autocomplete="off"></input>
  //           <input class="input_surname" type="text" name="surnameInput" placeholder="Surname" onfocus="placeholder=''" onblur="placeholder='Surname'" autocomplete="off"></input>
  //           <input class="input_date" type="date" name="dateInput"></input>
  //           <input class="input_street" type="text" name="streetInput" placeholder="Street" onfocus="placeholder=''" onblur="placeholder='Street'" autocomplete="off"></input>
  //           <input class="input_house" type="text" name="houseInput" placeholder="House" onfocus="placeholder=''" onblur="placeholder='House'" autocomplete="off"></input>
  //           <input class="input_flat" type="text" name="flatInput" placeholder="Flat" onfocus="placeholder=''" onblur="placeholder='Flat'" autocomplete="off"></input>
  //         </div>
  //         <div class="box-radio_container">
  //           <label class="box-radio_label">Payment method</label>
  //           <div class="box-radio">
  //             <input checked class="cash" id="radio_1" type="radio" name="radio"></input>
  //             <label for="radio_1" class="box-radio_item__label">Cash</label>
  //           </div>
  //           <div class="box_radio">
  //             <input class="card" id="radio_2" type="radio" name="radio"></input>
  //             <label for="radio_2" class="box-radio_item__label">Card</label>
  //           </div>
  //         </div>
  //         <div class="box-check_container">
  //           <label class="box-check_label">Choose 2 gifts(optional):</label>
  //           <div class="box-check">
  //             <input type="checkbox" name="checkBox" id="check_1"></input>
  //             <label for="check_1" class="box-check_item__label">pack as a gift</label>
  //           </div>
  //           <div class="box-check">
  //             <input type="checkbox" name="checkBox" id="check_2"></input>
  //             <label for="check_2" class="box-check_item__label">add postcard</label>
  //           </div>
  //           <div class="box-check">
  //             <input type="checkbox" name="checkBox" id="check_3"></input>
  //             <label for="check_3" class="box-check_item__label">provide 2% discount to the next time</label>
  //           </div>
  //           <div class="box-check">
  //             <input type="checkbox" name="checkBox" id="check_4"></input>
  //             <label for="check_4" class="box-check_item__label">branded pen or pencil</label>
  //           </div>
  //           <div class="box">
  //             <button type="submit" class="box-button">Send</button>
  //           </div>
  //         </div>
  //       </form>       
  //       `;
  // }

  createOrderInformation() {
    return `
    <div class="container=order">
      <div class="header-order">
        <h2 class="header-order_title">The order created!</h2>
      </div>
      <div class="main-order">
        <p class="main-order_deliveryAddress">${(this.formData.street, this.formData.house, this.formData.flat)}</p>
        <p class="main-order_deliveryCustomer">${(this.formData.name, this.formData.surname)}</p>
        <p class="main-order_deliveryDate">${this.formData.date}</p>
      </div>
      <div class="footer-order">
        <button class=gooter-order_btnDone>Done</button>
      </div>
    </div>
    `;
  }
}

export class CustomForm {
  nameInput;
  surnameInput;
  dateInput;
  streetInput;
  houseInput;
  apartmentInput;
  radioBlockOne;
  radioBlockTwo;

  createForm() {
    const form = document.createElement("form");
    form.classList.add("delivery_form");
    form.setAttribute("name", "delivery_form");
    return form
  }

  createUserInfoSubForm() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("box-input_container");

    this.nameInput = new CustomInput({
      className: "input_name",
      type: "text",
      name: "nameInput",
      placeholder: "Name",
      autocomplete: "off",
    }).createInput();

    this.surnameInput = new CustomInput({
      className: "input_surname",
      type: "text",
      name: "surnameInput",
      placeholder: "Surname",
      autocomplete: "off",
    }).createInput();

    this.dateInput = new CustomInput({
      className: "input_date",
      type: "date",
      name: "dateInput",
    }).createInput();

    this.streetInput = new CustomInput({
      className: "input_street",
      type: "text",
      name: "streetInput",
      placeholder: "Street",
      autocomplete: "off",
    }).createInput();

    this.houseInput = new CustomInput({
      className: "input_house",
      type: "text",
      name: "houseInput",
      placeholder: "House",
      autocomplete: "off",
    }).createInput();

    this.apartmentInput = new CustomInput({
      className: "input_apartment",
      type: "text",
      name: "apartmentInput",
      placeholder: "Apartment",
      autocomplete: "off",
    }).createInput();

    wrapper.insertAdjacentElement("beforeend", this.nameInput);
    wrapper.insertAdjacentElement("beforeend", this.surnameInput);
    wrapper.insertAdjacentElement("beforeend", this.dateInput);
    wrapper.insertAdjacentElement("beforeend", this.streetInput);
    wrapper.insertAdjacentElement("beforeend", this.houseInput);
    wrapper.insertAdjacentElement("beforeend", this.apartmentInput);
    return wrapper;
  }

  createUserInfoSubFormTwo() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("box-radio_container");

    const label = document.createElement("label");
    label.classList.add("box-radio_label");
    label.innerText = "Payment method";
    wrapper.insertAdjacentElement("beforeend", label);

    this.radioBlockOne = new CustomRadioInputBlock({
      checked: "",
      classNameInput: "cash",
      labelText: "Cash",
      classNameLabel: "box-radio_item__label",
      id: "radio_1",
      type: "radio",
      name: "radio",
      forInput: "radio_1",
    }).createRadioInputBlock();

    this.radioBlockTwo = new CustomRadioInputBlock({
      classNameInput: "card",
      labelText: "Card",
      classNameLabel: "box-radio_item__label",
      id: "radio_2",
      type: "radio",
      name: "radio",
      forInput: "radio_2",
    }).createRadioInputBlock();

    wrapper.insertAdjacentElement("beforeend", this.radioBlockOne);
    wrapper.insertAdjacentElement("beforeend", this.radioBlockTwo);
    return wrapper;
  }

  createUserInfoSubFormThree() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("box-check_container");

    const label = document.createElement("label");
    label.classList.add("box-check_label");
    label.innerText = "Choose 2 gifts(optional):";
    wrapper.insertAdjacentElement("beforeend", label);

    this.checkBlockOne = new CustomCheckInputBlock({
      type: "checkbox",
      name: "checkBox",
      id: "check_1",
      for: "check_1",
      classNameLabel: "box-check_item__label",
      labelText: "pack as a gift",
    }).createCheckInputBlock();

    this.checkBlockTwo = new CustomCheckInputBlock({
      type: "checkbox",
      name: "checkBox",
      id: "check_2",
      for: "check_2",
      classNameLabel: "box-check_item__label",
      labelText: "add postcard",
    }).createCheckInputBlock();

    this.checkBlockThree = new CustomCheckInputBlock({
      type: "checkbox",
      name: "checkBox",
      id: "check_3",
      for: "check_3",
      classNameLabel: "box-check_item__label",
      labelText: "provide 2% discount to the next time",
    }).createCheckInputBlock();

    this.checkBlockFour = new CustomCheckInputBlock({
      type: "checkbox",
      name: "checkBox",
      id: "check_4",
      for: "check_4",
      classNameLabel: "box-check_item__label",
      labelText: "branded pen or pencil",
    }).createCheckInputBlock();

    wrapper.insertAdjacentElement("beforeend", this.checkBlockOne);
    wrapper.insertAdjacentElement("beforeend", this.checkBlockTwo);
    wrapper.insertAdjacentElement("beforeend", this.checkBlockThree);
    wrapper.insertAdjacentElement("beforeend", this.checkBlockFour);
    return wrapper;
  }

  createBtnSend() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("box-btn");

    this.btnSend = new SendBtn({
      type: "submit",
      btnText: "Send",
    }).createSendBtn()

    wrapper.insertAdjacentElement("beforeend", this.btnSend)
    return wrapper
  }

  createUserOrderForm() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("container-order");

    this.userOrderBlock = new CustomOrderInformation({
      classNameAddress: "main-order_deliveryAddress",
      classNameCustomer: "main-order_deliveryCustomer",
      classNameDate: "main-order_deliveryDate",
      street: this.streetInput.value,
      house: this.houseInput.value,
      apartment: this.apartmentInput.value,
      date: this.dateInput.value,
      name: this.nameInput.value,
      surname: this.surnameInput.value
    }).createOrderInformation();

    wrapper.insertAdjacentElement("beforeend", this.userOrderBlock);
    return wrapper

  }
}

export class CustomInput {
  inputData;
  inputEl;

  constructor({ className, id, type, name, placeholder, autocomplete, checked }) {
    this.inputData = { className, id, type, name, placeholder, autocomplete, checked };
  }

  createInput() {
    const input = document.createElement("input");
    const { className, id, type, name, placeholder, autocomplete, checked } = this.inputData;
    if (className !== undefined) input.classList.add(className);
    if (id !== undefined) input.setAttribute("id", id);
    if (type !== undefined) input.setAttribute("type", type);
    if (name !== undefined) input.setAttribute("name", name);
    if (placeholder !== undefined) input.setAttribute("placeholder", placeholder);
    if (autocomplete !== undefined) input.setAttribute("autocomplete", autocomplete);
    if (checked !== undefined) input.setAttribute("checked", checked);
    input.addEventListener("focus", () => {
      this.inputEl.placeholder = "";
    });
    input.addEventListener("blur", () => {
      this.inputEl.placeholder = this.inputData.placeholder;
    });
    this.inputEl = input;
    return this.inputEl;
  }
}

export class CustomRadioInputBlock {
  radioInputData;
  radioInputBlock;

  constructor({ type, name, id, forInput, classNameInput, classNameLabel, labelText, checked }) {
    this.radioInputData = { type, name, id, forInput, classNameInput, classNameLabel, labelText, checked };
  }

  createRadioInputBlock() {
    const radioWrapper = document.createElement("div");
    radioWrapper.classList.add("box-radio");
    const label = document.createElement("label");
    const input = document.createElement("input");

    // radioWrapper.insertAdjacentElement("beforeend", label);
    // radioWrapper.insertAdjacentElement("beforeend", input);

    radioWrapper.appendChild(input);
    radioWrapper.appendChild(label);

    const { type, name, id, forInput, classNameLabel, classNameInput, labelText, checked } = this.radioInputData;
    if (classNameInput !== undefined) input.classList.add(classNameInput);
    if (classNameLabel !== undefined) label.classList.add(classNameLabel);
    if (id !== undefined) input.setAttribute("id", id);
    if (type !== undefined) input.setAttribute("type", type);
    if (name !== undefined) input.setAttribute("name", name);
    if (forInput !== undefined) label.setAttribute("for", forInput);
    if (checked !== undefined) input.setAttribute("checked", checked);

    label.innerText = labelText;
    this.radioInputBlock = radioWrapper;
    return this.radioInputBlock;
  }
}

export class CustomCheckInputBlock {
  checkInputData;
  checkInputBlock;

  constructor({ type, name, id, forInput, classNameLabel, labelText }) {
    this.checkInputData = { type, name, id, forInput, classNameLabel, labelText };
  }

  createCheckInputBlock() {
    const checkWrapper = document.createElement("div");
    checkWrapper.classList.add("box-check");
    const label = document.createElement("label");
    const input = document.createElement("input");

    checkWrapper.appendChild(input);
    checkWrapper.appendChild(label);

    const { type, name, id, forInput, classNameLabel, labelText } = this.checkInputData;
    if (classNameLabel !== undefined) label.classList.add(classNameLabel);
    if (id !== undefined) input.setAttribute("id", id);
    if (type !== undefined) input.setAttribute("type", type);
    if (name !== undefined) input.setAttribute("name", name);
    if (forInput !== undefined) label.setAttribute("for", forInput);

    label.innerText = labelText;
    this.checkInputBlock = checkWrapper;
    return this.checkInputBlock;
  }
}

export class SendBtn {
  sendBtnData;
  sendBtn;

  constructor({ type, btnText }) {
    this.sendBtnData = { type, btnText };
  }

  createSendBtn() {
    const btn = document.createElement("button");

    const {type, btnText} = this.sendBtnData;
    if (type !== undefined) btn.setAttribute("type", type);

    btn.innerText = btnText
    this.sendBtn = btn;
    return this.sendBtn;
  }
}

export class CustomOrderInformation {
  orderData;
  orderBlock;

  constructor({ street, house, apartment, name, surname, date, classNameAddress, classNameCustomer, classNameDate }) {
    this.orderData = {street, house, apartment, name, surname, date, classNameAddress, classNameCustomer, classNameDate};
  }

  createOrderInformation() {
    const orderWrapper = document.createElement("div");
    orderWrapper.classList.add("main-order");
    const deliveryAddressContainer = document.createElement("p");
    const deliveryCustomerContainer = document.createElement("p");
    const deliveryDateContainer = document.createElement("p");

    orderWrapper.appendChild(deliveryAddressContainer);
    orderWrapper.appendChild(deliveryCustomerContainer);
    orderWrapper.appendChild(deliveryDateContainer);

    const { street, house, apartment, name, surname, date, classNameAddress, classNameCustomer, classNameDate } = this.orderData;
    if (classNameAddress !== undefined) deliveryAddressContainer.classList.add(classNameAddress);
    if (classNameCustomer !== undefined) deliveryCustomerContainer.classList.add(classNameCustomer);
    if (classNameDate !== undefined) deliveryDateContainer.classList.add(classNameDate);

    deliveryAddressContainer.innerText = `The delivery address is ${street} street, house ${house}, apartment ${apartment}.  `;
    deliveryCustomerContainer.innerText = `Customer: ${name} ${surname}`;
    deliveryDateContainer.innerText = `Delivery date: ${date}`;
    this.orderBlock = orderWrapper
    return this.orderBlock
  }
}

    // <div class="container-order">
    //   <div class="header-order">
    //     <h2 class="header-order_title">The order created!</h2>
    //   </div>
    //   <div class="main-order">
    //     <p class="main-order_deliveryAddress">${(this.formData.street, this.formData.house, this.formData.apartment)}</p>
    //     <p class="main-order_deliveryCustomer">${(this.formData.name, this.formData.surname)}</p>
    //     <p class="main-order_deliveryDate">${this.formData.date}</p>
    //   </div>
    //   <div class="footer-order">
    //     <button class=gooter-order_btnDone>Done</button>
    //   </div>
    // </div>