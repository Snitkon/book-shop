export class Form {
  formData;

  constructor(formData) {
    this.formData = formData;
  }

  createFormTemplate() {
    return `
        <form class="delivery_form" name="delivery_form">
          <div class="box">
            <input class="input_name" type="text" name="nameInput" placeholder="Name" onfocus="this.placeholder=''" onblur="this.placeholder='Name'" autocomplete="off"></input>
          </div>
          <div class="box">
            <input class="input_surname" type="text" name="surnameInput" placeholder="Surname" onfocus="this.placeholder=''" onblur="this.placeholder='Surname'" autocomplete="off"></input>
          </div>
          <div class="box">
            <input class="input_date" type="text" name="dateInput" placeholder="Delivery date" onfocus="this.placeholder=''" onblur="this.placeholder='Delivery date'" autocomplete="off"></input>
          </div>
          <div class="box">
            <input class="input_street" type="text" name="streetInput" placeholder="Street" onfocus="this.placeholder=''" onblur="this.placeholder='Street'" autocomplete="off"></input>
          </div>
          <div class="box">
            <input class="input_house" type="text" name="houseInput" placeholder="House" onfocus="this.placeholder=''" onblur="this.placeholder='House'" autocomplete="off"></input>
          </div>
          <div class="box">
            <input class="input_flat" type="text" name="flatInput" placeholder="Flat" onfocus="this.placeholder=''" onblur="this.placeholder='Flat'" autocomplete="off"></input>
          </div>
          <div class="box">
            <label class="box-radio_label">Payment method</label>
            <div class="box-radio">
              <input checked class="cash" id="radio_1" type="radio" name="radio"></input>
              <label for="radio_1" class="box-radio_item__label">Cash</label>
            </div>
            <div class="box_radio">
              <input class="card" id="radio_2" type="radio" name="radio"></input>
              <label for="radio_2" class="box-radio_item__label">Card</label>
            </div>
          </div>
          <div class="box">
            <label class="box-check_label">Choose 2 gifts(optional):</label>
            <div class="box-check">
              <input type="checkbox" name="checkBox" id="check_1"></input>
              <label for="check_1" class="box-check_item__label">pack as a gift</label>
            </div>
            <div class="box-check">
              <input type="checkbox" name="checkBox" id="check_2"></input>
              <label for="check_2" class="box-check_item__label">add postcard</label>
            </div>
            <div class="box-check">
              <input type="checkbox" name="checkBox" id="check_3"></input>
              <label for="check_3" class="box-check_item__label">provide 2% discount to the next time</label>
            </div>
            <div class="box-check">
              <input type="checkbox" name="checkBox" id="check_4"></input>
              <label for="check_4" class="box-check_item__label">branded pen or pencil</label>
            </div>
            <div class="box">
              <button type="submit" class="box-button">Send</button>
            </div>
          </div>
        </form>       
        `;
  }
}
