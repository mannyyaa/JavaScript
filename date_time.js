//DATE IS A OBJECT DT!!!

let mydate=new Date()
console.log(mydate) //2026-06-23T14:58:44.609Z
console.log(mydate.toString()) //Tue Jun 23 2026 20:43:44 GMT+0545 (Nepal Time)
console.log(mydate.toDateString()) //Tue Jun 23 2026
console.log(mydate.toLocaleString()) //6/23/2026, 8:44:49 PM

let createdDate= new Date(2026,0,7) //months start from 0... (2026,0,7,5,3)-->5:03am
console.log(createdDate.toDateString)

//----TIMESTAMP----

let timestamp= Date.now() //gives op in MILLISECOND
//to convert in second:-
console.log(Math.floor(Date.now()/1000)) //!!!! chota value gets compared.

//----to get specific month year etc use function like .getMonth ect.----

//-----CUSTOMIZE LOCALE STRING PROPERTY----

let newDate= new Date()
newDate.toLocaleString('default', {
    weekday: "narrow"
    //etc
})

console.log(newDate.toLocaleString())