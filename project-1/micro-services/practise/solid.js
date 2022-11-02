/*
//singleResponsiblity
-----------------------
1.example
abstract class Employee{
    abstract calculatedSalary():number;
    abstract hoursWorked():number
    protected storeToDB():void{
        //execute
    }
}
class Finance extends Employee{
    calculatedSalary():number{
        //execute
    }
    hoursWorked():number{
        //execute
    }
}

class Technical extends Employee{
    calculatedSalary():number{
        //execute
    }
    hoursWorked():number{
        //execute
    }
}

2.example cause problem its doing start and err log in same class to resolve this use separate class for err

class Car{
    constructor(make,model){
        this.make=make;
        this.model=model
    }

    start(){
        if(this.mode == "auto"){
            return true;
        }else{
            this.errorLog(`The car ${this.make} ${this.model} failed to start.`)
            return false;
        }
    }
    errorLog(err){
        console.log(err)
    }
}

.//sol
class Car{
    constructor(make,model){
        this.make=make;
        this.model=model
    }

    start(){
        if(this.mode == "auto"){
            return true;
        }else{
            this.errorLog(`The car ${this.make} ${this.model} failed to start.`)
            return false;
        }
    }
    ErrorLog.log(err){
        console.log(err)
    }
}
class ErrorLog {
    static log(message) {
        console.log(message);
    }
}

//open-closed  instead of modfiy vehicle class extends and override it
class vehicle{
    constructor(fuelCapacity,fuelEfficiency){
        this.fuelCapacity=fuelCapacity;
        this.fuelEfficiency=fuelEfficiency;
    }

    getRange(){
        return this.fuelCapacity*this.fuelEfficiency
    }
}

class HybridVehicle extends Vehicle{
    constructor(fuelEfficiency,fuelEfficiency,electricRange){
        super(fuelEfficiency,fuelEfficiency)
    }

    getRange(){
        return super.getRange()+this.electricRange
    }
}
const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

//liskov substitution sqaure can inherit rectange and not vice versa so create parent shape and extend both
//for rectange h/w can be any value but for square both has to be same
class Rectange {
    constructor(height,width){
        this.height=height;
        this.weight=weight
    }

    setHeight(height){
        this.height=height;
    }
}
class Square extends Rectangle{}

const rectange=new Rectangle(5,6)
const square=new Square(4,4)
square.setHeight=7 //now its wrong since square should have same h/w

sol..
class Shape{
    constructor(height,width){
        this.height=height;
        this.weight=weight
    }
    setHeight(height){
        this.height=height;
    }
}

class Square extends Shape{}
class Rectangle extends Shape{}



//Dependency inversion
-------------------------
type PaymentTransaction= 'Success' |'Failure'|'Pending'
interface IpaymentTransactionResult{
    message?:String,
    result:PaymentTransaction

}

interface iPaymentService{
    pay():Promise<IpaymentTransactionResult>
}

class gPaymentService implements iPaymentService{
    pay(to:String,amount:Number):Promise<IpaymentTransactionResult>{

    }
}

class phonePaymentService implements iPaymentService{
    pay(to:String,amount:Number):Promise<IpaymentTransactionResult>{
        
    }
2.example in js purchaseHandler handles capi call by itself if another pay mode comes here we need to modify and parameters will change
so use another class for payment those handling and use this for calling

//prob
class PurchaseHandler{
    processPayment(details,amount){
        const paymentSucess=PayPalAPI.requestPayment(detail,amount);

        if(paymentSucess){
            return true;
        }
        return false
    }
}

sol..
class PurchaseHandler{
    processPayment(details,amount){
        const paymentSucess=PaymentHandler.requestPayment(detail,amount);

        if(paymentSucess){
            return true;
        }
        return false
    }
}
class PaymentHandler{
    requestPayment(details,amount){
        if(detail.mode == 'PAYPAL') //can easily add other payment 
           return PayPalAPI.requestPayment(detail,amount);
        return false
    }
}

//interface segregation
bird, penguin cant inhert bird properties bcox it cant fly .so don force fun which is not needed 
}*/
