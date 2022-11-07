// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//console.log("100 coding questions js");
//two empty array comparision always false
/*
let a=[]
let b=[]
console.log(a==b) 
console.log(a===b)

//same array location comparision always true
let a=[]
let b=a
console.log(a==b)
console.log(a===b)

//value comparison of two arr
let a=[20]
let b=[20]
console.log(a[0]==b[0]) //true
console.log(a[0]===b[0]) //true

//spread or destructuring
let a=[1,2,3,4];
console.log(...a) //now separate strings .like rest to console function

//type of NaN is Number
console.log(typeof NaN)

//double minus is plus 10- (-10) =20
console.log(10 - -10)

//set removes duplicates
let setValue=new Set([1,2,3,4,4])
console.log(setValue)

//delete property in object returns true
let ob={name:"kali"}
console.log(delete ob.name)

//string literal
console.log(`${(x=>x) ('i love ')} program`)

//rest
function sumValue(x,y,z){
    return x+y+z
}
console.log(sumValue(...[1,2,3]))

//comparision of string type and percedence of ! === (right to left)
let name="my name is kali"
console.log(!typeof name ==="object") //false
console.log(typeof name ==="object") //false
console.log(typeof name ==="string") //true

//not a number
console.log(isNaN("a")) //true
console.log(isNaN("1")) //false

//object seal to no new modification in obj property
let ob={name:"kali"}
Object.seal(ob)
ob.age=20
ob.name="kali1"
console.log(ob) //name:"kali1"

//remove first ele in arr
let arr=[1,2,3,4]
arr.shift()
console.log(arr) //2,3,4

//remove last ele in arr
let arr=[1,2,3,4]
arr.pop()
console.log(arr) //1,2,3

//odd or even
let a=20;
console.log(a%2 == 0 ?"even":"odd")

//change string true to boolean false
let a="true"
console.log(typeof !a) //false boolean
console.log(typeof !!a) //true boolean

//map & forEach
//map returns arr and forEach returns nothing(existing arr)


//del element is arr returns empty space
let arr=[1,2,3,4]
delete arr[1]
console.log(arr) //1,empty,3,4
console.log(arr.length) //4 sice empty is some space

//merge two arr
let arr1=[1,2,3,4]
let arr2=[5,6,7]
let arr3=[...arr`,...arr2]
//if duplicate it willreturn duplicates
let arr1=[1,2,3,4]
let arr2=[5,6,7,4]
let arr3=[...arr`,...arr2]
console.log(arr3) //1 2 3 4 5 6 7 4

//power of n
console.log(3**3)

/value in setTimeout
let a=10;
setTimeout(()=>{console.log(a)},0)
a=100;
//prints 100

//a and A is different
let a=10
let A=100
console.log(a==A)
//js cant starts with number
let a10="hai"
let 10a="hi"
console.log(10a) //err syntax
//comparing string literal and string
let s="hi"
let l=`hi`
console.log(s===1) //true

//decrementer
let a=1;a1=1
let c=2
console.log(--c === a) //true
console.log(a===a1=== --c) //false (true===1)

//opertors
console.log(3*3) //mul
console.log(3**3) //pow
console.log(3***3) //err

//var before declartion returns undefined
console.log(a);
var a;
//undefined declared but no value
//not defined its never defined

//array nested
console.log([[[[]]]]) //returns nested arr 

//find os name
navigator.platform

//let for returns err since reserved word

//var and let
function show(){
    console.log(a);
    console.log(b)
    var a=10; //undefined
    let b=10 //ref err
}

//let and var in for and timeoit
for(var i=0;i<3;i++)
{
    setTimeout(console.log(i),0) //3,3,3
}
for(let i=0;i<3;i++)
{
    setTimeout(console.log(i),0) //1,2,3
}

//boolean to number
console.log(+true) //1
console.log(typeof +true) //number

console.log(!"anil") //false
console.log(typeof "anil") //string

//obj access
let data="size"
let ob={size:"12"}
console.log(ob[data]) //12
console.log(ob["size"]) //12
console.log(ob.size) //12
console.log(ob.data) //undefined

//obj ref
let c={name:"kali"}
let d;
d=c;
c.name="kumar"
console.log(d.name) //kumar
var x;
var x=10
console.log(x) //10
let x=20
console.log(x) //syntax err

//object and primitive comparison
let a=new Number(10);
let b=10;
console.log(a==b);//true
console.log(a===b) //false

//typo
let name;
nmae={}
console.log(name) //{}

//property in fun
function woof(){
    console.log("woof")
}
woof.name="kal" //no err
woof() //woof

//string and number
function sum(a,b){
    return a+b
}
console.log(sum(1,"2") //12

//inc
let a=0;
console.log(a++) //0
console.log(++a) //2
console.log(a) //2

//rest typeof is object

function typ(...args){
    console.log(typeof args) //object since [] is object
}
typ(20)

//strict
function getAge(){
    'use strict';
    age=10;
    console.log(10) //ref err but normaly var is default
}
getAge()
//eval
let sum=eval('10*10+5')
console.log(sum)//105

//session storage resets when tab is closed 

//hasOwnProperty number and string is same
let ob={1:"1","a":"name"}
console.log(ob.hasOwnProperty(1)) //true
console.log(ob.hasOwnProperty("1")) //true

//obj latest prop replace old
let ob={a:"1",b:"2",a:"3"}
console.log(ob.a)//3 latest

//continue
for(let i=1;i<5;i++) {
    if(i===3) continue;
    console.log(i) //1,2,4
}

//callback
const foo=()=>{console.log("first")}
const bar=()=>{setTimeout (console.log("second"),0)}
const baz=()=>{console.log("third")}
bar()
foo()
baz()
//first,third,second

//event bubling
<div onclick="console.log("first")">
<div onclick="console.log("second")">
<div onclick="console.log("third")">click here</div> 
</div>
</div>
//third,second,first

//obj binding
const ob={name:"kal"}
function sayHello(age){
    return `${this.name} and age is ${age}`
}
console.log(sayHello.call(ob,23)) //kal and age is 23
console.log(sayHello.bind(ob,23)()) // returns function defso use imediate fn

//returns number
function sayHai(){
    return (()=>0)()
}
console.log(typeof sayHai) //number since 0
//returns fun
function sayHai(){
    return (()=>0)
}
console.log(typeof sayHai) //fun since its not called

//typeof typeof 1 is string since typeof number is string

//new location in arr
let arr=[1,2,3]
arr[6]=4
console.log(arr) //1,2,3,empty=3,4


//infinite arr
let arr=[1,2,3]
arr[6]=arr
console.log(arr) //1,2,3,empty=3,arr[]

//everything is primitive or obj in js

console.log(!!"") //false
console.log(!!null) //false
console.log(!!1) //true

//string to arr using destruct
let a="kali"
console.log([...a])

//promise race
const firstPromse=new Promise((res,rej)=>{
    setTimeout(res,500,"one")
})
const secondPromse=new Promise((res,rej)=>{
    setTimeout(res,500,"two")
})
Promise.race([firstPromise,secondPromise]).then(res=>console.log(res)) //two since its finshed first and won the race
//loose ref
let person={name:"kal"}
const mem=[person]
person=null;
console.log(mem) //[{name:"kal"}]

//for in
let person={name:"kal",age:23}
for(const item in person){
    console.log(item ) //name,age since its keys
    console.log(person[item]) //values
}
let val=3+4+"5"
console.log(typeof val) //string
console.log(typeof 3+4+"5") //number75
console.log(typeof (3+4+ +"5")) //12 (7+ (+5))
console.log([]==[]) //false diff mem loc

//call by ref
function getInfo(member){
    member.name="kumar"
}
const person={name:"kali"}
getInfo(person)
console.log(person)//name:"kumar "

function Car(){
    this.make='tata';
    return {make:'kia'}
}
const myCar=new Car();
console.log(myCar.make) //kia

//block level let
(()=>{let x=(y=10)})()
console.log(x)//undefined


/*
//var and let
(()=>let x=y=10)()
console.log(typeof y)//number since y is consider as var since its not declared

//block scope
(()=>{let x=10})()
(()=>{let x=10})()
console.log(x) //undefined
(()=>{let x=y=10})()
(()=>{let x=y=20})()
console.log(y)
let x=10
(()=>{var x=100})()
console.log(x) //100 since var is global
console.log(!true-true)//-1 (0-1)
console.log(true++"10") //11
*/


