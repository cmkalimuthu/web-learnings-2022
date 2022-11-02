/*javascript concept examples
------------------------------

//closure example
//use places module design pattern,once function(only execute once),memoize,timeouts,iterators

function closure(){
  let a=10;
  function innerClose(){
    console.log("value of a "+a);
  }
  innerClose();
  
}
closure();

//closure with currying example

function closure(a){
  return (b)=>{
    console.log(`multiplication of a and b is ${a*b}`)
  }
}

const closureCall=closure(10);
closureCall(2)
closureCall(3)



//Higher order functions

//like map,reduce,filter are taking function as parameter .it makes code reusablity
function area(r) {
  return Math.floor(Math.PI * r * r);
}
function circumstance(r) {
  return 2 * Math.PI * r;
}
function diameter(r) {
  return 2 * r;
}
function calculate(arr, logic) {
  const resp = [];
  for (let i = 0; i < arr.length; i++) {
    resp.push(logic(arr[i]));
  }
  return resp;
}
const arr = [2, 3, 4];
const areaAns = calculate(arr, area);
console.log(areaAns);



//callbacks to handle async calls 
console.log("purchase begins")

const api = {
  createOrder: (cart, callback) => {
    const orderResp = [];
    return setTimeout(() => {
      orderResp.push({
        orderId: Math.round(Math.random() * 100),
        items: cart,
        price: cart.length * 100,
      });
      callback(orderResp);
    }, 1000 * 1);
  },
  proceedPay: (order, callback) => {
    const paymentResp = [];
    return setTimeout(() => {
      paymentResp.push({
        paymentId: 1,
        type: "UPI",
        billedItems: order[0].items,
        totalPrice: order[0].price,
      });
      callback(paymentResp);
    }, 1000 * 2);
  },
};

const cart = ["shoe", "shirt"];
api.createOrder(cart, (order) => {
  api.proceedPay(order, (payment) => {
    console.log(`Payment Details ${JSON.stringify(payment)}`);
  });
});

console.log("purchase Details")


//sync without callbacks delay in response from api so it wont and returns error
console.log("purchase begins");

const api = {
  createOrder: (cart, callback) => {
    const orderResp = [];
    return setTimeout(() => {
      orderResp.push({
        orderId: Math.round(Math.random() * 100),
        items: cart,
        price: cart.length * 100,
      });
      return orderResp;
    }, 1000 * 1);
  },
  proceedPay: (order, callback) => {
    const paymentResp = [];
    return setTimeout(() => {
      paymentResp.push({
        paymentId: 1,
        type: "UPI",
        billedItems: order[0].items,
        totalPrice: order[0].price,
      });
      return paymentResp;
    }, 1000 * 2);
  },
};

const cart = ["shoe", "shirt"];
const order = api.createOrder(cart);
const payment = api.proceedPay(order);
console.log(`Payment Details ${payment}`);
console.log("purchase ends");


// async/await with same example to avoid callback hell and code redablity.await halts code execution.sugar coating as sync
console.log("purchase begins");
const api = {
  createOrder: async (cart, callback) => {
    return new Promise((resolve, reject) => {
      const orderResp = [];
      return setTimeout(() => {
        orderResp.push({
          orderId: Math.round(Math.random() * 100),
          items: cart,
          price: cart.length * 100,
        });
        resolve(orderResp);
      }, 1000 * 1);
    });
  },
  proceedPay: async (order, callback) => {
    return new Promise((resolve, reject) => {
      const paymentResp = [];
      return setTimeout(() => {
        paymentResp.push({
          paymentId: 1,
          type: "UPI",
          billedItems: order[0].items,
          totalPrice: order[0].price,
        });
        resolve(paymentResp);
      }, 1000 * 2);
    });
  },
};

async function shoppingCart() {
  const cart = ["shoe", "shirt"];
  const order = await api.createOrder(cart);
  const payment = await api.proceedPay(order);
  console.log(`Payment Details ${JSON.stringify(payment)}`);
  console.log("purchase ends");
}
shoppingCart();

// bind, apply, call methods
const person={
  fullname:function(){
    console.log(`${this.fname} ${this.lastname}`)
  }
}
const address={
  fullAddress:function(street,city){
    console.log(`${this.fname} ${this.lastname} current address is ${street} ${city}`)
  }
}
const employee={fname:"kali",lastname:"muthu"}
const e1=person.fullname.call(employee) //for single parameter /separate
const a1=address.fullAddress.apply(employee,["anna nagar","madurai"]) //for array of parameters
const a2=address.fullAddress.bind(employee,"anna nagar","madurai") //bounds this to the object
a2()

//prototypial inheritance.one object can use properties of another object
const obj1 = {
  name: "kali",
  age: "23",
  display: function () {
    console.log(`Name is ${this.name} Age is ${this.age}`);
  },
};

const obj2={name:"kumar",age:"27"}
obj2.__proto__=obj1

obj2.display()

class Person{
  constructor(name,age){
    this.name=name;
    this.age=age
  }

  get namec(){
    return this.name
  }

  set namec(name){
    this.name=name;
  }

  details(){
    return `Name is ${this.name} and age is ${this.age} `
  }
}

class Employee extends Person{
  constructor(name,age){
    super(name,age)
  }

  getFullAddress(city,state){
    console.log(`${super.details()} and address is ${city} ${state}`)
  }
}

const p1=new Person("kali",23)
console.log(p1)
p1.namec="palani"
console.log(p1)
const e1=new Employee("palani",27)
e1.getFullAddress("madurai","TN") // same as bind or prototypal inheritance

encapsulation in js
function Person(fname,lname){
let fullname=fname;
let lastname=lname;
this.getFullname=function(){
  return fullname+lastname
}
}
const p1=new Person("kali","muthu");
console.log(p1.getFullname())
console.log(p1.firstname)

//fetch
const url = "https://jsonplaceholder.typicode.com/todos";
const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "content-type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify({
    a: 10,
    b: 20,
  },
  Authorization: `token ${token}),
};

fetch(url, options)
  .then((resp) => {
    resp.json();
  })
  .then((data) => {
    console.log("data");
  });

  //axios
  const data={a:10,b:20}
  // axios({
  //   url:url,
  //   method:"POST",
  //   hedaers:{
  //     Accept:"application/json",
  //     "Content-Type":"application/json;charset=UTF-8"
  //   },
  //   data:{a:10,b:20},
  //   timeout:4000
  // })
  axios.post(url,data,{headers:{ Accept: "application/json",
  "content-type": "application/json;charset=UTF-8"}}).then(resp=>{
    console.log(data)
  })
  */
