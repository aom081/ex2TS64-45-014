"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.Author = void 0;
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `Author: name=${this.name}, email: ${this.email}`;
    }
}
exports.Author = Author;
class Book {
    constructor(name, authors, price, qty = 0) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        let detail = "Book name: " + this.name + " authers: { ";
        for (let i = 0; i < this.authors.length; i++) {
            detail += this.authors[i].toString() + ", ";
        }
        detail += "}, price: " + this.price + ", qty: " + this.qty;
        return detail;
    }
    getAuthorNames() {
        let authorName = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorName += this.authors[i].getName() + ", ";
        }
        return authorName;
    }
}
exports.Book = Book;
