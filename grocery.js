var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.itemFullSku = "Product: " + name + ", Quantity: " + quantity + ".";
    }
    return Grocery;
}());
function returnProduct(product) {
    return " Product: " + product.name + ", you need to buy " + product.quantity;
}
var prod1 = new Grocery("Milk", "2");
var prod2 = new Grocery("Bread", "1");
var prod3 = new Grocery("Bananas", "6");
var groceryList = [
    returnProduct(prod1),
    returnProduct(prod2),
    returnProduct(prod3)
];
document.body.textContent = groceryList.toString();
