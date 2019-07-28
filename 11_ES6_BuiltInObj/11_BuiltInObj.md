# Object Extensions

## String extension

Some popular methods added to the String object in ES6 are:


|#Sr.No |  Method    | Description|
|:----:|:----------|:-------|
| 1 |   str.startsWith(searchString[, position])  | determines whether a string begins with the characters of a specified string.Returns true or false
| 2 |   str.endsWith(searchString[, length]) |  determines whether a string ends with the characters of a specified string.Returns true/false
| 3 |   str.includes(searchString[, position]) |  determines whether one string may be found within another string
| 4|   str.repeat(count)  |  constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together

### String.prototype.startsWith()
Determines whether a string begins with the characters of a specified string.This function returns true or false.

**Syntax**

```
str.startsWith(searchString[, position])

```
where, 

*searchString* is the characters to be searched for at the start of this string.
*position*  is an optional parameter. It represents the position in this string at which to begin searching for searchString. The default value is 0.

**Illustration**

```
let company='TutorialsPoint'
console.log(company.startsWith('Tutorial'))
console.log(company.startsWith('orial',3)) // 3 is index

```
The output of the above code is: 

```
true
true
```

### String.prototype.endsWith()
Determines whether a string ends with the characters of a specified string.This function returns true or false.

**Syntax**
```
str.endsWith(searchString[, length])

```
where,

*searchString* is the characters to be searched for at the end of this string.
*length*  is an optional parameter. It represents the he length of str.

## Illustration

```html
<script>
        let company='TutorialsPoint'
        console.log(company.endsWith('Point'));
        console.log(company.endsWith('Tutor',5))//5 is length of string
</script>
```

The output of the above code  is :

```
true
true
```

### String.prototype.includes()
Determines whether one string may be found within another string

**Syntax**
```
str.includes(searchString[, position])

```
where, 

*searchString* is a string to be searched for within this string
*position*  is an optional parameter. It represents the position in this string at which to begin searching for searchString. The default value is 0.

**Illustration**
```
<script>
let company='TutorialsPoint'
console.log(company.includes('orial'))
console.log(company.includes('orial',4))
</script>
```

The output of the above code is : 

```
true
false

```

### String.prototype.repeat()
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together

**Syntax**
```
str.repeat(count)

```
where, 

*count* indicates the number of times to repeat the string in the newly-created string that is to be returned.

**Illustration**
```
<script>
        let name="Kiran-"
        console.log(name.repeat(3));

    </script>
```

The output of the above code is : 

```
Kiran-Kiran-Kiran-

```

## Regex extensions

In a regular expression eg: `/[A-Z]/g` the beginning and ending `/` are called delimiters.Anything after the closing delimiter is called a modifier.ES6 adds a new modifier `/g` where g stands for global .This match all instances of the pattern in a string, not just one. 

### Illustration
The following example searches and returns all upper case characters in the string.

```html
   <script>
   let str = 'JJavascript is  Fun to Work , very Fun '
   let regex = /[A-Z]/g  // g stands for global matches 
   let result = str.match(regex);
   console.log(result)

</script>

```

The output of the above code is: 
`["J", "J", "F", "W", "F"]`

Regular expression searches  are case-sensitive. To turn-off case-sensitivity, use the `/i` modifier.

### Illustration

The following example performs a case insensitive global match.The example replaces `fun` with `enjoyable`.

```html
 <script>

      // /gi global match ignore case
    
   let str = 'Javascript is  fun to Work , very Fun '
   let regex = /Fun/gi;
   console.log(str.replace(regex,'enjoyable'));
   console.log(str)
   console.log(str.search(regex))
</script>
 
```

The output of the above code is:

```
Javascript is  enjoyable to Work , very enjoyable 
Javascript is  fun to Work , very Fun 
15
```

## Number

Some popular methods added to the Number object in ES6 are:

|Sr.No |  method    | description|
|:----:|:----------|:-------|
| 1 |   Number.isFinite(value)  |  method determines whether the passed value is a finite number.Returns true/false
| 2 |   Number.isNaN(value) | returns true if the given value is NaN and its type is Number; otherwise, false.
| 3 |  Number.parseFloat(string) | A floating point number parsed from the given value. If the value cannot be converted to a number, NaN is returned.
| 4 |  Number.parseInt(string,[ radix]) | method parses a string argument and returns an integer of the specified radix or base.


### Number.isFinite
Determines whether the passed value is a finite number.Returns true/false

**Syntax**
```
let res = Number.isFinite(value);
```
*value* to be tested for finiteness.

**Illustration**
```
<script>
console.log(Number.isFinite(Infinity))//false
console.log(Number.isFinite(-Infinity))//false
console.log(Number.isFinite(NaN))//false
console.log(Number.isFinite(123))//true
console.log(Number.isFinite('123')) // evaluates to false
console.log(isFinite('123')) // evaluates to true,global function
</script>

```
The output of the above code is : 

