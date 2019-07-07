# Reflect API

 #@ ES6 Meta programming

ES6 introduces new features around meta-programming. Meta programming involves inspecting or modifying the structure of the program, or changing the way things work in the language itself.

Following are the three forms of meta programming:
a. Introspection : Introspection means a program gathering information about itself.Some examples of Javascript operators that are used for introspection are typeof,instanceof etc.
b. Self-modification : Self-modification refers to modifying the structure of a program at runtime. It involves accessing or creating new properties at runtime. In other words, self-modification is when some code modifies itself. 
c. Intercession: refers to code modifying the default behaviour of a programming language. Intercesion involves modifying semantics of the programming language or adding new constructs to the program at runtime.

ES6 introduces Reflect API and Proxy API that supports meta programming. 

## Meta Programming with Reflect API

Reflect API in ES6 allows allows us to inspect, or modify classes, objects,properties, and methods of a program at runtime. The Reflect API provides global `Reflect` object which has static methods that can be used for introspection . These methods can used to discover low level information about the code.The Reflect API can be used to build automation testing frameworks that  examine,introspect program at runtime.

// Add description: why to use Reflect API functions when these are already available. Eg construct() vs using new keyword
// Add examples that prove Reflect API methods are called at runtime. 
<!-- https://www.quora.com/What-is-metaprogramming
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming
 -->
<!--For example if a function which is already written by a third party programmer ,but you want to add custom validation without modifying the actual code,we need to use meta programming techniques.-->

<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect -->

Some commonly used methods of the Reflect object are given below: 

|Sr.No |  Name    | Description|
|:----:|:----------|:-------|
|1|Reflect.apply() |Calls a target function with arguments as specified by the args parameter
|2|Reflect.construct() | Equivalent to calling new target(...args) objects of a class
|3|Reflect.get() |A function that returns the value of properties.
|4|Reflect.set() | A function that assigns values to properties. Returns a Boolean that is true if the update was successful.
|5|Reflect.has() | The in operator as function. Returns a boolean indicating whether an own or inherited property exists.

## Reflect.apply()
Calls a target function with arguments as specified by the args parameter. 

### Syntax
```js

Reflect.apply(target, thisArgument, argumentsList)

```
where, 
`target` : represents the target function to call
`thisArgument`: The value of `this` provided for the call to target.
`argumentsList`: An array-like object specifying the arguments with which target should be called.

### Illustration
The following example defines a function that calculates and returns the area of a rectangle. 
//add description here 
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

The output of the above code is - 

```html
area is 200 Centimeters
```

## Reflect.construct()
This method acts as the `new` operator. Equivalent to calling new target(...args).

### Syntax
```js
Reflect.construct(target, argumentsList[, newTarget])

```
where, 
`target`: The target function to call
`argumentsList`: An array-like object specifying the arguments with which target should be called
`newTarget`: The constructor whose prototype should be used. This is an optional parameter. If no value is passed to this parameter, its value is `target`parameter.

### Illustration

//Modify description
The following example creates a class Student with a property `fullName`.The constructor of class takes firstName and lastName.We are creating object of class Student using reflection as shown below.

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

The output of the above code is- 

```html
Mohammad : Mohtashim

```

## Reflect.get()
A function that returns the value of properties.

### Syntax
```js
Reflect.get(target, propertyKey[, receiver])
```

where, 
`target`:The target object on which to get the property
`propertyKey`:The name of the property to get.
`receiver`:The value of `this` provided for the call to `target` if a getter is encountered. This is an optional argument.

### Illustration
//Add description
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

The output of the above code is :

```html
fullname is  Tutorials : Point
firstName is  Tutorials

```

## Reflect.set()
A function that assigns values to properties. Returns a Boolean that is true if the update was successful.

### Syntax
```js
Reflect.set(target, propertyKey, value[, receiver])
```
where, 
`target`:The target object on which to get the property
`propertyKey`:The name of the property to get.
`value`: The value to set.
`receiver`:The value of `this` provided for the call to `target` if a setter is encountered. This is an optional argument.

### Illustration
//Add description

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

The output of the above code is: 

```html
fullname is  Tutorials :
fullname is  Tutorials : Point

```

## Reflect.has()
The in operator as function. Returns a boolean indicating whether an own or inherited property exists.

### Syntax
```js
Reflect.has(target, propertyKey)

```
where, 
`target`: The target object in which to look for the property.
`propertyKey`: The name of the property to check.

### Illustration
// add description
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

The output of the above code is 

```js
true
true
false
```

