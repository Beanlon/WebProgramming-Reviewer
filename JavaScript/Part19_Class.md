# Classes
Provides more structured and cleaner way to work with objects

```https
class Product{
    cosntructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.5;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);

product1.displayProduct(); //Output: Product: Shirt
                             Price: $19.99

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
//Output: Total price (with tax): $20.99
```

As you can see the class `Product` was created along with a `constructor` method `displayProduct` and `calculateTotal`. Outside the class we create constructor methods with their values being passed as parameters to the constructor. The construcotr displays the price and name using `.this`. We also use `salesTax` and pass it as a parameter for calculateTotal which was then displayed after.
