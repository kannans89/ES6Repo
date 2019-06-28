# ES6 Syntax Changes

## Default Function Parameters

Default parameters helps programmers to handle null  or undefined values  passed to function.Given example shows a function which takes two parameters and returns sum. The second parameter have default value to 10.This means if no value is passed to second parameter its value will be 10.


```html
 <script>
        function addTwoNumbers(first,second=10){
            console.log('first parameter is :',first)
            console.log('second parameter is :',second)
            return first+second;
        }

        console.log("case 1 sum:",addTwoNumbers(20))
        console.log("case 2 sum:",addTwoNumbers(2,3))
        console.log("case 3 sum:",addTwoNumbers())
        console.log("case 4 sum",addTwoNumbers(1,null))
        console.log("case 5 sum",addTwoNumbers(3,undefined))
        
    </script>

```

output is :

```js
first parameter is : 20
second parameter is : 10
case 1 sum: 30
first parameter is : 2
second parameter is : 3
case 2 sum: 5
first parameter is : undefined
second parameter is : 10
case 3 sum: NaN
first parameter is : 1
second parameter is : null
 case 4 sum 1
 first parameter is : 3
 second parameter is : 10
 case 5 sum 13
```