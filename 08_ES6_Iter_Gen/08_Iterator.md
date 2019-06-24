# Iterator

Iterable allows us to iterate over a collection of values using a `for...of` loop.The folllowing build in types are by default iterable.
- String
- Array
- Map
- Set
  
Data consumers are for..of loop / spread operator which inserts values into the array.

Data sources are  Strings , Array ,Map.

It is not possible for data consumers to support all sources because there could be new sources also. So es6 introduces the interface `iterable` where all datasources implments the iterable interface and data consumers implement it to retreieve the values.

An object is considered iterable if the object has Symbol.iterator.

```html

 <script>
let marks = [10,20,30]
              
         //check iterable using for..of
         for(let m of marks){
             console.log(m);
         }
        //retrieve iterator

        let iter = marks[Symbol.iterator]();
        console.log(iter.toString())
        console.log(iter.next()) // value and done
        console.log(iter.next())
        console.log(iter.next())
        console.log(iter.next())
</script>
```

Destructuring also uses iterables.


## Generator

Gererator is a function which returns an iterator.Generator is a function which can stop midway and then continue from where it stopeed.It can generate a series of values.

A generator function has an asterik `*` character . The `*` shows the funciton return a generator object.The generator function uses the `yield` keyword.The yield keyword returns an iterator object with two properties , first value and second one  {value:'',done:true}