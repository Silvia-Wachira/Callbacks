//Object literals

const client = 
[
    name: 'Juan',
    balance: 1000,
    membership: function() {
        let name;
        //check balance
        if(this.balance > 500) {
            name = 'Platinum';
        } else {
            name = 'Normal'
        }
    }
]