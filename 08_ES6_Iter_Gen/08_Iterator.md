# Iterator

Iterator is an object which allows to access a collection of objects one at a time. The following built-in types are by default iterable.
- String
- Array
- Map
- Set

An object is considered iterable if the object implements a function whose key is `[Symbol.iterator]` and returns an iterator.A `for...of` loop can be used to iterate a collection.


<!-- 
https://www.freecodecamp.org/news/demystifying-es6-iterables-iterators-4bdd0b084082/ -->

### Illustration 1

The following example declares an array,marks and iterates through it by using a `for..of` loop.

```html

 <script>
let marks = [10,20,30]
              
         //check iterable using for..of
         for(let m of marks){
             console.log(m);
         }
        
</script>
```

Output of the above code will be:

```js
10
20
30
```


### Illustration 2
The following example declares an array, marks and retrieves an iterator object . The `[Symbol.iterator]()` can be used to retrieve an iterator object. Thhe `next()` method of the iterator returns an object with 'value' and 'done' properties . 'done' is boolean and returns true after reading all items in the collection.

```js
        let marks = [10,20,30]
        let iter = marks[Symbol.iterator]();
        console.log(iter.next()) 
        console.log(iter.next())
        console.log(iter.next())
        console.log(iter.next())

```

Output of the above code will be:

```js

{value: 10, done: false}
{value: 20, done: false}
{value: 30, done: false}
{value: undefined, done: true}

```

## Custom Iterable
In this example we are creating a class `CustomerList` which can be iterated using a `for of ` loop.The constructor of the class takes an array of customer objects. To convert this class to iterable it should implment function whose key is `[Symbol.iterator]`  as shown below.This function returns an iterator object.The iterator object has a function `next` which returns an object `{value:'someValue',done:true/false}`

```html
 
    <script>
         
        class CustomerList {
               constructor(customers){
                   this.customers = [].concat(customers)
               }

               [Symbol.iterator](){
                   let count=0;
                   let customers = this.customers
                   return {
                       next:function(){
                           let customerVal = customers[count];
                           count+=1;
                           if(count<=customers.length){
                               return {
                                   value:customerVal,
                                   done:false
                               }
                           }
                           return {done:true}

                       }
                   }
               }

        }

        let customersObj = new CustomerList([{
            firstName:'A'
        },{
          firstName:'B'
        },{
          firstName:'C'
        }]);

        for(let c of customersObj){
           console.log(c)
        }

        let iter = customersObj[Symbol.iterator]();
        console.log(iter.next())
        console.log(iter.next())
        console.log(iter.next())
        console.log(iter.next())
</script>
```

output is shown :

```js

```

## Generator

Gererator is a function which returns an iterator.Generator is a function which can stop midway and then continue from where it stopeed.It can generate a series of values.

A generator function has an asterik `*` character . The `*` shows the funciton return a generator object.The generator function uses the `yield` keyword.The yield keyword returns an iterator object with two properties , first value and second one  {value:'',done:true}


Example 1: The example shows a generator function `getMarks` which returns 10 in first iteration , 20 in second iteration and 30 in third.Since the generator function returns an iterator , we could call the `next()` method also as shown below.

```html
 <script>
  function * getMarks(){
           yield 10
           yield 20
           yield 30
       }    

       let markIter = getMarks()
       for(let m of markIter){
           console.log(m)
       }
       //iterate using next() method
        markIter = getMarks();
       console.log(markIter.next())
       console.log(markIter.next())
       console.log(markIter.next())
       console.log(markIter.next()) //iteration is over so no value
 </script>
```

output:

```js
10
20
30
{value: 10, done: false}
{value: 20, done: false}
{value: 30, done: false}
{value: undefined, done: true}
```

Example 2: Here we create an infinite sequence of even numbers through `* evenNumberGenerator` generator function.We can iterate through all even numbers through `next()` or using `for of` loop as shown below.


```html
 <script>
       function * evenNumberGenerator(){
            let num = 0;

            while(true){
                num+=2
                yield num
               
            }

       }

        // display first two elements 
       let iter = evenNumberGenerator();
       console.log(iter.next())
       console.log(iter.next())
       
       //using for of to iterate till 12
       for(let n of evenNumberGenerator()){
           if(n==12)break;
           console.log(n);
       }

</script>

```

output:

```js
{value: 2, done: false}
{value: 4, done: false}

2
4
6
8
10

```
