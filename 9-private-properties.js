class Wallet {
  #balance = 0;

  #validate(amount) {
    return amount > 0;
  }

  constructor(intial) {
    this.#balance = intial;
  }

  deposit(amount) {
    if (this.#validate(amount)) {
      console.log('Valid deposit');
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

console.log(Wallet);
const wallet1 = new Wallet(10_000);
console.log(wallet1.getBalance());
