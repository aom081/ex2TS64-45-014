export class Author {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public toString(): string {
        return `Author: name=${this.name}, email: ${this.email}`;
    }
}

export class Book {
    private name: string;
    private authors: Author[];
    private price: number;
    private qty: number;

    constructor(name: string, authors: Author[], price: number, qty: number = 0) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }

    public getName(): string {
        return this.name;
    }

    public getAuthors(): Author[] {
        return this.authors;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getQty(): number {
        return this.qty;
    }

    public setQty(qty: number): void {
        this.qty = qty;
    }

    public toString(): string {
        let detail = "Book name: " + this.name + " authers: { ";
        for (let i = 0; i < this.authors.length; i++) {
            detail += this.authors[i].toString() + ", "
        }
        detail += "}, price: " + this.price + ", qty: " + this.qty;
        return detail
    }

    public getAuthorNames(): string {
        let authorName = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorName += this.authors[i].getName() + ", ";
        }
        return authorName;
    }
}
