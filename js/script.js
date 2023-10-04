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

const person = new Client('Juan', 100); 
const person2 = new Client('Karen', 600);

console.log(Client.prototype)

console.log(person)
console.log(person.membership() );
console.log(person.clientInfo() );

// console.log(person2);
// console.log(person2.membership());
