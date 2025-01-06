"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Rectangle = exports.Circle = exports.Shape = void 0;
class Shape {
    constructor(color = "red", filled = true) {
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}
exports.Shape = Shape;
class Circle extends Shape {
    constructor(radius = 1.0, color, filled) {
        super(color !== null && color !== void 0 ? color : "red", filled !== null && filled !== void 0 ? filled : true);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `Circle[${super.toString()}, radius=${this.radius}]`;
    }
}
exports.Circle = Circle;
class Rectangle extends Shape {
    constructor(width = 1.0, length = 1.0, color, filled) {
        super(color !== null && color !== void 0 ? color : "red", filled !== null && filled !== void 0 ? filled : true);
        this.width = width;
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return 2 * (this.width + this.length);
    }
    toString() {
        return `Rectangle[${super.toString()}, width=${this.width}, length=${this.length}]`;
    }
}
exports.Rectangle = Rectangle;
class Square extends Rectangle {
    constructor(side = 1.0, color = "red", filled = true) {
        super(side, side, color, filled);
    }
    getSide() {
        return this.getWidth(); // ความกว้างและความยาวจะเท่ากัน
    }
    setSide(side) {
        super.setWidth(side); // ใช้ setWidth จากคลาสแม่
        super.setLength(side); // ความยาวและความกว้างเท่ากัน
    }
    setWidth(width) {
        this.setSide(width); // ใช้ setSide เพื่อทำให้ความกว้างและความยาวเท่ากัน
    }
    setLength(length) {
        this.setSide(length); // ใช้ setSide เพื่อทำให้ความกว้างและความยาวเท่ากัน
    }
    toString() {
        return `Square[${super.toString()}]`;
    }
}
exports.Square = Square;
