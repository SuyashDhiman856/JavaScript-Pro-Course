// Any method called constructor will be automatically called on making a new instance

class Triangle{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    getArea(){
        return (this.a * this.b) /2;
    }

    getHypotenues(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}

myTri = new Triangle(5, 12);

// constructor always returns undefined


//Projects :-

class BankAccount{
    constructor(accountHolder, accountNumber, balance = 0){
        this.balance = balance;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
    }

    deposit(amt){
        if(amt > 0){
            this.balance += amt;
            console.log(`You deposited $${amt}. New Balance is $${this.balance}`);
        }
        else{
            console.log("Cannot deposit negative");
        }
   }

    withdraw(amt){
        if(amt > this.balance){
            console.log("You cannot withdraw this much");
        }
        else{
        this.balance -= amt;
        console.log(`You withdraw $${amt}. New Balance is $${this.balance}`);
        }
    }
}
