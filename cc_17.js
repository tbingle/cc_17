class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];  //Initializes an empty array for purchase history
    }
    //Add a purchase amount to the purchaseHistory
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }
    //Method to get the total amount spent 
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}
class SalesRep {
    //Constructor to initialize properties
    constructor(name) {
        this.name = name;
        this.clients = [];  //Initializes an empty array to store clients 
    }
    //Add a customer to the list of clients
    addClient(customer) {
        this.clients.push(customer);
    }
    //Find a client by name and return the total spent
    getClientTotal(name) {
        //Find the client by name 
        const client = this.clients.find(client => client.name === name);
        //If client is found, return the total spent
        if (client) {
            return client.getTotalSpent();
        } else {
            return `Client with name ${name} not found.`;
        }
    }
}
//Customers
const customer1 = new Customer('John Doe', 'john.doe@example.com');
customer1.addPurchase(100);  //$100 purchase
customer1.addPurchase(50);   //$50 purchase
customer1.addPurchase(30);   //$30 purchase
console.log(`Total spent by ${customer1.name}: $${customer1.getTotalSpent()}`);  //Output: Total spent by John Doe: $180
const customer2 = new Customer('Jane Smith', 'jane.smith@example.com');
customer2.addPurchase(200);
customer2.addPurchase(150);
//Creating a SalesRep object
const salesRep = new SalesRep('Alice Johnson');
//Adding customers to the sales rep's client list
salesRep.addClient(customer1);
salesRep.addClient(customer2);
//Getting the total spent by a client
console.log(`${customer1.name} spent: $${salesRep.getClientTotal('John Doe')}`);  //Output: John Doe spent: $150
console.log(`${customer2.name} spent: $${salesRep.getClientTotal('Jane Smith')}`); //Output: Jane Smith spent: $350
console.log(salesRep.getClientTotal('Mike Johnson'));
