/*There are two categories of data types:

1)Primitive: These are call-by-value.
 The types of primitive data types include:-
  String, Number, Boolean, Null, Undefined, Symbol, and BigInt. (bigint me 12343n last me n)
  
  #Note that Symbols uniquely identify variables, even if two variables have the same data and data type.
  #null datatype is object, bigint is undefined (typeof)


  2) Non-primitive: These are call-by-reference.
   The types of non-primitive data types are  
    1. Array ( [ ] )
    2. Object ( { } )
    3. Function ( function( ){ } )

    The data type for these is 'object,' but for functions, they return a data type of 'function,'
     though they also have an object data type.

      Function -> Example:

      function greet(name) {
            console.log("Hello, " + name + "!");
        }

----------------------------

Stack--> primitive
heap--> non-primitve

-------------------------------
*/
