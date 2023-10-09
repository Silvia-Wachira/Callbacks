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

//Business
function Business(name, balance, phone, category) {
    Client.call(this, name, balance);
    this.phone = phone;
    this.category = category;
}

//Inherit the prototypes
Business.prototype = Object.create(Client.prototype)

//Return the constructor as Business
Business.prototype.constructor = Business;

Business.prototype.businessInfo = function() {
    return `Name: ${this.name}, Balance: ${this.balance},
    Membership: ${this.membership() }, Category: ${this.category}, Phone: ${this.phone}`
}


//Create a Business
const business = new Business('Udemy', 1000000, 12345656546, 'Education')

console.log(business);
console.log(business.businessInfo())