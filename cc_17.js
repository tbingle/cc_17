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
//Customers
const customer1 = new Customer('John Doe', 'john.doe@example.com');
customer1.addPurchase(100);  //$100 purchase
customer1.addPurchase(50);   //$50 purchase
customer1.addPurchase(30);   //$30 purchase
console.log(`Total spent by ${customer1.name}: $${customer1.getTotalSpent()}`);  //Output: Total spent by John Doe: $180
