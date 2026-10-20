//var and const

//var has a global scope. ex:-
if (score>100){
    const power=1000 //if yaha var power hota...
    console.log(power)
}
console.log(power) //here const/let will give error as power is outside the scope
//BUT var will print it outside scope also !!!!! -------not a good thing, error dena was better as safe rheta 

//------

// &&, || same as cpp

//switch also same

//---------

//truthy and falsy value:-

//FALSY:-
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//except all falsy sab truthy haiiii

//basically jo assume krle true hai ki val true hai thats truthy
//ex:-

const user="manya" //[] empty arr is also truthy !!

if(user) console.log("truthy") //yeh assumed user is true so printed.

//"0", 'false', " ", [], {}, function(){} ---------> truthy!!

//----------

//how to check if arr/obj is empty:-
const userEmail=[]
if(userEmail.length === 0) console.log('is empty') //lenght fun call krke only. u cant check arr is empty directly.

//-----------

//some facts:-
//false == 0
//false == " "
//0 == " "   VVI

//-----------

//NULLISH COALSCING OPERATOR (??): only made for null undefined

let val
val= 5 ?? 10 //gives 5
val= null ?? 15 //gives 15
val=undefined ?? 25 //gives 25
val= null ?? 10 ?? 20 //gives 10

//basically this operator chooses 1st if dono val hai but agar ek null/undef dediya it will prefer choosing the value

//ternary (?) same as cpp.
