export class Form {
  formData;

  constructor(formData) {
    this.formData = formData;
  }

  createFormTemplate() {
    return `
        <form class="delivery_form" name="delivery_form">
          <div class="box">
            <input class="input_name" type="text" name="nameInput" placeholder="Name"></input>
          </div>
          <div class="box">
            <input class="input_surname" type="text" name="surnameInput" placeholder="Surname"></input>
          </div>
          <div class="box">
            <input class="input_date" type="text" name="dateInput" placeholder="Delivery date"></input>
          </div>
          <div class="box">
            <input class="input_street" type="text" name="streetInput" placeholder="Street"></input>
          </div>
          <div class="box">
            <input class="input_house" type="text" name="houseInput" placeholder="House"></input>
          </div>
          <div class="box">
            <input class="input_flat" type="text" name="flatInput" placeholder="Flat"></input>
          </div>
        </form>       
        `;
  }
} 