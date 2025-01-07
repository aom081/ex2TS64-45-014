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
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
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
        super(color, filled);
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
    constructor(side = 1.0, color, filled) {
        super(side, side, color, filled);
    }
    getSide() {
        return this.getWidth();
    }
    setSide(side) {
        this.setWidth(side);
        this.setLength(side);
    }
    toString() {
        return `Square[${super.toString()}]`;
    }
}
exports.Square = Square;
