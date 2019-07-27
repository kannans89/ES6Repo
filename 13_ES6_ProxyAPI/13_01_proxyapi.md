# Proxy API
ES6 implements intercession form of meta programming using Proxies. Similar to ReflectAPI, the Proxy API is another way of implementing meta programming in ES6.The Proxy object is used to define custom behaviour for fundamental operations. A proxy object performs some operations on behalf of the real object.

The various terminologies related to ES6 proxies are given below: 

<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy -->

|Sr.No |  terminology    | Description|
|:----:|:----------|:-------|
|1|handler |Placeholder object which contains traps
|2|traps| The methods that provide property access. This is analogous to the concept of traps in operating systems
|3|target |Object which the proxy virtualizes. It is often used as storage backend for the proxy.

## Syntax

```js
  const proxy = new Proxy(target,handler)
```

The `target` can be any sort of object like array,function or another proxy.The `handler` is an object whose properties are functions,this defines the behavior of the proxy .

## Handler Methods

The handler object  contains traps for Proxy.All traps are optional. If a trap has not been defined, the default behavior is to forward the operation to the target.Some common handler methods are following

|Sr.No |  method    | Description|
|:----:|:----------|:-------|
|1|handler.apply() |A trap for a function call.
|2|handler.construct()| A trap for the new operator.
|3|handler.get() |A trap for getting property values.
|4|handler.set() |A trap for setting property values.
|5|handler.has() |A trap for the in operator.


### Illustration :handler.apply()
The following example defines a function `rectangleArea`, which takes width and height as parameters and returns the area of the rectangle. The program creates a proxy and defines a handler object for the `rectangleArea` function. This handler object verifies the number of parameters passed to the function before the function is executed. The handler object throws an error if two parameters are not passed to the function.

```html

    <script>
        function rectangleArea(width,height){
            return width*height;
        }


        const handler = {
            apply:function(target,thisArgs,argsList){
                console.log(argsList);
                //console.log(target)
                if(argsList.length ==2){
                    return Reflect.apply(target,thisArgs,argsList)

                }
                else throw 'Invalid no of arguments to calculate'
            }
        }

        const proxy = new Proxy(rectangleArea,handler)
        const result = proxy(10,20);
        console.log('area is ',result)
        proxy(10) // Error
    </script>

```

The output of the above code is: 

```
[10, 20]
area is  200
[10]
Uncaught Invalid no of arguments to calculate
```

### Illustration: handler.construct()
The following example defines a class `Student` with a constructor and a getter method. The constructor  takes firstName and lastName as parameters.The program creates a proxy and defines a handler object to intercept the constructor. The handler object verifies the number of parameters passed to the constructor. The handler object throws an error if exactly two parameters are not passed to the constructor.

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

      const handler = {
          construct:function(target,args){

            if(args.length==2)
            {
                return Reflect.construct(target,args);
            }
                else throw 'Please enter First name and Last name'                       
          }
      }

    const StudentProxy = new Proxy(Student,handler)
    const s1 = new StudentProxy('kannan','sudhakaran')
    console.log(s1.fullName)
    const s2 = new StudentProxy('Tutorials')
    console.log(s2.fullName)

    </script>


```

The output of the above code is:

```js
kannan : sudhakaran
Uncaught Please enter First name and Last name
```

### Illustration:handler.get()
The following example defines a class `Student` with a constructor and a custom getter method,`fullName`. The custom getter method returns a new string by concatenating the firstName and lastName.The program creates a proxy and defines a handler object intercepts whenever the properties firstName,lastName and fullName are accessed. The property values will be returned in uppercase. 

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

      const handler = {

          get: function(target,property){
             return Reflect.get(target,property).toUpperCase();
          }
      }

       const s1 = new Student("Tutorials","Point")
       const proxy = new Proxy(s1,handler)
       console.log(proxy.fullName)
       console.log(proxy.firstName)
       console.log(proxy.lastName)

    </script>


```

The output of the above code is:

```html
TUTORIALS : POINT
TUTORIALS
POINT
```



### Illustration :handler.set()
The following example defines a class `Student` with a constructor and a custom getter method,`fullName`. The constructor  takes firstName and lastName as parameters.The program creates a proxy and defines a handler object which intercepts all set operations on  firstName and lastName. The handler object throws an error if the length of the property value is not greater than 2.

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

      const handler = {

          set: function(target,property,value){
              
              if(value.length>2){
                return Reflect.set(target,property,value);
              }
                else
                { throw 'string length should be greater than 2'
                }
          }
      }

       const s1 = new Student("Tutorials","Point")
       const proxy = new Proxy(s1,handler)
       console.log(proxy.fullName)
       proxy.firstName="Test"
       console.log(proxy.fullName)
       proxy.lastName="P"

    </script>

```

The output of the above code is :

```html
 Tutorials : Point
 Test : Point
 Uncaught string length should be greater than 2

```

### Illustration:handler.has()
The following example defines a class `Student` with a constructor that takes firstName and lastName as parameters.The program creates a proxy and defines a handler object . The `has` method of the handler object is called whenever the `in` operator is used.

```html

    <script>
         class Student{
          constructor(firstName,lastName){
              this.firstName = firstName
              this.lastName = lastName
          }

          
      }

      const handler = {
       

          has: function(target,property){
              console.log('Checking  for '+property+' in the object')
             return Reflect.has(target,property)
               
          }
      }

       const s1 = new Student("Tutorials","Point")
       const proxy = new Proxy(s1,handler)
       console.log('firstName' in proxy)
      

    </script>


```

The output of the above code is : 

```html
 Checking  for firstName in the object
 true

```
