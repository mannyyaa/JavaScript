const name="manya"
const repo=10

//console.log(name+repo+"value") --> instead of this use `
console.log(`hello my name is ${name} and my repocount is ${repo}`); //backtrix ` is used. readable method.
//known as string-inter-collision !!!
//can do things on the gp asw

console.log(name[0]) //access char
console.log(name.__proto__) //To access diff prototypes
//ex:-
console.log(name.length) 
console.log(name.indexOf('m')) //charAt(0)

//to know more protos just go in console of inspect and all are mentioned there

const newstr=name.substring(0,4)
console.log(newstr)
const newstr2=name.slice(-8,4) //diff is slice uses -ve asw
console.log(newstr2)

const newname="       manya    " //unnece spaces
console.log(newname.trim()) //removes useless spaces

//.includes("girl")
//.replace("20", "--") replace 20 w -