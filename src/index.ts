import { Author, Book } from './class1';
import { Customer, Invoice } from './class2';
import { Person, Student, Staff } from './class3';
import { Shape, Circle, Rectangle, Square } from './class4'
import { Customer as NewCustomer, Visit, DiscountRate } from './class5';



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


console.log("################## ex3 ##################");
const person = new Person("Aom", "41/4 ม.3 ต.แหลมบัว อ.นครชัยศรี จ.นครปฐม 73120");
console.log(person.toString());

const student = new Student("K", "Mars", "Cult Mechanicus", 200, 15000);
console.log(student.toString());

const staff = new Staff("Emperor of Mankind", "Terra", " the Imperium of Man", 45000000000);
console.log(staff.toString());

console.log("################## ex4 ##################");
const shape = new Shape("blue", false);
console.log(shape.toString());

const circle = new Circle(5.0, "green", true);
console.log(circle.toString());
console.log("Area:", circle.getArea());
console.log("Perimeter:", circle.getPerimeter());

const rectangle = new Rectangle(4.0, 6.0, "yellow", false);
console.log(rectangle.toString());
console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());

const square = new Square(3.0, "purple", true);
console.log(square.toString());
square.setSide(5.0);
console.log("Updated:", square.toString());

console.log("################## ex5 ##################");

// สร้างลูกค้าใหม่
const customer2 = new NewCustomer("Alice");
customer2.setMember(true);
customer2.setMemberType("Premium");
console.log(customer2.toString());

// สร้างข้อมูล Visit
const visit1 = new Visit(customer2, new Date());
visit1.setServiceExpense(300); // ค่าใช้จ่ายบริการ
visit1.setProductExpense(200); // ค่าใช้จ่ายสินค้า
console.log(visit1.toString());

// คำนวณค่าใช้จ่ายรวมหลังส่วนลด
console.log("Total Expense after Discount:", visit1.getTotalExpense());

// ทดสอบ DiscountRate โดยตรง
console.log("Service Discount (Premium):", DiscountRate.getServiceDiscountRate("Premium"));
console.log("Product Discount (Premium):", DiscountRate.getProductDiscountRate("Premium"));
