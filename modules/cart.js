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


export class Cart {
  itemsList = [];

  constructor() {
    this.keyName = "CART"
  }

  putItem(value){
    value.quantity
    const indexElement = this.itemsList.indexOf(value)
    if(indexElement != -1) {
        this.itemsList.forEach((element, index) => {
            if(index === indexElement) {
                element.quantity += 1
            }
        })
    } else {
         this.itemsList.push(value);
         value.quantity = 1

    }
    localStorage.setItem(this.keyName, JSON.stringify(this.itemsList));

  }

  deleteItem(value){
    const index = this.itemsList.findIndex((element) => {
      return element === value;
    });
    this.itemsList.splice(index, 1);
    localStorage.setItem(this.keyName, JSON.stringify(this.itemsList));
  }
}