```
false
false
false
true
false
true
```

### Number.isNaN
Returns true if the given value is NaN and its type is Number; otherwise, false

**Syntax**
```
var res = Number.isNaN(value);
````
where *value* is the number to determine if it is a NaN

**Illustration**
```
<script>
console.log(Number.isNaN('123'))//false
console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN(0/0))//true

</script>

```
The output of the above code is : 

```
false
true
true

```

### Number.parseFloat
A floating point number parsed from the given value. If the value cannot be converted to a number, NaN is returned.

**Syntax**
```
Number.parseFloat(string)
````
where *string* is the value parse

**Illustration**
```
<script>
console.log(Number.parseFloat('10.3meters'));
console.log(Number.parseFloat('abc10.3xyz'));
</script>

```
The output of the above code is : 

```
10.3
NaN
```


### Number.parseInt
Parses a string argument and returns an integer of the specified radix or base.

**Syntax**
```
Number.parseInt(string,[ radix ])
````
where, 
*string* is the value to parse
*radix* is an integer between 2 and 36 that represents the base

**Illustration**
```
 <script>
       console.log(Number.parseInt('10meters'))
       console.log(Number.parseInt('abc10meters'))
 </script>

```
The output of the above code is : 

```
10
NaN

```

## Math
Some popular methods added to the Math object in ES6 are:

|Sr.No |  method    | description|
|:----:|:----------|:-------|
| 1 |   Math.sign()  |  function returns the sign of a number, indicating whether the number is positive, negative or zero.
| 2 |   Math.trunc()  |  function returns the integer part of a number by removing any fractional digits.


### Math.sign()
Returns the sign of a number, indicating whether the number is positive, negative or zero

**Syntax**
```
Math.sign( x ) ;     

```
X − represents a number

**Illustration**
```
<script>
        
         console.log(Math.sign(-Infinity)) //       console.log(Math.sign(-10)) // -1
         console.log(Math.sign(0)) // 0
         console.log(Math.sign(Infinity)) // 1
         console.log(Math.sign(10)) // 1
         console.log(Math.sign('N')) // NaN
        
    </script>

```

The output of the above code is :
```
-1
0
1
1
NaN
```


### Math.trunc()
Returns the integer part of a number by removing any fractional digits

**Syntax**
```
Math.trunc( x ) ;      

```
X − represents a number

**Illustration**
```html
 <script>
        console.log(Math.trunc(-3.5)) // -3
        console.log(Math.trunc(-3.6)) // -3
        console.log(Math.trunc(3.5)) // 3
        console.log(Math.trunc(3.6)) // 3
    </script>

```

The output of the above code is :

```js

-3
-3
3
3
```

## Array

|Sr.No |  method    | description|
|:----:|:----------|:-------|
| 1 |   copyWithin()  |   shallow copies part of an array to another location in the same array and returns it without modifying its length..
| 2 |   entries()  |  method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
| 3 |   find()  |  method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
| 4 |   fill()  |   method fills all the elements of an array from a start index to an end index  with a static value. It returns the modified array.
| 5 |   Array.of()  |  method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
| 6 |   Array.from()  |  method creates a shallow copy from an array like or iterable object.



### Array.copyWithin
Shallow copies part of an array to another location in the same array and returns it without modifying its length.

**Syntax**
```
arr.copyWithin(target[, start[, end]])
```
where,
*target*: Zero-based index at which to copy the sequence to. If negative, target will be counted from the end
*start*: is an optional parameter. Zero-based index at which to start copying elements from. If negative, start will be counted from the end. If start is omitted, copyWithin will copy from index 0.
*end*: is an optional parameter. Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end.If end is omitted, copyWithin will copy until the last index

**Illustration**

```html
 <script>
  
      //copy with in
        let marks = [10,20,30,40,50,60]
       console.log(marks.copyWithin(0,2,4)) //destination,source start,source end(excluding)
       console.log(marks.copyWithin(2,4))//destination,source start,(till length)
 </script>

```

The output is :

```js
 [30, 40, 30, 40, 50, 60]
 [30, 40, 50, 60, 50, 60]
```

### Array.entries
Returns a new Array Iterator object that contains the key/value pairs for each index in the array

**Syntax**
```
array.entries()
```

**Illustration**

```html
  <script>
  
      //enties
      let cgpa_list = [7.5,8.5,6.5,9.5]
      let iter = cgpa_list.entries()
      for(let cgpa of iter){
          console.log(cgpa[1])
      }

  </script>
```

The output is given below :

```js
7.5
8.5
6.5
9.5

```

### Array.find
Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
**Syntax**
```
arr.find(callback(element[, index[, array]])[, thisArg])

