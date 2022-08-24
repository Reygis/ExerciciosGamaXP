"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(account_number, agency, client, id) {
        this.id = id;
        this.account_number = account_number;
        this.agency = agency;
        this.balance = 0;
        this.client = client;
    }
    getId() {
        return this.id;
    }
    getBalance() {
        return this.balance;
    }
    deposit(value) {
        if (value > 0) {
            this.balance += value;
            return this.getBalance();
        }
        return null;
    }
    withdraw(value) {
        this.balance -= value;
    }
}
exports.Account = Account;