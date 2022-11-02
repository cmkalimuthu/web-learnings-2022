// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
/*
//fibonacci normal way
//each element is sum of its two preveious element
//TC :O(n)  
function fibonacci(n){
    const arr=[0,1];
    for(let i=2;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr;
}
const n=5
console.log("fibonacci of "+n+" is "+fibonacci(10))

//factorial normal way
//factorial of a number is  multiplication of number with product of all its previous numbers
//TC :O(n)
function factorial(n){
    let fact=1;
    for(let i=2;i<=n;i++){
        fact=fact*i
    }
    return fact;
}

const n=5;
console.log("factorial of "+n+" is "+factorial(n));

//prime number normalway
//number should be greater than 2 and divide by only itself
//TC:O(n)
function prime(n){
    if(n<2) return false;
    for(let i=2;i<n;i++){
        if(n%i == 0) return false;
    }
    return true;
}
const n=31;
const primeNum=prime(n)?"prime number":"not a prime number"
console.log(n+" is "+ primeNum);

//very optimal way of prime number
function prime(n){
    if(n<2) return false;
    console.log(Math.sqrt(n))
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i == 0) return false;
    }
    return true;
}
const n=31;
const primeNum=prime(n)?"prime number":"not a prime number"
console.log(n+" is "+ primeNum);

//fibonacci using recursion nth number
//recursion is simplified not means fast
//iterate condition Fn=Fn-1+Fn-2;base :f0=0;f1=1;
//TC : n*2worse than O(n)
function fib(n){
    if(n<2) return n;
    return fib(n-1)+fib(n-2)
}
const n=10
console.log("fibonacci of "+n+" is "+fib(n))
//0 1 1 2 3 5 8 13 21 34 55

//factorial using recursion
//iterate condition n=n*(n-1);base n=0=1
//TC:2*n terrible than O(n)

function fact(n){
    if(n==0) return 1;
    return n*fact(n-1)
}
const n=5;
console.log("factorial of "+n+" is "+fact(n));
*/
//a few algorithms, (e.g. merge sort, quick sort, etc…) result in optimal time complexity using recursion.


//search algo
/*
//linear search
//iterate through all and find the matched target
//TC: O(n)
function linearSearch(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==t) return i
    }
    return -1;
}
const arr=[1,2,3,4,10];
const ans=linearSearch(arr,20)
console.log( ans== -1?"No found":ans)

//binary search 
//divide the search by half .arr should be sorted.if t is greater than mid search right sid else left side of arr
//TC: O(logn)

function binarySearch(arr,t){
    let left=0,right=arr.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]==t) return mid;
        if(t<arr[mid]) right=mid-1;
        else left=mid+1;
        
    }
    return -1;
}
const arr=[1,2,3,4,10];
const ans=binarySearch(arr,10)
console.log( ans== -1?"No found":ans)

//binary search using recursion
//TC:O(log n)
function binarySearch(arr,t){
   return search(arr,t,0,arr.length-1) 
}
function search(arr,t,left,right){
    let mid=Math.floor((left+right)/2);
    if(left>right) return -1
    if(t==arr[mid]) return mid;
    if(t<arr[mid]) return search(arr,t,left,mid-1)
    else return search(arr,t,mid+1,right)
}
const arr=[1,2,3,4,10];
const ans=binarySearch(arr,10)
console.log( ans== -1?"No found":"found at location "+ans)

//quick sort recursion
//pick pivot as lastElem,firstElem,random,medium
//put less than pivot in left else right arr and combine the arr
function quickSort(arr){
    if(arr.length == 1) return arr
    let pivot=arr[arr.length-1];
    let leftArr=[],rightArr=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot) leftArr.push(arr[i])
        else rightArr.push(arr[i])
    }
    if(leftArr.length>0 && rightArr.length>0){
        return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
    }
    if(leftArr.length>0){
        return [...quickSort(leftArr),pivot]
    }else{
        return [pivot,...quickSort(rightArr)]
    }
    
}
const arr=[18,12,20,2,3,4,7,13]
console.log(quickSort(arr))

//merge sort
//split the array till single element and compare and merge to one arr
//TC:nlogn smaller than n2
function mergeSort(arr){
    if(arr.length <2) return arr;
    let left=[],right=[],mid;
    mid=Math.floor(arr.length/2);
    left=arr.slice(0,mid);
    right=arr.slice(mid);
    
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    const sorted=[]
    while(left.length && right.length){
        if(left[0]<right[0]) sorted.push(left.shift())
        else
        sorted.push(right.shift())
    }
    return [...sorted,...left,...right]
}

const arr=[18,12,20,2,3,4,7,13]
console.log(mergeSort(arr))
*/

/*
//tower of hanoi using recursion
function tower(n,from,to,using){
    if(n==1){
        
        console.log(`moving disk 1 ${from} to ${to}`) 
        return;
    }
    tower(n-1,from,using,to)
    console.log("moving "+n+" from "+from+"to "+to)
    tower(n-1,using,to,from)
}
tower(3,'A','C','B')

//cartesion product
const arr=[1,2,3,4]
const arr2=[1,2,3,4]
const c=[]
for(let i=0;i<=arr.length-1;i++){
    for(let j=0;j<=arr2.length-1;j++){
        c.push([arr[i],arr2[j]])
    }
}

console.log(c)
brute-force- all posible ways to find sol(linear search)
greedy- best for current situation (dijkstras,prims,kruskal)
divde-conquer- divide problems into sub and solve those then merge (binary serach,mergesort,quick,towerofhanoi)
dynami-programing- same as divide&conquer use memozitation technique to save sub problm ans use it for main problem(fibonacci,staircase)
backtracking - try one way if no sol then backtrack and try another way
*/



