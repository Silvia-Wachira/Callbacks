// Object Constructor

function Client(name, balance) {
    this.name = name;
    this.balance = balance
}

//Attach the prototype to the method
Client.prototype.membership = function() {
    let name;
    
        //check for the balance
        if(this.balance > 1000) {
            name = 'Gold';
        } else if (this.balance > 500) {
            name = 'Platinum'
        } else {
            name = 'Normal'
        }
        return name;
    }
    
//second protoype
Client.prototype.clientInfo = function() {
    return `Name: ${this.name}, Balance: ${this.balance},
    Membership: ${this.membership() }`
}

//Another method to withdraw money from the account
Client.prototype.withdraw = function(amount) {
     this.balance -= amount;
}

//create a deposit method
Client.prototype.deposit = function(amount) {
    this.balance += amount;
}

//check the balance
Client.prototype.getBalance = function() {
    return this.balance
}

const person = new Client('Juan', 2000); 
const person2 = new Client('Karen', 600);

console.log(person)
console.log(person.membership() );
console.log(person.clientInfo() );
person.withdraw(100)
console.log(person.clientInfo() );
console.log(person.getBalance() );
person.deposit(500);
console.log(person.clientInfo() );
console.log(person.getBalance() );


console.log('------------');

console.log(person2);
console.log(person2.membership());
console.log(person2.clientInfo());

console.log(person2)
console.log(person2.membership() );
console.log(person2.clientInfo() );
person2.withdraw(1000)
console.log(person2.clientInfo() );
console.log(person2.getBalance() );
person2.deposit(500);
console.log(person2.clientInfo() );
console.log(person2.getBalance() );

