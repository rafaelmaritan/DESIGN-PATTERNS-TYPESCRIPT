export interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) {}
  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }
  addAdress(address: Address): void {
    this.addresses.push(address);
  }
}
const adress1 = new Address("Rua Vergueiro", 3315);
const person1 = new Person("luis", 30);
person1.addAdress(adress1);
const person2 = person1.clone();
console.log(person2);
console.log(person2.name);
console.log(person2.addresses);

person2.name = "Joana";
person1.addresses[0].street = "bla bla bla";
console.log(person2);
console.log(person2.name);
console.log(person2.addresses);
