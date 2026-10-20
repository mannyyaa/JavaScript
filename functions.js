function saymyname(){ //function defination
    console.log("manya")
}

saymyname() //function call, refernece

function addtwonumber(number1, number2){ //parameters
    console.log(number1 + number2)
}

const result= addtwonumber(5,6) //can store in variable asw
console.log(result) //undefined because function doesn't return anything

//console doesnt means it returns anything, it just prints in console. so if we want to return something we have to use return keyword

function addtwonumber(number1, number2){ //now it will return the value
    return number1 + number2
}

addtwonumber(10,"a") //dataypes ko bhi krste hai will give 10a

function loggedinmessage(username){
    if(username===undefined){
        return "please enter username"
    }
    return `hello ${username} you are logged in` 
}

console.log(loggedinmessage("manya")) 
console.log(loggedinmessage()) //undefined because no username is passed

//else u can use default parameter value asw like function loggedinmessage(username="sam"){ yeh sam return krega if nth is passed.

//--------------------------------------------

function calculatecartprice(...prices){ //rest operator, it will take all the values in array
    return prices
}

console.log(calculatecartprice(20,30,40,50)) //op: [ 20, 30, 40, 50 ]

//if fun calc(val1,val2, ...prices) then it will take first 2 values in cal1 and val2 and rest in prices array
console.log(calculatecartprice(20,30,40,50)) //return prices op me array me 40,50 ayega bas VVI

//-------------

const user={
    username:"manya",
    price=100
}

function handleobject(anyobject){ //passing object
    console.log(`hello ${anyobject.username} your price is ${anyobject.price}`)
}

handleobject(user) //hello manya your price is 100

//similarly array can also be passed and u can access indices asw. like anyarray[0] etc







