var c=300 

if(true){
    const a=10
    let b=20
    var c=30 //variable declared with var is function scoped, so it will be accessible outside the block
    console.log("inner: ",a)
}

console.log(a) //error because a is block scoped
console.log(b) //same
console.log(c) //op: 30 because var is function scoped, so it will be accessible outside the block but not 300 because it is redefined inside the block. so it will take the value of inner block.

//-------

const addtwo=function(num1,num2){
    return num1+num2
} //diff way of writing a fun

//difference is tat function is hoisted and can be called before declaration but const function cannot be called before declaration 
// because it is not hoisted. so it will give error if called before declaration.

