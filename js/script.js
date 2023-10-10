
// Object Create

const Client = {
    getBalance : function() {
        return `hello ${this.name} your balance is 
        ${this.balance};`
    },
    withdraw : function(amount) {
        return this.balance -= amount;
    }
}