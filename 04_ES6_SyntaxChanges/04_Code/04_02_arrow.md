# ES6 Syntax Changes

## Arrow Functions

### ES5 and Anonymous functions

Javascript makes heavy use of anonymous functions.They are functions which will be run by somebody else later on based on an event or some other conditions.For example let see how  anonymous function is used with `map` function of array and `setTimeout` function.

### Example 1 : map function

In the given example we are iterating across each element using `map` function. So the map function takes another `callback` anonymous function.This function will be called back when an element is found inside the array.This function takes `element` and `index`

```html

 <script>
      const names = ['TutorialsPoint','Mohtashim','Bhargavi','Raja']
        names.map(function(element,index){
           console.log('inside anonymous function')
            console.log('index is '+index+' element value is :'+element)
        })

</script>

```

the output is shown below

```html
inside anonymous function
index is 0 element value is :TutorialsPoint
inside anonymous function
index is 1 element value is :Mohtashim
inside anonymous function
index is 2 element value is :Bhargavi
inside anonymous function
index is 3 element value is :Raja
```

### Example 2 : setTimeout function

The setTimeout function allows takes an anonymous function and it will invoke that function after a specific time .Example shows after 1 second the string message in `console.log` is displayed

```html
<script>
 setTimeout(function(){
          console.log('Learning at TutorialsPoint is fun!!')
        },1000)
</script>

```

output is shown after 1 second

```html
Learning at TutorialsPoint is fun!!
```

## Arrow Function Syntax

Arrow functions are short hand syntax for using anonymous functions. The syntax of arrow function is `()=> { //some statements }`  or `()=>returnValue` or `(param1,param2)=>{//some statement}`

### Example 1 : map and arrow function

In the given example we will replace anonymous function discussed above with arrow function

```html

 <script>
      const names = ['TutorialsPoint','Mohtashim','Bhargavi','Raja']
        names.map((element,index)=>{
           console.log('inside arrow function')
            console.log('index is '+index+' element value is :'+element)
        })

</script>

```

the output is shown below

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

### Example 3 : setTimeout and arrow function

In this example let us replace anonymous function discussed above with arrow function.

```html
<script>
 setTimeout(()=>{
          console.log('Learning at TutorialsPoint is fun!!')
        },1000)
</script>

```

output is shown after 1 second

```html
Learning at TutorialsPoint is fun!!
```


### Example 4

In this case let us see how to declare anonymous functions using arrow function. Two functions `add` ad `isEven` declared and invoked as shown below.

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

output is shown below

```html
30
true

```

## Arrow function and this

Inside an arrow function if we use `this` pointer , it will point to the enclosing lexical scope.This means arrow functions does not create a new `this pointer` instance whenever it is invoked.Arrow functions  makes use of its enclosing scope.To understand this let us see an example given below.

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

