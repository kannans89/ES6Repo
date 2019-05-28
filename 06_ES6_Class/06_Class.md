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
