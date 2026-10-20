//OBJECTS can be declared by 2 types:-
//1. literal... 2.constructor

//SINGLETON:- jabhi constructor se banao toh singleton obj banta hai

Object.create //constructor method

const mySym=Symbol("mykey1")
//object literals
const JsUser={
    name: "Manya",
    age: 18,
    location: "nepal",
    isLoggedin:false,
    lastLogin:["Monday","tuesday"],
    [mySym]:"key1" //syntax of symbol VVI []
}

console.log(JsUser.name) //dont prefer using this
console.log(JsUser["name"]) //" " ke andar coz object ke andar "name" string ki tarah track horha hai
console.log(JsUser[mySym]) //doesnt clash w string 

JsUser.email="manya@google.com"
//Object.freeze(JsUser) //locks. abb koi val change nhi krskta

JsUser.greeting=function(){
    console.log(`hi JS user, ${this.name}`);
}

console.log(JsUser.greeting()); //if freezed hai it wont print

//If you get "undefined", it's because the function doesn't return anything
//  — console.log(obj.greet()) prints the return value, and no return means undefined.

//--------------------------------------

//CONSTRUCTOR METHOD :-

//const tinderUser=new Object(); -------> singleton
const tinderUser={}

tinderUser.id=1234
tinderUser.name="sammy"
console.log(tinderUser)

//obj inside obj

const newUser={
    email:"manya@123",
    fullname: {
        userfullname:{
            firstname:"manya",
            lastname:"agr"
        }
    }
}

console.log(newUser.fullname?.userfullname) // ? dalne me denotes agar fullname h toh hi print kro

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={5:"a", 6:"b"}

const obj4=Object.assign({},obj1,obj2,obj3) //combines all
//assign(target,source) is syntax thatwhy use {} warna (obj1,obj2) directly me sab chnages obj1 me hojate hai

//better way:-

const obj5={...obj1,...obj2} //spread same as array

//array inside obj

const users=[
    {
        id:1,
        email:"mnij@gmIL"
    },
     {
        id:1,
        email:"mnij@gmIL"
    },
     {
        id:1,
        email:"mnij@gmIL"
    }
]

users[1].email
console.log(users[1].email)

console.log(Object.keys(newUser)) //VVI further. can access values asw.