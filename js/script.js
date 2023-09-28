// Object Constructor

function Client(namw, balance) {
    this.name = name;
    this.balance = balance
    this.membership = function() {
        let name;
        //check for the balance
        if(this.balance > 1000) {
            name = 'Gold';
        } else if (this.balance > 500) {
            name = 'Platinum'
        } else {
            name = 'Normal'
        }
    }
}

const person = new Client('Juan', 1000); 
const person2 = new Client('Karen', 600);

console.log(person);
console.log(person2);
