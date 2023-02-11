// export class Cart {
// //   itemsList = [];

//   constructor() {
//     this.keyName = "CART"
//   }

//   getItem() {
//     const bookLocalStorage = localStorage.getItem(this.keyName);
//     if(bookLocalStorage !== null) {
//         return JSON.parse(bookLocalStorage);
//     }
//     return [];
//   }

//   putItem(value) {
//     let cartBook = this.getItem()
//     cartBook.push(value);
//     localStorage.setItem(this.keyName, JSON.stringify(cartBook));
//   }

//   deleteItem(value) {
//     const index = this.itemsList.findIndex((element) => {
//       return element === value;
//     });
//     this.itemsList.splice(index, 1);
//     localStorage.setItem(this.keyName, JSON.stringify(this.itemsList));
//   }
// }


export class CartWindow {
  cartData;

  constructor(cartData) {
    this.cartData = cartData;
  }

  createCartWindowTemplate() {
    return `
    <div class="cart-window_container">
      <h3 class="cart-window_title">${this.cartData.title}</h3>
      <p class="cart-window_description">${this.cartData.description}</p>
      <p class="cart-window_quantity"><input name="textfield" type="text" value="${this.cartData.quantity}"></p>
    </div>
    `;
  }
}

export class Cart {
  itemsList = [];

  constructor() {
    this.keyName = "CART";
  }

  putItem(value) {
    value.quantity;
    const indexElement = this.itemsList.indexOf(value);
    if (indexElement != -1) {
      this.itemsList.forEach((element, index) => {
        if (index === indexElement) {
          element.quantity += 1;
        }
      });
    } else {
      this.itemsList.push(value);
      value.quantity = 1;
    }
    localStorage.setItem(this.keyName, JSON.stringify(this.itemsList));
  }

  getItem() {
    return JSON.parse(localStorage.getItem(this.keyName));
  }

  // createCartTemplate() {
  //   this.itemsList.forEach((item) => {
  //     console.log(item)
  //     return `
  //     <div class="cart-window_container">
  //       <h3 class="cart-window_title">${item.title}</h3>
  //       <p class="cart-window_description">${item.description}</p>
  //       <p class="cart-window_quantity">${item.quantity}</p>
  //     </div>
  //   `;
  //   })
  // }

  // deleteItem(value) {
  //   const index = this.itemsList.findIndex((element) => {
  //     return element === value;
  //   });
  //   console.log(index)
  //   localStorage.setItem(this.keyName, JSON.stringify(this.itemsList));
  // }

  // deleteItem(value) {
  //   const index = this.itemsList.findIndex((element) => {
  //     return element === value;
  //   });
  //   this.itemsList.splice(index, 1);
  //   localStorage.setItem(this.keyName, JSON.stringify(this.itemsList));
  // }
}

