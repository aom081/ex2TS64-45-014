"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountRate = exports.Visit = exports.Customer = void 0;
class Customer {
    constructor(name) {
        this.member = false;
        this.memberType = "";
        this.name = name;
    }
    getName() {
        return this.name;
    }
    isMember() {
        return this.member;
    }
    setMember(member) {
        this.member = member;
    }
    getMemberType() {
        return this.memberType;
    }
    setMemberType(type) {
        if (type === "Premium" || type === "Gold" || type === "Silver") {
            this.memberType = type;
        }
        else {
            throw new Error("Invalid member type. Use 'Premium', 'Gold', or 'Silver'.");
        }
    }
    toString() {
        return `Customer[name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}
exports.Customer = Customer;
class Visit {
    constructor(customer, date) {
        this.serviceExpense = 0.0;
        this.productExpense = 0.0;
        this.customer = customer;
        this.date = date;
    }
    getName() {
        return this.customer.getName();
    }
    getServiceExpense() {
        return this.serviceExpense;
    }
    setServiceExpense(expense) {
        this.serviceExpense = expense;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setProductExpense(expense) {
        this.productExpense = expense;
    }
    getTotalExpense() {
        let totalService = this.serviceExpense;
        let totalProduct = this.productExpense;
        if (this.customer.isMember()) {
            const memberType = this.customer.getMemberType();
            totalService -= this.serviceExpense * DiscountRate.getServiceDiscountRate(memberType);
            totalProduct -= this.productExpense * DiscountRate.getProductDiscountRate(memberType);
        }
        return totalService + totalProduct;
    }
    toString() {
        return `Visit[customer=${this.customer.toString()}, date=${this.date.toISOString()}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
    }
}
exports.Visit = Visit;
class DiscountRate {
    static getServiceDiscountRate(type) {
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
    static getProductDiscountRate(type) {
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
exports.DiscountRate = DiscountRate;
DiscountRate.serviceDiscountPremium = 0.2;
DiscountRate.serviceDiscountGold = 0.15;
DiscountRate.serviceDiscountSilver = 0.1;
DiscountRate.productDiscountPremium = 0.1;
DiscountRate.productDiscountGold = 0.1;
DiscountRate.productDiscountSilver = 0.1;
