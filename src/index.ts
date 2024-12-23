import { Author, Book } from './class1';
import { Customer, Invoice } from './class2';
console.log("################## ex1 ##################")
const author = new Author('Nattavut Keawmaha', '644259014@webmail.npru.ac.th');
const book = new Book('Call of Cthulhu', [author], 29.99, 10);
console.log(author.toString());

// Use the Book methods
console.log(book.toString());
console.log(book.getAuthorNames());
console.log('Price:', book.getPrice());

// Update the price
book.setPrice(35.99);
console.log('Updated Price:', book.getPrice());

console.log("################## ex2 ##################");
const customer1 = new Customer(101, 'Aom', 20); // 20% discount
console.log(customer1.toString()); // Output: Alice(101)(20%)

const invoice1 = new Invoice(1, customer1, 1000); // $1000 invoice
console.log(invoice1.toString());// Output: Invoice[id=1,customer=Aom(101)(20%),amount=1000]

// Calculate the amount after discount (loot system)
const amountAfterDiscount = invoice1.getAmountAfterDiscount();
console.log(`Amount after discount: $${amountAfterDiscount}`); // Output: Amount after discount: $800

// Update discount for the customer (loot bonus)
customer1.setDiscount(30); // Increase discount to 30%
console.log(`Updated Discount: ${customer1.getDiscount()}%`);

const updatedAmount = invoice1.getAmountAfterDiscount();
console.log(`Updated amount after discount: $${updatedAmount}`); // Output: $700

// Use Invoice methods to display customer details
console.log(`Customer ID: ${invoice1.getCustomerId()}`); // Output: 101
console.log(`Customer Name: ${invoice1.getCustomerName()}`); // Output: Aom