```
where,
callback :Function to execute on each value in the array, taking three arguments:
        -element :The current element being processed in the array.
        - index : This is optional;refers to the index of the current element being processed in the array.
        - array : This is optional;The array on which find was called.

thisArg: This is optional.Optional object to use as this when executing the  callback

**Illustration**
 ```html
   <script> 
        //find
       const products = [{name:'Books',quantity:10},
       {name:'Pen',quantity:20},
       {name:"Books",quantity:30}
    
    ]
      console.log( products.find(p=>p.name==="Books"))

    </script>
 ```

 The output is given below :

 `{name: "Books", quantity: 10}`


### Array.fill

Fills all the elements of an array from a start index to an end index  with a static value. It returns the modified array.

**Syntax**
```
arr.fill(value[, start[, end]])
```
where,
*value* :Value to fill an array.
*start*: This is optional;Start index, defaults to 0.
*end* :This is optional: End index, defaults to this.length.

**Illustration**

  ```html
    <script>
            //fill

        let nosArr = [10,20,30,40]
        console.log(nosArr.fill(0,1,3))// value ,start,end
        //[10,0,0,40]

       console.log(nosArr.fill(0,1)) // [10,0,0,0]
       console.log(nosArr.fill(0))

    </script>

  ```

 The output is given below :

  ```js
[10, 0, 0, 40]
[10, 0, 0, 0]
[0, 0, 0, 0]

  ```

### Array.of

Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments

**Syntax**
```
Array.of(element0[, element1[, ...[, elementN]]])
```
elementN: Elements of which to create the array.

**Illustration

  ```html
<script>
         
        //Array.of
        console.log(Array.of(10))      
        console.log(Array.of(10,20,30)) 
       console.log(Array(3))
       console.log(Array(10,20,30))
        
     </script>
  ```
  
 The output is given below :

   ```js
  [10]
 [10, 20, 30]
 [empty × 3]
 [10, 20, 30]

   ```

### Array.from
Creates a shallow copy from an array like or iterable object

**Syntax**
```
Array.from(arrayLike[, mapFn[, thisArg]])

```
where,
*arrayLike*: An array-like or iterable object to convert to an array.
*mapFn*: This an optional parameter.Map function to call on every element of the array.
*thisArg*: this is an optional parameter.Value to use as this when executing mapFn.

**Illustration**

```html
 <script>
       //Array.from
         //iterate over an object

         const obj_arr ={
             length:2,
             0:101,
             1:'kannan'
         }
         console.log(obj_arr)
         const arr = Array.from(obj_arr)
         console.log(arr)
         for(const element of arr){
             console.log(element);
         }

         console.log(Array.from('Javascript'))
        let setObj = new Set(['Training',10,20,20,'Training'])
        console.log(Array.from(setObj))

        console.log(Array.from([10,20,30,40],n=>n+1))

    </script>


 ```
 
The output is given below :

 ```js
 {0: 101, 1: "kannan", length: 2}
 [101, "kannan"]
 101
 kannan
 ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
 ["Training", 10, 20]
 [11, 21, 31, 41]

 ```

## Object

|Sr.No |  method    | description|
|:----:|:----------|:-------|
| 1| Object.is()| method determines whether two values are the same value
| 2| Object.setPrototypeOf()| method sets the prototype of a specified object to another object or null.
| 3| Object.assign()| method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

### Object.is
Determines whether two values are the same value

**Syntax**
```
Object.is(value1, value2);

```
where,
*value1*:The first value to compare.
*value2*:The second value to compare.

**Illustration**

```html
   <script>

           let emp1 ={ename:'Prijin'}
         let emp2 ={ename:'Prijin'}

         console.log(Object.is(emp1.ename,emp2.ename))
   </script>
```

The output of the above code is 

```
true
```


### Object.setPrototypeOf
Sets the prototype of a specified object to another object or null

**Syntax**
```
Object.setPrototypeOf(obj, prototype)

```
where,
*obj*:The object which is to have its prototype set
*prototype*:The object's new prototype (an object or null)

**Illustration**
```html
 <script>
        
        let emp ={name:'A',location:'Mumbai',basic:5000}
        let mgr = {name:'B'}
        console.log(emp.__proto__ == Object.prototype)
        console.log(mgr.__proto__ == Object.prototype)
        console.log(mgr.__proto__ ===emp.__proto__)

        Object.setPrototypeOf(mgr,emp)
        console.log(mgr.__proto__ == Object.prototype) //false
        console.log(mgr.__proto__ === emp)
        console.log(mgr.location,mgr.basic)
      

    </script>


```

The output of the above code is:

```js
true
true
true
false
true
Mumbai 5000

```

### Object.assign
Copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

**Syntax**
```
 Object.assign(target, ...sources)
 
```
where,
*target*: The target object.
*sources*: The source object(s).

**Illustration**

```html
 <script>
   
        //Object.assign()
        let obj1 ={x:10},
            obj2={y:20},
            obj3={z:30}
        
        Object.assign(obj1,obj2,obj3)
        console.log("obj 1",obj1)
 </script>

```

The output of the above code is 

```
obj 1 {x: 10, y: 20, z: 30}

```

