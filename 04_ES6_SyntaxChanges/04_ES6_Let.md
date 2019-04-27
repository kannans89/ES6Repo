# ES6 Syntax Changes

## Let keyword

Prior to ES6 the only way to declare a variable in javascript was using
`var` keyword.
   <!-- example1.html -->

### Example 1 - var and Changing Variable Type

```html
<script>
 
var balance = 5000
console.log(typeof balance)
//dynamically types can be changed
balance = {message:"hello"}
console.log(typeof balance)

</script>
```

output is :

```javascript
number
object
```
let us take another example where displaying iteration value using `var` keyword

### Example 2 - var and Accessing Variable outside block

<!-- example2.html -->
```html
<script>
for (var i=1;i<=5;i++){
    console.log(i);
}
console.log("after the loop i value is "+i);

</script>
```

output of the above will be

```javascript
1
2
3
4
5
after the loop i value is 6
```

Even though we have declared `var i` inside the for loop the value of i can be accessed outside the loop and within the `script` block.The problem is that since we will be writing many lines of code during software development possibility of block level scope is needed.We can not trust `var` keyword in that case.

So ES6 introduces `let` keyword which is the replacement of `var`.This gives block level scope.

The following example shows the type safety of variables declared with `let` . Once we initalize balance to `number` type we cannot change it to `object` type.

### Example 3 - let and changing Variable Type
<!-- example3.html -->
```html
<script>
let balance = 5000 // number type
console.log(typeof balance)

//dynamically types cannot be changed
balance = {message:"hello"} // changing number to object type
console.log(typeof balance)

</script>
```

```js
Uncaught SyntaxError: Identifier 'balance' has already been declared
```

Let us take the second example discussed before using let keyword

### Example 4 - let and Accessing Variable outside block

<!-- example4.html -->
```html
<script>
for (let i=1;i<=5;i++){
    console.log(i);
}
console.log("after the loop i value is "+i);

</script>
```

output will be as shown.

```javascript
1
2
3
4
5
Uncaught ReferenceError: i is not defined
```

## Example  - hoisting

Hoisting feature in javascript allows a variable to be used before it is actually declared. So programmer can delay the declaration of variable .Javascript runtime will scan for variable declarations and put them to top of the block scope .The variables declared with `var` get hoisted to the top of block.

```html
<script>
// variable company is hoisted to top , var company = undefined
console.log(company); // using variable before declaring
var company = "TutorialsPoint"; // declare and initialized here


</script>

```

output will be

```js
undefined
```

The same example if we try with `let` keyword , we get error.

```html
<script>

console.log(company)
let company= "TutorialsPoint"

</script>

```

output is shown below

```js
 Uncaught ReferenceError: company is not defined
```

So to access company

### Example  - let and multiple block scope

Any time you use let it will last as long as the brackets lasts.Let us understand with below example.

```html
<script>
let count=100
for (let count =1;count<=10;count++){
    //inside for loop brackets ,count value starts from 1
console.log("count value inside loop is ",count);
}
//outside for loop brackets ,count value is 100
console.log("count value after loop is",count);

if(count==100){
    //inside  if brackets ,count value is 50
  let count=50;
  console.log("count inside if block",count);
}

console.log(count);
</script>
```

output is as shown

```html
 count value inside loop is  1
 count value inside loop is  2
 count value inside loop is  3
 count value inside loop is  4
 count value inside loop is  5
 count value inside loop is  6
 count value inside loop is  7
 count value inside loop is  8
 count value inside loop is  9
 count value inside loop is  10
 count value after loop is 100
 count inside if block 50
 100

```