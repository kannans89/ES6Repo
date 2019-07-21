# Object Extensions

## String extension

Popular methods added in string are:


|#Sr.No |  method    | description|
|:----:|:----------|:-------|
| 1 |   str.startsWith(searchString[, position])  | determines whether a string begins with the characters of a specified string.Returns true or false
| 2 |   str.endsWith(searchString[, length]) |  determines whether a string ends with the characters of a specified string.Returns true/false
| 3 |   tr.includes(searchString[, position]) |  determines whether one string may be found within another string
| 4|   str.repeat(count)  |  constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together

```html
<script>
        let company='TutorialsPoint'
        console.log(company.startsWith('Tutorial'))
        console.log(company.endsWith('Point'));
        console.log(company.includes('orial'))
        //with parameter

        console.log(company.startsWith('orial',3)) // 3 is index
        console.log(company.endsWith('Tutor',5))//5 is length of string


    </script>
```

output is :

```js
true
true
true
true
true
```

The repeat method repeats the string and concatenates together as per the specified times .

```html
<script>
  //   //repeat method

       let name="Kiran-"
      console.log(name.repeat(3));
</script>

```
ouput:

```
Kiran-Kiran-Kiran-
```

## Regex extensions

In a regular expression eg: `/[A-Z]/g` the beginning and ending `/` are called delimiters.Anything after the closing delimiter is called a modifier.ES6 adds a new modifier `/g` where g stands for global .This match all instances of the pattern in a string, not just one.

```html
   <script>
   let str = 'JJavascript is  Fun to Work , very Fun '
   let regex = /[A-Z]/g  // g stands for global matches 
   let result = str.match(regex);
   console.log(result)

</script>

```

ouput: 
`["J", "J", "F", "W", "F"]`

Following example shows do a case insensitive global match.The example replaces `fun` with `enjoyable`,ignoring the case.

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

output:

```
Javascript is  enjoyable to Work , very enjoyable 
Javascript is  fun to Work , very Fun 
15
```

## Number

|Sr.No |  method    | description|
|:----:|:----------|:-------|
| 1 |   Number.isFinite(value)  |  method determines whether the passed value is a finite number.Returns true/false
| 2 |   Number.isNaN(value) | returns true if the given value is NaN and its type is Number; otherwise, false.
| 3 |  Number.parseFloat(string) | A floating point number parsed from the given value. If the value cannot be converted to a number, NaN is returned.
| 4 |  Number.parseInt(string,[ radix]) | method parses a string argument and returns an integer of the specified radix or base.

```html
   <script>
        console.log(Number.isFinite(Infinity))//false
        console.log(Number.isFinite(-Infinity))//false
        console.log(Number.isFinite(NaN))//false

        console.log(Number.isFinite(123))//true
        console.log(Number.isFinite('123')) // evaluates to false

        console.log(isFinite('123')) // evaluates to true,global function

        console.log(Number.isNaN('123'))//false
        console.log(Number.isNaN(NaN))//true
        console.log(Number.isNaN(0/0))//true

</script>

```
output is :

 ```
false
false
false
true
false
true
false
true
true

 ```
Following shows example to use `parseFloat()` and `parseInt()`
```html
 <script>

       console.log(Number.parseFloat('10.3meters'));
       console.log(Number.parseFloat('abc10.3xyz'));

       console.log(Number.parseInt('10meters'))
       console.log(Number.parseInt('abc10meters'))


 </script>

```
output is :

```
10.3
NaN
10
NaN
```
## Math

```html
 <script>
        
        console.log(Math.sign(-Infinity)) // -1
        console.log(Math.sign(-10)) // -1
        console.log(Math.sign(0)) // 0
        console.log(Math.sign(Infinity)) // 1
        console.log(Math.sign(10)) // 1

        console.log(Math.sign(NaN)) // NaN

        console.log(Math.trunc(-3.5)) // -3
        console.log(Math.trunc(-3.6)) // -3
        console.log(Math.trunc(3.5)) // 3
        console.log(Math.trunc(3.6)) // 3
    </script>

```

## Array

 Array.from() method creates a shallow copy from an array like or iterable object.

 ```html
 <script>

      //copy with in
        let marks = [10,20,30,40,50,60]
       console.log(marks.copyWithin(0,2,4)) //destination,source start,source end(excluding)
       console.log(marks.copyWithin(2,4))//destination,source start,(till length)

      /*
      //enties
      let cgpa_list = [7.5,8.5,6.5,9.5]
      let iter = cgpa_list.entries()
      for(let cgpa of iter){
          console.log(cgpa[1])
      }*/

    /*

       //find
       const products = [{name:'Books',quantity:10},
       {name:'Pen',quantity:20},
       {name:"Books",quantity:30}
    
    ]
      console.log( products.find(p=>p.name==="Books"))
        //fill

        let nosArr = [10,20,30,40]
        console.log(nosArr.fill(0,1,3))// value ,start,end
        //[10,0,0,40]

       console.log(nosArr.fill(0,1)) // [10,0,0,0]
       console.log(nosArr.fill(0))



        //Array.of

        console.log(Array.of(10))
        console.log(Array.of(10,20,30))
        
        console.log(Array(3))
        console.log(Array(10,20,30))
        






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

        */
    </script>


 ```

## Object


```html
 <script>
         //Object.is()

         let emp1 ={ename:'Prijin'}
         let emp2 ={ename:'Prijin'}

         console.log(Object.is(emp1.ename,emp2.ename))

        //Object.setPrototypeOf(destination,source)
        let emp ={name:'A',location:'Mumbai',basic:5000}
        let mgr = {name:'B'}
        console.log(emp.__proto__ == Object.prototype)
        console.log(mgr.__proto__ == Object.prototype)
        console.log(mgr.__proto__ ===emp.__proto__)

        Object.setPrototypeOf(mgr,emp)
        console.log(mgr.__proto__ == Object.prototype) //false
        console.log(mgr.__proto__ === emp)
        console.log(mgr.location,mgr.basic)
       
        //Object.assign()
        let obj1 ={x:10},
            obj2={y:20},
            obj3={z:30}
        
        Object.assign(obj1,obj2,obj3)
        console.log("obj 1",obj1)

    </script>


```