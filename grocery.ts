class Grocery {
    itemFullSku: string;
    constructor(public name: string, public quantity: string) {
      this.itemFullSku = `Product: ${name}, Quantity: ${quantity}.`;
    }
  }
  
  interface Item {
    name: string;
    quantity: string;
  }
  
  function returnProduct(product: Item) {
    return ` Product: ${product.name}, you need to buy ${product.quantity}`;
  }
  
  let prod1 = new Grocery("Milk", "2");
  let prod2 = new Grocery("Bread", "1");
  let prod3 = new Grocery("Bananas", "6");
  
  let groceryList = [ returnProduct(prod1), returnProduct(prod2), returnProduct(prod3)];
  
  document.body.textContent = groceryList.toString();