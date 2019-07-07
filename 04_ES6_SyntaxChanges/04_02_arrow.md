# ES6 Syntax Changes

## Arrow Functions

### ES5 and Anonymous functions

Javascript makes heavy use of anonymous functions.An anonymous function is a function that does not have a name attached to it. Anonymous functions are used during function callback.The following example illustrates the use of an anonymous function in ES5. 

```html
<script>
 setTimeout(function(){
          console.log('Learning at TutorialsPoint is fun!!')
        },1000)
</script>

```

The above example passes an anonymous function as a parameter to the predefined `setTimeout` function. The `setTimeout` function will callback the anonymous function after 1 second.

The following output is shown after 1 second: 

```html
Learning at TutorialsPoint is fun!!
```

## Arrow Function Syntax

ES6 introduces the concept of arrow function to simplify the usage of anonymous function.There are 3 parts to an arrow function.

- Parameters:An arrow function may optionally have parameters
- The fat arrow notation (=>): It is also called as the goes to operator
- Statements − Represents the function’s instruction set

**Tip** − By convention, the use of a single letter parameter is encouraged for a compact and precise arrow function declaration.

### Syntax
```
//Arrow function that points to a single line of code

()=>some_expression  
 
```
OR

```
//Arrow function that points to a block of code

()=> { //some statements }`  
 
```
OR

```
//Arrow function with parameters

(param1,param2)=>{//some statement}

```

### Illustration 1: Arrow function in ES6

The following example defines two function expressions `add` and `isEven` using arrow function.

```html
<script>

 const add = (n1,n2) => n1+n2
 console.log(add(10,20))

 const isEven = (n1) => {
     if(n1%2 ==0)
     return true;
     else
     return false;

 }

 console.log(isEven(10))


</script>


```

The output is shown below

```html
30
true

```

### Illustration 2 : Array.prototype.map() and arrow function

In the following example an arrow function is passed as a parameter to the  `Array.prototype.map() function`. The `map()` function executes the arrow function for each elemnt in the array. The arrow function in this case, displays each elemnt in the array and its syntax.

```html

 <script>
      const names = ['TutorialsPoint','Mohtashim','Bhargavi','Raja']
        names.map((element,index)=>{
           console.log('inside arrow function')
            console.log('index is '+index+' element value is :'+element)
        })

</script>

```

The output is shown below

```html
inside arrow function
index is 0 element value is :TutorialsPoint
inside arrow function
index is 1 element value is :Mohtashim
inside arrow function
index is 2 element value is :Bhargavi
inside arrow function
index is 3 element value is :Raja
```

### Illustration 3 : window.setTimeout() and arrow function

The following example passes an arrow function as a parameter to the predefined `setTimeout` function. The `setTimeout` function will callback the arrow function after 1 second.

```html
<script>
 setTimeout(()=>{
          console.log('Learning at TutorialsPoint is fun!!')
        },1000)
</script>

```

The following output is shown after 1 second

```html
Learning at TutorialsPoint is fun!!
```


## Arrow function and this

Inside an arrow function if we use the `this` pointer , it will point to the enclosing lexical scope.This means arrow functions do not create a new `this pointer` instance whenever it is invoked.Arrow functions  makes use of its enclosing scope.To understand this let us see an example given below.

```html
    <script>
          //constructor function

        function Student(rollno,firstName,lastName) {
            this.rollno = rollno;
            this.firstName = firstName;
            this.lastName = lastName;

            this.fullNameUsingAnonymous = function(){
                  setTimeout(function(){

                      //creates a new instance of this ,hides outer scope of this
                      console.log(this.firstName+ " "+this.lastName)
                  },2000)
            }

            this.fullNameUsingArrow = function(){
                  setTimeout(()=>{
                      //uses this instance of outer scope
                      console.log(this.firstName+ " "+this.lastName)
                  },3000)
            }


        }
        const s1 = new Student(101,'Mohammad','Mohtashim')
        s1.fullNameUsingAnonymous();
        s1.fullNameUsingArrow();

    </script>


```

When anonymous function is used with `setTimeout` , after 2000 milliseconds
function get invoked.A new instance of `this` is created and it shadows the instance of student.So when we display `this.firstName` and `this.lastName` both will be `undefined`.It doesn't use the lexical scope or the context of current execution. This can be solved using arrow function.

output is shown below

```html
undefined undefined
Mohammad Mohtashim

```

