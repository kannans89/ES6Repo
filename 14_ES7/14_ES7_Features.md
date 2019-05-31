# ES7 New Features

## Exponentiation Operator

It is represented by double asterisk `**`.It has same purpose as `Math.pow`
method.

```html
  <script>
     
     let base = 2
     let exponent = 3
     console.log('using Math.pow()',Math.pow(base,exponent))
     console.log('using exponentiation operator',base**exponent)

    
    </script>

```
output is shown below

```js
using Math.pow() 8
using exponentiation operator 8
```

## Array Includes

This method `Array.includes()` in ES7 helps to check if an element is available in an array.In earlier version we could check using `indexof` method of array. This returns `-1` if no data found , else returns the index of the first occurance of element in the array.


```html
 <script>

     let marks = [50,60,70,80]

    if(marks.includes(50)){
           console.log('found element in array')
       }else{
           console.log('could not find element')
       }

     if(marks.includes(50,1)){ //search from index 1
           console.log('found element in array')
       }else{
           console.log('could not find element')
       }


       console.log([NaN].includes(NaN))

       //check object is available in array
       let user1 = {name:'kannan'},
        user2 = {name:'varun'},
        user3={name:'prijin'}

        let users = [user1,user2]
        console.log(users.includes(user1))
        console.log(user2.include(user3))


</script>
```