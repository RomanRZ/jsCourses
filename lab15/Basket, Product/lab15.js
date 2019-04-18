"use strict";

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.amount = this.price * this.quantity;
}

function Basket() {
  this.products = [];
}
Basket.prototype = {
  AddProduct: function(product) {
    this.products.push(product);
  },
  CalcTotal: function() {
    return this.products.reduce((acc, el) => {
      return acc + el.price * el.amount;
    }, 0);
  },
  PrintShoppingInfo: function() {
    this.products.forEach((el, ind) => {
      console.log(
        `${ind + 1} name:${el.name}, price: ${el.price}, quantity: ${
          el.quantity
        }, amount: ${el.amount}`
      );
    });
    console.log();
  },
  InnerSort: function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
  },
  SortByName: function() {
    return this.products.sort((a, b) => {
      return this.InnerSort(a.name, b.name);
    });
  },
  SortByPriceAndName: function() {
    return this.products.sort((a, b) => {
      return this.InnerSort(a.price, b.price || this.InnerSort(a.name, b.name));
    });
  },
  SortAll: function() {
    this.products.sort((a, b) => {
      return (
        this.InnerSort(a.name, b.name) ||
        this.InnerSort(a.price, b.price) ||
        this.InnerSort(a.quantity, b.quantity) ||
        this.InnerSort(a.amount, b.amount)
      );
    });
  }
};

const basket = new Basket();
basket.AddProduct(new Product("apple", 7, 12));
basket.AddProduct(new Product("strawberry", 15, 2));
basket.AddProduct(new Product("apple", 7, 11));
basket.AddProduct(new Product("lemon", 26, 11));
basket.AddProduct(new Product("apricot", 90, 5));
basket.AddProduct(new Product("banana", 26, 10));
basket.AddProduct(new Product("date", 34, 12));
basket.AddProduct(new Product("fig", 75, 15));
basket.AddProduct(new Product("grapefruit", 32, 8));
basket.AddProduct(new Product("avocado", 40, 3));
basket.AddProduct(new Product("grapes", 44, 5));
basket.AddProduct(new Product("kiwi", 23, 12));
basket.AddProduct(new Product("lime", 35, 5));
basket.AddProduct(new Product("mango", 40, 5));
basket.AddProduct(new Product("melon", 75, 5));
basket.AddProduct(new Product("avocado", 40, 2));

basket.PrintShoppingInfo();
console.log(`Total amount: ${basket.CalcTotal()}`);
console.log();
console.log("Sort by name:");
basket.SortByName();
basket.PrintShoppingInfo();
console.log("Sort by price and name:");
basket.SortByPriceAndName();
basket.PrintShoppingInfo();
console.log("Sorting combination: name => price => quantity => amount");
basket.SortAll();
basket.PrintShoppingInfo();
