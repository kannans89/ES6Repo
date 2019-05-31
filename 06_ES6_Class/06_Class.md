# Class

<!-- reference form mozilla docs mdn classes -->
The class syntax introduced in ES6 does not introduce inheritance based object oriented programming model  .It is just a syntactic sugar ,which means classes are special functions behind the scene and they make use of prototype based inheritance available in earlier version of javascript.

## ES5 :Prototype based syntax

To understand classes let us see how javascript uses prototypes to share data across multiple objects.

```html

 <script>
     //ES5 syntax

     function Student(rollno,firstName,lastName){

         this.firstName = firstName
         this.lastName = lastName
         this.rollno = rollno
     }
     Student.prototype.fullName = function(){
         return this.firstName+ " :" + this.lastName
     }

     let s1 = new Student(101,'Mohammed','Mohtashim')
     console.log(s1.fullName())

     let s2 = new Student(102,'John','Doe')
     console.log(s2.fullName())
    </script>

```

output is shown below

```js
Mohammed :Mohtashim
John :Doe
```

## ES6 : Class Syntax

The above code is converted to class syntax as shown.The class have a constructor which will be called every time an object is created using new keyword.This is more friendly syntax to people coming from object oriented programming languages.

```html

<script>

     class Student {
         constructor(rollno,firstName,lastName){
             this.rollno = rollno
             this.firstName = firstName
             this.lastName = lastName
             console.log('inside constructor')
         }

         fullName(){
             return this.firstName + " - "+this.lastName
         }
     }
     let s1 = new Student(101,'Mohammed','Mohtashim')
     console.log(s1.fullName())

     let s2 = new Student(102,'John','Doe')
     console.log(s2.fullName())
</script>

```

output is shown below

```js
inside constructor
Mohammed - Mohtashim
inside constructor
John - Doe

```

## Setter and Getters

Setters and getters help to encapsulate or protect data with in a class.To protect data in object oriented programming languages uses `private` variables. Since javascript doesn't have that convention , it uses `_variableName` to indicate the variable is private.


```html
 <script>
     
     //setter and getter

     class Student {
         constructor(rollno,firstName,lastName){
             //private variables convention
             this._rollno = rollno
             this._firstName = firstName
             this._lastName = lastName
             console.log('inside constructor')
         }

         get fullName(){
              console.log('inside getter')
             return this._firstName + " - "+this._lastName
         }
         set rollno(newRollno){
             console.log("inside setter")
             this._rollno = newRollno
         }
     }
     
     let s1 = new Student(101,'Sachin','Tendulkar')
     console.log(s1)
     //getter is called
     console.log(s1.fullName)
     //setter is called
     s1.rollno = 201
     console.log(s1)
     
    </script>

```

output is shown below

```js
inside constructor
Student {_rollno: 101, _firstName: "Sachin", _lastName: "Tendulkar"}
inside getter
Sachin - Tendulkar
inside setter
Student {_rollno: 201, _firstName: "Sachin", _lastName: "Tendulkar"}


```


## Static class

Static class can be used when we don't want to instantiate a class as the class doesn't have any object attributes with it.For example we create a class MathOperations


```html
<script>
     
     //static class

     class MathOperations {

         static cubeEven(no){
             if(MathOperations.isEven(no))
             return no*no*no
             else throw "NOT_EVEN_NO"

 
         }

         static isEven(no){
              return (no%2==0)
         }

         static round(no){
             let decimalPoint = no%1;

             if(decimalPoint>=.5)
             return no+(1-decimalPoint)
             else
                return no-decimalPoint;
         }
     }
    
    console.log(MathOperations.round(10.5))
    console.log(MathOperations.round(10.4))
    console.log(MathOperations.cubeEven(2))
    console.log(MathOperations.isEven(2))

     
    </script>

```

output is shown below

```js
11
10
8
true

```

## Inhteritance

Inheritance adds a parent child relationship between classes.When the child object is created first the parent constructor is invoked and followed by child.To invoke the parent or super class constructor `super` keyword is used as shown in the example below.

```html
 <script>
      class Parent{
          constructor(){
              console.log('Inside parent')
          }

          talk(){
              console.log('parent talks')
          }
      }

      class Child extends Parent{
          constructor(){
              super(); // invoke parent constructor first
              console.log('Inside child')
          }
          read(){
              console.log('child reads')
          }
      }

       let c1 = new Child();
       c1.read();
       c1.talk(); //method of parent class
     
    </script>


```

output is 

```js
Inside parent
Inside child
child reads
parent talks

```