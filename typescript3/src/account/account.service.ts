import {Cc} from "./cc.class";
import {Cp} from "./cp.class";
import { Accounts } from "./accounts.interface";
import { Account } from "./account.class";

let accounts: Accounts = {
    1: {
        account_number: '01',
        agency:'01',
        balance: 0
    },
    2: {
        account_number: '02',
        agency:'01',
        balance: 0
    }
}

export const findAll = async () : Promise<Accounts> => Object.values(accounts)
export const find = async (id:number): Promise<Account> => accounts[id]