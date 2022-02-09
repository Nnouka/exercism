//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.opened = false;
    this.closed = false;
    this.balances = {};
  }

  open() {
    if(this.opened) {
      throw new ValueError();
    }
    this.opened = true;
    this.closed = false;
    this.balance = 0;
  }

  close() {
    if(!this.opened || this.closed) {
      throw new ValueError();
    }
    this.closed = true;
    this.opened = false;
  }

  deposit(amount) {
    if(amount < 0) throw new ValueError();
    this.balance += amount;
  }

  withdraw(amount) {
    if(amount < 0 || amount > this.balance) throw new ValueError();
    this.balance -= amount;
  }

  validateState() {
    if(!this.opened || this.closed) {
      throw new ValueError();
    }
  }

  get balance() {
    this.validateState();
    return this.balances.current;
  }

  set balance(val) {
    this.validateState();
    this.balances = {current: val};
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
