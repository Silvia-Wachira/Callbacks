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
        return name;
    }
}

const person = new Client('Juan', 100); 
const person2 = new Client('Karen', 600);

// console.log(person);
// console.log(person.membership() );
// console.log(person2);



//string
const name1 = 'Karen'
const name2 = new String('Karen')

const number1 = 20;
const number2 =  new Number(20)


const boolean1 = true;
const boolean2 = new Boolean(false)

console.log(boolean1);
console.log(boolean2);