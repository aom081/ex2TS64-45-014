export class Shape {
    constructor(private color: string = "red", private filled: boolean = true) {}

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    isFilled(): boolean {
        return this.filled;
    }

    setFilled(filled: boolean): void {
        this.filled = filled;
    }

    toString(): string {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}

export class Circle extends Shape {
    constructor(private radius: number = 1.0, color?: string, filled?: boolean) {
        super(color, filled);
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    toString(): string {
        return `Circle[${super.toString()}, radius=${this.radius}]`;
    }
}

export class Rectangle extends Shape {
    constructor(private width: number = 1.0, private length: number = 1.0, color?: string, filled?: boolean) {
        super(color, filled);
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    getLength(): number {
        return this.length;
    }

    setLength(length: number): void {
        this.length = length;
    }

    getArea(): number {
        return this.width * this.length;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.length);
    }

    toString(): string {
        return `Rectangle[${super.toString()}, width=${this.width}, length=${this.length}]`;
    }
}

export class Square extends Rectangle {
    constructor(side: number = 1.0, color?: string, filled?: boolean) {
        super(side, side, color, filled);
    }

    getSide(): number {
        return this.getWidth();
    }

    setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }

    toString(): string {
        return `Square[${super.toString()}]`;
    }
}
