# Proxy API

Proxy API is another way to write meta programming in ES6 like  ReflectAPI.Proxy means a middleman who does work on behalf of real object.

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


### Example 1:handler.apply()


```html

    <script>
        const rectangleArea = function(width,height){
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


### Example 2:handler.construct()


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
              console.log("inside construct")
              return Reflect.construct(target,args);
          }
      }

    const StudentProxy = new Proxy(Student,handler)
    const s1 = new StudentProxy('kannan','sudhakaran')
    console.log(s1.fullName)
    const s2 = new StudentProxy('Tutorials','Point')
    console.log(s2.fullName)


    </script>


```

output is

```js
inside construct
kannan : sudhakaran
inside construct
Tutorials : Point
```

### Example 3:handler.set()

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
              console.log("inside set")
              if(value.length>=3){
                return Reflect.set(target,property,value);
              }
                else
                { throw 'string length should be greater than or equal 3'
                }
          }
      }

       const s1 = new Student("Tutorials","Point")
       const proxy = new Proxy(s1,handler)
       console.log(proxy.fullName)
       proxy.firstName="TUTORIALS"
       console.log(proxy.fullName)
       proxy.lastName="P"

    </script>

```

output is shown

```html
 Tutorials : Point
 inside set
 TUTORIALS : Point
 inside set
 Uncaught string length should be greater than or equal 3

```

### Example 4:handler.get()

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
              console.log("inside get")
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

output is shown below

```html
inside get
TUTORIALS : POINT
inside get
TUTORIALS
inside get
POINT
```

### Example 5:handler.has()


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
       

          has: function(target,property){
              console.log('inside has')
             return Reflect.has(target,property)
               
          }
      }

       const s1 = new Student("Tutorials","Point")
       const proxy = new Proxy(s1,handler)
       console.log('fullName' in proxy)
       console.log('fullname' in proxy)
       console.log('firstName' in proxy)
      

    </script>


```

output is shown below

```html
 inside has
 true
 inside has
 false
 inside has
 true

```