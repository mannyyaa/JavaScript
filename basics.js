"use strict" //treats all js code as newer version


console.log(3+3); console.log("hello") //wont give error but ; hatado toh will give
//better to use diff line as READABILITY MATTERS.

//tc39 && mdn for js documentation u can check

let name="manya"
var id=332 //var is not preffered due to prb in block of codes.. scope. use LET only.

//null datatype is OBJECT... if u use typeof for null it gives object!!
//more datatypes: string, undefined(works when bas let name; krke left), boolean, symbol(uniqueness)

console.log(typeof null) //object
console.log(typeof undefined) //undefined

//----CONVERSION---------

let score="33abc"

console.log(typeof score) //gives string

let valueinNum=Number(score) //convert kardiya into number (captial N)
console.log(typeof valueinNum) //abb number aayega
console.log(valueinNum) //but since "33abc" tha so it give NaN (Not A Number)

//similarly boolean me covert kre toh:-

//"" -> false, 1->true, 0->false, "manya"->true

//STRING hojayega convert, 33-> typeof bhi string aur print krwane pe bhi 33

//-----OPERATIONS--------

console.log(+true) //gives 1
console.log(+"") //gives 0 (coverts false to 0)

console.log(1+"2") //12
console.log("1"+2+2) //122 //yaha aage str toh pura hi as str
console.log(1+2+"2") //32 !!! (rule: jo aage datatype hoga usme hi convert kiya jayega, yaha aage int tha)

++num, num++ //prefix, postfix

//-------COMPARISONS----------

console.log("2">1) //true as str gets converted auto
console.log("02">1) //same

console.log(null>0) //false
console.log(null==0)//false //equality op is diff than comparison **
console.log(null>=0) //true (comparison op. connvert null to num thatswhy)

//undefined gives false for both == and >,< comp. op

//=== : STRICT CHECKS. (checks datatype as well) ("2"===2 me false)