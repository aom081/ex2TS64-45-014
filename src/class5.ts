export class Customer {
    private name: string;
    private member: boolean = false;
    private memberType: string = "";

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    isMember(): boolean {
        return this.member;
    }

    setMember(member: boolean): void {
        this.member = member;
    }

    getMemberType(): string {
        return this.memberType;
    }

    setMemberType(type: string): void {
        if (type === "Premium" || type === "Gold" || type === "Silver") {
            this.memberType = type;
        } else {
            throw new Error("Invalid member type. Use 'Premium', 'Gold', or 'Silver'.");
        }
    }

    toString(): string {
        return `Customer[name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}

export class Visit {
    private customer: Customer;
    private date: Date;
    private serviceExpense: number = 0.0;
    private productExpense: number = 0.0;

    constructor(customer: Customer, date: Date) {
        this.customer = customer;
        this.date = date;
    }

    getName(): string {
        return this.customer.getName();
    }

    getServiceExpense(): number {
        return this.serviceExpense;
    }

    setServiceExpense(expense: number): void {
        this.serviceExpense = expense;
    }

    getProductExpense(): number {
        return this.productExpense;
    }

    setProductExpense(expense: number): void {
        this.productExpense = expense;
    }

    getTotalExpense(): number {
        let totalService = this.serviceExpense;
        let totalProduct = this.productExpense;

        if (this.customer.isMember()) {
            const memberType = this.customer.getMemberType();
            totalService -= this.serviceExpense * DiscountRate.getServiceDiscountRate(memberType);
            totalProduct -= this.productExpense * DiscountRate.getProductDiscountRate(memberType);
        }

        return totalService + totalProduct;
    }

    toString(): string {
        return `Visit[customer=${this.customer.toString()}, date=${this.date.toISOString()}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
    }
}

export class DiscountRate {
    private static serviceDiscountPremium: number = 0.2;
    private static serviceDiscountGold: number = 0.15;
    private static serviceDiscountSilver: number = 0.1;

    private static productDiscountPremium: number = 0.1;
    private static productDiscountGold: number = 0.1;
    private static productDiscountSilver: number = 0.1;

    static getServiceDiscountRate(type: string): number {
        switch (type) {
            case "Premium":
                return this.serviceDiscountPremium;
            case "Gold":
                return this.serviceDiscountGold;
            case "Silver":
                return this.serviceDiscountSilver;
            default:
                return 0.0;
        }
    }

    static getProductDiscountRate(type: string): number {
        switch (type) {
            case "Premium":
                return this.productDiscountPremium;
            case "Gold":
                return this.productDiscountGold;
            case "Silver":
                return this.productDiscountSilver;
            default:
                return 0.0;
        }
    }
}
