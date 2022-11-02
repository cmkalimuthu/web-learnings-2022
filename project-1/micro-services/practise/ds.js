/*
//stack using array
//LIFO behaviour (callStack,browserHistory)
class Stack{
    constructor(){
        this.items=[]
    }
    push(e){
        this.items.push(e);
        return e;
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1]
    }
    size(){
        return this.items.length
    }
    isEmpty(){
        return this.items.length == 0
    }
    print(){
        console.log(this.items.toString())
    }
}

const s1=new Stack();
console.log(s1.isEmpty())
console.log(s1.push(1))
s1.push(10)
s1.push(20)
s1.push(30)
s1.print()
console.log(s1.peek())
console.log(s1.size())
console.log(s1.pop())
s1.print()

//queue using array
//FIFO behaviour
class Queue{
    constructor(){
        this.items=[]
    }
    enQueue(e){
        return this.items.push(e)
    }
    deQueue(){
        return this.items.shift()
    }
    peek(){
        return this.items[0]
    }
    isEmpty(){
        return this.items.length === 0
    }
    print(){
        console.log(this.items.toString())
    }
    size(){
        return this.items.length
    }
}

const q1=new Queue();
console.log(q1.isEmpty())
console.log(q1.enQueue(1))
q1.enQueue(10)
q1.enQueue(20)
q1.enQueue(30)
q1.print()
console.log(q1.peek())
console.log(q1.size())
console.log(q1.deQueue())
q1.print()


//stack using objects
class Queue{
    constructor(){
        this.items={};
        this.front=0;
        this.rear=0;
    }
    enQueue(e){
         this.items[this.rear]=e;
         this.rear++;
         return e;
    }
    deQueue(){
        let front=this.items[this.front];
        delete this.items[this.front]
        this.front++;
        return front;
    }
    peek(){
        return this.items[this.front]
    }
    isEmpty(){
        return Object.getOwnPropertyNames(this.items).length === 0
    }
    print(){
        for(let v in this.items)
        console.log(this.items[v])
    }
    size(){
        return Object.getOwnPropertyNames(this.items).length
    }
}

const q1=new Queue()
q1.enQueue(1);
q1.enQueue(2);
q1.enQueue(3);
q1.enQueue(4);
q1.print()
q1.deQueue()
q1.print()
console.log(q1.size())
console.log(q1.isEmpty())



//circular queue has fixed capacity .front and rear initial -1. %capacity ,isFull ,isEmpty before insertion and deletion

//linkedlist (sequential data structure)
//insertion and deletion at front and rearO(1)
//contains nodes .delete /insert at end is O(n)
//reverse is also O(n)

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    //add at front
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.size++;
        }else{
            node.next=this.head;
            this.head=node;
            this.size++;
        }
        return value;
    }
    
    append(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.size++;
        }else{
            let cur=this.head;
            while(cur.next){
            cur=cur.next;
        }
        cur.next=node;
        this.size++;
        }
        return value;
    }
    
    print(){
        let cur=this.head;
        let str=" "
        while(cur){
            str+=cur.value+" => ";
            cur=cur.next;
        }
        return str;
    }
    insert(value,index){
        if(this.isEmpty()) this.append(value);
        else{
            const node=new Node(value)
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
            node.next=prev.next;
            prev.next=node;
            this.size++;
        }
        return;
    }
    
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    remove(index){
        if(index<0 && index>= this.size) return;
        let removedNode;
        if(index==0){
            removedNode=this.head;
            this.head=removedNode.next;

        }else{
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next;
            prev.next=removedNode.next
        }
        this.size--;
        return;
        
    }
}
const link1=new LinkedList();
link1.prepend(1)
link1.prepend(2)
link1.prepend(3)
link1.prepend(4)
link1.append(0)
console.log(link1.print())
link1.insert(2.5,2)
console.log(link1.print())
link1.remove(2)//index
console.log(link1.print())

//doubly linked prev,next,value in node and can have tail as last node
//easy to reverse .insertion and del at both end is O(1)


//hash table same like objects but has no inbuild fn conflicts
//constant insertion and lookup time
class HashTable{
    constructor(size){
    this.table=new Array(size);
    this.size=size;
    }
    
    hash(key){
       let total=0;
       for(let i=0;i<key.length;i++){
           total+=key.charCodeAt(i)
           console.log(total)
       }
       return total%this.size;
    }
    
    set(key,value){
    let index=this.hash(key);
    let bucket=this.table[index]
    if(!bucket){
        this.table[index]=[[key,value]]
    }else{
        const sameItem=this.table[index].find(item=>item[0]===key)
        if(sameItem){
            sameItem[1]=value;
        }else{
            bucket.push([key,value])
        }
    }
    }
    
    get(key){
        let index=this.hash(key);
        let bucket=this.table[index]
        if(bucket){
            const sameItem=this.table[index].find(item=>item[0]===key)
            console.log(sameItem)
            return sameItem[1]
        }
        return undefined;
    }
}
const hash1=new HashTable(50);
// hash1.set(1,"one")
// hash1.set(1,"two")
hash1.set("202","two")
console.log(hash1.get("202"))

BTS
class BTS{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root == null;
    }
    insert(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.root=node;
        }else{
            this.insertNode(this.root,node)
        }
        //console.log(this.root)
    }
    
    insertNode(root,node){
        if(node.value < root.value){
           if(root.left == null){
               root.left=node;
           }else{
               this.insertNode(root.left,node)
           } 
        }else{
            if(root.right == null){
               root.right=node;
           }else{
               this.insertNode(root.right,node)
           } 
        }
        
    }
    
    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value == value){
            return true;
            }else if(root.value > value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }   
        }
    }
    
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.min(root.right)
        }
    }
    
    preOrder(root){
        if(root){
            console.log(root.value+'\n');
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    
     postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
}


const b1=new BTS()
b1.insert(10);
b1.insert(17);
b1.insert(8);
b1.insert(7);
b1.insert(2);
b1.preOrder(b1.root)
console.log(b1.search(b1.root,7))
console.log(b1.max(b1.root))
console.log(b1.root)
*/