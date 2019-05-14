# Symbol

ES6 introduces a new datatype called Symbol and it is a primitive type.
A symbol is just a piece of memory which you can store some data.Each symbol will point to different memory location , they are  unique and immutable.

## Syntax

```js
const mySymbol = Symbol()
const mySymbol = Symbol(stringDescription)
```

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

output is :

```html
symbol
false
Symbol(hello)
Symbol(hello)
false

```

## Sharing Symbols

ES6 provides a global symbols registry ,that allows programmers to share Symbols globally.We can add Symbols to registry and reuse them later.This way symbols can be shared.Common methods used are


|Sr.No |  Name    | Description|
|:----:|:----------|:-------|
|1|Symbol.for(key) |searches for existing symbols in a symbol registry with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key.
|2|Symbol.keyFor(sym) | method retrieves a shared symbol key from the global symbol registry for the given symbol.

### Example 1:Symbol.for()

This function creates a symbol and adds to registry . If already present in registry it will return the same.Following example shows difference between `Symbol() and Symbol.for()`

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

output is : 

```js
true
false
```


### Example 2:Symbol.keyFor



```html
  <script>
    
     const user_Id = Symbol.for('userId') // creates a new Symbol in registry
     console.log(Symbol.keyFor(user_Id)) // returns the key of a symbol in registry

     const userId = Symbol("userId")// symbol not in registry
     console.log(Symbol.keyFor(userId)) //userId symbol is not in registry
    
    </script> 


```

output is 

```js
userId
undefined
```