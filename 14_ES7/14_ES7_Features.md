# ES7 New Features

## Exponentiation Operator

ES7 introduces a new mathematical operator called exponentiation operator. This operator is similar to using `Math.pow` method. Exponentiation operator is represented by a double asterisk `**`. The operator can be used only with numeric values. The syntax for using the exponentiation operator is given below:

### Syntax

```

base_value ** exponent_value

```

### Illustration

The following example calculates the exponent of a number using the `Math.pow` method and the exponentiation operator. 

```html
  <script>
     
     let base = 2
     let exponent = 3
     console.log('using Math.pow()',Math.pow(base,exponent))
     console.log('using exponentiation operator',base**exponent)
    
  </script>

```

Output of the above snippet is as given  below

```js
using Math.pow() 8
using exponentiation operator 8
```

## Array Includes

The `Array.includes()` method is introduced in ES7 helps to check if an element is available in an array.Prior to ES7, the `indexof` method of the Array class could be used to verify if a value exists in an array . The `indexof` returns the index of the first occurance of element in the array if the data is found ,else returns `-1` if the data doesn't exist.

The `Array.includes()` method accepts a parameter, checks if the value passed as parameter exists in the array. This method returns `true` if the value is found ,else returns `false` if the value doesn't exist.  The syntax for using the `Array.includes` method is given below: 

### Syntax

```
Array.includes(value)
```

OR

```
Array.includes(value,start_index)
```
The second syntax checks if the value exists from the index specified. 

### Illustration

The following example declares an array  `marks` and uses the `Array.includes` method to verify if a value is present in the array. 

```html
 <script>

     let marks = [50,60,70,80]
    //check if 50 is included in array
    if(marks.includes(50)){
           console.log('found element in array')
       }else{
           console.log('could not find element')
       }

       // check if 50 is found from index 1
     if(marks.includes(50,1)){ //search from index 1
           console.log('found element in array')
       }else{
           console.log('could not find element')
       }

        //check Not a Number(NaN) in an array
       console.log([NaN].includes(NaN))

       //create an object array
       let user1 = {name:'kannan'},
        user2 = {name:'varun'},
        user3={name:'prijin'}
        let users = [user1,user2]

        //check object is available in array
        console.log(users.includes(user1))
        console.log(users.includes(user3))


</script>
```

Output of the above code snippet is given below- 

```js
found element in array
could not find element
 true
 true
 false

```