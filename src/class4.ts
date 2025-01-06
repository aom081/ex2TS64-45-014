export class Shape {
    private color: string;
    private filled: boolean;

    constructor(color: string = "red", filled: boolean = true) {
        this.color = color;
        this.filled = filled;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public isFilled(): boolean {
        return this.filled;
    }

    public setFilled(filled: boolean): void {
        this.filled = filled;
    }

    public toString(): string {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}

export class Circle extends Shape {
    private radius: number;

    constructor(radius: number = 1.0, color?: string, filled?: boolean) {
        super(color ?? "red", filled ?? true);
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    public toString(): string {
        return `Circle[${super.toString()}, radius=${this.radius}]`;
    }
}

export class Rectangle extends Shape {
    private width: number;
    private length: number;

    constructor(width: number = 1.0, length: number = 1.0, color?: string, filled?: boolean) {
        super(color ?? "red", filled ?? true);
        this.width = width;
        this.length = length;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public getArea(): number {
        return this.width * this.length;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.length);
    }

    public toString(): string {
        return `Rectangle[${super.toString()}, width=${this.width}, length=${this.length}]`;
    }
}

export class Square extends Rectangle {
    constructor(side: number = 1.0, color: string = "red", filled: boolean = true) {
        super(side, side, color, filled);
    }

    getSide(): number {
        return this.getWidth(); // ความกว้างและความยาวจะเท่ากัน
    }

    setSide(side: number): void {
        super.setWidth(side); // ใช้ setWidth จากคลาสแม่
        super.setLength(side); // ความยาวและความกว้างเท่ากัน
    }

    setWidth(width: number): void {
        this.setSide(width); // ใช้ setSide เพื่อทำให้ความกว้างและความยาวเท่ากัน
    }

    setLength(length: number): void {
        this.setSide(length); // ใช้ setSide เพื่อทำให้ความกว้างและความยาวเท่ากัน
    }

    toString(): string {
        return `Square[${super.toString()}]`;
    }
}
