# Reflect API

<!-- https://www.quora.com/What-is-metaprogramming
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming
 -->
Proxy and Reflect APIs in ES6 allows  to write programs that manipulate programs.This is also known as meta-programming.For example if a function which is already written by a third party programmer ,but you want to add custom validation without modifying the actual code,we need to use meta programming techniques.

Reflect API provides global `Reflect` object which has static methods.Reflection is used by automation testing frameworks to examine,introspect program at runtime.

<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect -->

|Sr.No |  Name    | Description|
|:----:|:----------|:-------|
|1|Reflect.apply() |Calls a target function with arguments as specified by the args parameter
|2|Reflect.construct() | The new operator as a function
|3|Reflect.get() |A function that returns the value of properties.
|4|Reflect.set() | A function that assigns values to properties. Returns a Boolean that is true if the update was successful.
|5|Reflect.has() | The in operator as function. Returns a boolean indicating whether an own or inherited property exists.

## Example 1 : Reflect.apply

```html
<script>
       const areaOfRectangle = function(width,height){
           return `area is ${width*height} ${this.units}`
       }
      const thisValue = {
          units:'Centimeters'
      }
     const argsList = [10,20]
     const result = Reflect.apply(areaOfRectangle,thisValue,argsList)

     console.log(result)
</script>


```

output is shown below

```html
area is 200 Centimeters
```

## Example 2 : Reflect.construct

In the example we crated a class Student with a property `fullName`.The constructor of class takes firstName and lastName.We are creating object of class Student using reflection as shown below.

```html
 <script>
      class Student{
          constructor(firstName,lastName){
              this.firstName = firstName
              this.lastName = lastName
          }

          get fullName(){
              return `${this.firstName} : ${this.lastName}`
          }
      }

     const args = ['Mohammad','Mohtashim']
     const s1 = Reflect.construct(Student,args)
     console.log(s1.fullName)
    </script>

```

output is

```html
Mohammad : Mohtashim

```

## Example 3 : Reflect.get

```html
 <script>
      class Student{
          constructor(firstName,lastName){
              this.firstName = firstName
              this.lastName = lastName
          }

          get fullName(){
              return `${this.firstName} : ${this.lastName}`
          }
      }
    
     const args = ['Tutorials','Point']
     const s1 = Reflect.construct(Student,args)
    console.log('fullname is ',Reflect.get(s1,'fullName'))
    console.log('firstName is ',Reflect.get(s1,'firstName'))
    
    
    </script>

```

output is :

```html
fullname is  Tutorials : Point
firstName is  Tutorials

```

## Example 4 : Reflect.set


```html
 <script>
      class Student{
          constructor(firstName,lastName){
              this.firstName = firstName
              this.lastName = lastName
          }

          get fullName(){
              return `${this.firstName} : ${this.lastName}`
          }
      }
    
     const args = ['Tutorials','']
     const s1 = Reflect.construct(Student,args)
    console.log('fullname is ',Reflect.get(s1,'fullName'))
   //setting value
    Reflect.set(s1,'lastName','Point')
    console.log('fullname is ',Reflect.get(s1,'fullName'))
    
    </script>


```

ouput: 

```html
fullname is  Tutorials :
fullname is  Tutorials : Point

```

## Example 5 : Reflect.has


```html
 <script>
      class Student{
          constructor(firstName,lastName){
              this.firstName = firstName
              this.lastName = lastName
          }

          get fullName(){
              return `${this.firstName} : ${this.lastName}`
          }
      }
     const args = ['Tutorials','Point']
     const s1 = Reflect.construct(Student,args)
     console.log(Reflect.has(s1,'fullName'))
     console.log(Reflect.has(s1,'firstName'))
     console.log(Reflect.has(s1,'lastname'))
</script>
```

ouput is 

```js
true
true
false
```

