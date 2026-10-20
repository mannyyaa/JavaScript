//this is used to refer to the current object(curr context) in which it is used. bas obj ke andar ko 
const user={
    username:"manya",
    price:100,

    welcomeuser:function(){
        console.log(`hello ${this.username} your price is ${this.price}`)
    }
}

user.welcomeuser() //hello manya your price is 100

//context change krenge toh op bhi change
user.username="sammy"
user.welcomeuser() //hello sammy your price is 100

//if we print this outside obj like
console.log(this) //op: {} empty object coz it is not inside any obj so it will print empty object
//but in browser it will print window object coz it is inside window object. so this is context dependent.

//-----------

//using this in function:
function myfun(){
    username="manya"
    console.log(this.username) //undefined coz this is not inside any obj so it will print undefined
}

myfun() //fun me kaam nhi karta this

//-------------ARROW FUNCTION----------------

const chai= () => {
            let username="manya"
            console.log(this.username)
}
chai()
 //diff between arrow and normal function is that arrow function doesn't have its own this, it takes this from its surrounding context.
 
 //implicit return:-
const addtwonumber=(num1,num2) => num1+num2 //if only 1 line of code then no need to use {} and return keyword
//can also use () then "return" nhi use krna padega 
//ex;-
const addtwonumber=(num1,num2) => (num1+num2)
const addtwo=(num1,num2) => ({username:"manya"}) //manya is its return value as inside ()





