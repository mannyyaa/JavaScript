//immediately invoked function expression (IIFE)
//it is a function that runs as soon as it is defined

//global scope ke pollution se kahi baar prb hoti hai so uss global scope ke variables/declaration
//  ke pollution ko hatane k liye we use IIFE.


//NAMES IIFE
(function(){
        console.log("hello world")
})();
 //in iife semicolon is must. isko nhi pata rehta kaha rukna hai

 //PARAMETERIZED IIFE, unnamed.
 ((name)=>{
        console.log(`hello ${name}`)
 })("sachin")   