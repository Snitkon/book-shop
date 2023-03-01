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
    return form;
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
      value: "cash",
      classNameInput: "cash",
      labelText: "Cash",
      classNameLabel: "box-radio_item__label",
      id: "radio_1",
      type: "radio",
      name: "radioBtn",
      forInput: "radio_1",
    }).createRadioInputBlock();

    this.radioBlockTwo = new CustomRadioInputBlock({
      value: "card",
      classNameInput: "card",
      labelText: "Card",
      classNameLabel: "box-radio_item__label",
      id: "radio_2",
      type: "radio",
      name: "radioBtn",
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
    label.innerText = "Choose 2 gifts (optional):";
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
      className: "form-btn-send",
    }).createSendBtn();

    wrapper.insertAdjacentElement("beforeend", this.btnSend);
    return wrapper;
  }

  createUserOrderForm() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("order");

    const container = document.createElement("div");
    container.classList.add("container-order");

    wrapper.insertAdjacentElement("afterbegin", container);

    const headerOrder = document.createElement("div");
    const orderTitle = document.createElement("h2");

    headerOrder.classList.add("header-order");
    orderTitle.classList.add("header-order_title");

    orderTitle.innerText = "The order created!";

    container.insertAdjacentElement("afterbegin", headerOrder);
    headerOrder.insertAdjacentElement("afterbegin", orderTitle);

    this.userOrderBlock = new CustomOrderInformation({
      classNameAddress: "main-order_deliveryAddress",
      classNameCustomer: "main-order_deliveryCustomer",
      classNameDate: "main-order_deliveryDate",
      street: this.streetInput.value,
      house: this.houseInput.value,
      apartment: this.apartmentInput.value,
      date: this.dateInput.value,
      name: this.nameInput.value,
      surname: this.surnameInput.value,
      action: "index.html",
    }).createOrderInformation();

    container.insertAdjacentElement("beforeend", this.userOrderBlock);
    return wrapper;
  }
}

export class CustomInput {
  inputData;
  inputEl;

  constructor({ className, id, type, name, placeholder, autocomplete }) {
    this.inputData = { className, id, type, name, placeholder, autocomplete };
  }

  createInput() {
    const input = document.createElement("input");
    const { className, id, type, name, placeholder, autocomplete } = this.inputData;
    if (className !== undefined) input.classList.add(className);
    if (id !== undefined) input.setAttribute("id", id);
    if (type !== undefined) input.setAttribute("type", type);
    if (name !== undefined) input.setAttribute("name", name);
    if (placeholder !== undefined) input.setAttribute("placeholder", placeholder);
    if (autocomplete !== undefined) input.setAttribute("autocomplete", autocomplete);
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

  constructor({ type, name, id, forInput, classNameInput, classNameLabel, labelText, value }) {
    this.radioInputData = { type, name, id, forInput, classNameInput, classNameLabel, labelText, value };
  }

  createRadioInputBlock() {
    const radioWrapper = document.createElement("div");
    radioWrapper.classList.add("box-radio");
    const label = document.createElement("label");
    const input = document.createElement("input");

    radioWrapper.appendChild(input);
    radioWrapper.appendChild(label);

    const { type, name, id, forInput, classNameLabel, classNameInput, labelText, value } = this.radioInputData;
    if (classNameInput !== undefined) input.classList.add(classNameInput);
    if (classNameLabel !== undefined) label.classList.add(classNameLabel);
    if (id !== undefined) input.setAttribute("id", id);
    if (type !== undefined) input.setAttribute("type", type);
    if (name !== undefined) input.setAttribute("name", name);
    if (value !== undefined) input.setAttribute("value", value);
    if (forInput !== undefined) label.setAttribute("for", forInput);

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

  constructor({ type, btnText, className }) {
    this.sendBtnData = { type, btnText, className };
  }

  createSendBtn() {
    const btn = document.createElement("button");
    btn.setAttribute("disabled", "true");

    const { type, btnText, className } = this.sendBtnData;
    if (type !== undefined) btn.setAttribute("type", type);
    if (className !== undefined) btn.classList.add(className);

    btn.innerText = btnText;
    this.sendBtn = btn;
    return this.sendBtn;
  }
}

export class CustomOrderInformation {
  orderData;
  orderBlock;

  constructor({ street, house, apartment, name, surname, date, classNameAddress, classNameCustomer, classNameDate, action }) {
    this.orderData = {
      street,
      house,
      apartment,
      name,
      surname,
      date,
      classNameAddress,
      classNameCustomer,
      classNameDate,
      action,
    };
  }

  createOrderInformation() {
    const orderWrapper = document.createElement("div");
    orderWrapper.classList.add("main-order");
    const deliveryAddressContainer = document.createElement("p");
    const deliveryCustomerContainer = document.createElement("p");
    const deliveryDateContainer = document.createElement("p");
    const btnForm = document.createElement("form");
    const btn = document.createElement("button");
    btn.classList.add("order-btn-done");
    btn.innerText = "Done";

    orderWrapper.appendChild(deliveryAddressContainer);
    orderWrapper.appendChild(deliveryCustomerContainer);
    orderWrapper.appendChild(deliveryDateContainer);
    orderWrapper.appendChild(btnForm);
    btnForm.appendChild(btn);

    const { street, house, apartment, name, surname, date, classNameAddress, classNameCustomer, classNameDate, action } =
      this.orderData;
    if (classNameAddress !== undefined) deliveryAddressContainer.classList.add(classNameAddress);
    if (classNameCustomer !== undefined) deliveryCustomerContainer.classList.add(classNameCustomer);
    if (classNameDate !== undefined) deliveryDateContainer.classList.add(classNameDate);
    if (action !== undefined) btnForm.setAttribute("action", action);

    deliveryAddressContainer.innerText = `The delivery address is ${street} street, house ${house}, apartment ${apartment}.  `;
    deliveryCustomerContainer.innerText = `Customer: ${name} ${surname}`;
    deliveryDateContainer.innerText = `Delivery date: ${date}`;
    this.orderBlock = orderWrapper;
    return this.orderBlock;
  }
}
