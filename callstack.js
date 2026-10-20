//3 phases of call stack;-
//gobal execution phase- in 


//2. memory phase- in this phase saare variables and functions are stored in memory collect krke

//ex
let val1=10
let val2=20

function addtwonumber(num1,num2){
    let total=num1+num2
    return total
}
let result1=addtwonumber(val1,val2)
let result2=addtwonumber(100,200)

//here val1=undefined, val2=undefined, addtwonumber=defination, result1=undefined, result2=undefined
//aise store hua hai in memory phase. then in execution phase it will execute the code and assign the values to these variables.

//3. execution phase- in this phase code is executed and values are assigned to variables and functions are called and executed.

//in the above example,
//1. first val1=10, val2=20, addtwonumber=defination, result1=undefined, result2=undefined
//in addtwonumber a new variable env+execution thread is created then,
//2. then addtwonumber(val1,val2) is called and executed and result1=30
//3. then addtwonumber(100,200) is called and executed and result2=300

//similarly line 15 16 me again full function ek NVE+thread bnayega and memory me store hoga and execute hoga. then result2=300

//CALL STACK:-

//call stack is a data structure that keeps track of the function calls in a program.
//STACK jaise kaam karta hai, last in first out(LIFO) principle follow karta hai. 
//check in browser console, it will show the call stack of the functions called in the program.