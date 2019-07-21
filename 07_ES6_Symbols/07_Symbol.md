# Symbol

ES6 introduces a new primitive type called Symbol.Symbols are helpful to implement metaprogramming in JavaScript programs.
//why use symbols??



## Syntax

```js
const mySymbol = Symbol()
const mySymbol = Symbol(stringDescription)
```

A symbol is just a piece of memory which you can store some data.Each symbol will point to a different memory location.Values returned by a Symbol() constructor are  unique and immutable.

## Illustration

Let us understand this through an example.
First we created two symbols without description , then symbols with same description as `hello` both cases equality operator will return false.

```html
 <script>
     const s1 = Symbol();
     const s2 = Symbol();

     console.log(typeof s1)
     console.log(s1===s2)
     const s3 = Symbol("hello");//description
     const s4 = Symbol("hello");
     console.log(s3)
     console.log(s4)
     console.log(s3==s4)
</script>

```

The output of the above code is :

```html
symbol
false
Symbol(hello)
Symbol(hello)
false

```

## Sharing Symbols

ES6 provides a global symbols registry ,that allows programmers to share Symbols globally.We can add Symbols to registry and reuse them later.In this way symbols can be shared. Some common methods associated with Symbols are-


|Sr.No |  Name    | Description|
|:----:|:----------|:-------|
|1|Symbol.for(key) |searches for existing symbols in a symbol registry with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key.
|2|Symbol.keyFor(sym) | Retrieves a shared symbol key from the global symbol registry for the given symbol.


### Symbol.for()

This function creates a symbol and adds to registry . If the symbol is already present in the registry it will return the same;else a new symbol is created in the global symbol registry.

**Syntax**
```
Symbol.for(key)

```
where, 
*key*  is the identifier of the symbol

**Illustration**

The following example shows the difference between `Symbol() and Symbol.for()`

```html

   <script>
      const userId = Symbol.for('userId') // creates a new Symbol in registry
      const user_Id = Symbol.for('userId') // reuses already created Symbol

      console.log(userId == user_Id)

      const studentId = Symbol("studentID") // creates symbol but not in registry
      const student_Id = Symbol.for("studentID")// creates a new Symbol in registry
      console.log(studentId == student_Id)
    </script>

```

The output of the above code is : 

```js
true
false
```

### Symbol.keyFor
This method retrieves a shared symbol key from the global symbol registry for the given symbol

**Syntax**
```
Symbol.keyFor(sym)
```
where, 
*sym* is the symbol to find a key for


**Illustration**

```html
  <script>
     const user_Id = Symbol.for('userId') // creates a new Symbol in registry
     console.log(Symbol.keyFor(user_Id)) // returns the key of a symbol in registry

     const userId = Symbol("userId")// symbol not in registry
     console.log(Symbol.keyFor(userId)) //userId symbol is not in registry
    </script>

```

The output of the code is as given below:

```js
userId
undefined
```

## Symbol & Classes
//review this 
Symbol can be used with classes to define the property name of the class.
The advantage is that if property is a symbol as shown below, outside the package property can be accessed only if symbol names is known. So data is much encapsulated when symbols are used as properties.

**Illustration**

```html
<script>
    const COLOR = Symbol()
    const MODEL = Symbol()
    const MAKE = Symbol()

    class Bike {
        constructor(color ,make,model){
            this[COLOR] = color;
            this[MAKE] = make;
            this[MODEL] = model;
        }

    }

 let bike  = new Bike('red','honda','cbr')
 console.log(bike)

 //property can be accessed ony if symbol name is known
 console.log(bike[COLOR])
</script>

```

The output of the above code is: 

```js
Bike {Symbol(): "red", Symbol(): "honda", Symbol(): "cbr"}
Symbol(): "red"
Symbol(): "honda"
Symbol(): "cbr"

red

```
//???
Since the object keys are of the Symbol type it becomes difficult to access the object properties outside package .
