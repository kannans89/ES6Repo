# Maps and Sets
ES6 introduces two new data structures- maps and sets.

## Maps
A map is an ordered collection of key-value pairs. Maps are similar to objects. However, there are some differences between maps and objects. These are listed below : 

|#Sr.No |  Object    | Map|
|:----:|:----------|:-------|
| 1 |    Keys cannot be Object type  | Keys can be any type
| 2 |   Keys are not ordered  | Keys are ordered
| 3 |   not iterable  | iterable


### Syntax

 ```html
   let map= new Map([iterable])
   let map= new Map()
 ```

**Illustration**

The following example creates a map using an iterable constructor

```html
<script>
                let andy ={ename:"Andrel"},
                    varun = {ename:"Varun"},
                    prijin={ename:"Prijin"}
               let empJobs = new Map([
               [andy,'Software Architect'],
               [varun,'Developer']]
               );
               console.log(empJobs)
</script>

```

The output of the above code is : 

```js
{{…} => "Software Architect", {…} => "Developer"}
```

### Checking size of the map

The size property can be used to determine the number of values stored in the map.

**Syntax**

```
map_name.size

```

**Illustration**
```html
<script>
let daysMap = new Map();
daysMap.set('1', 'Monday');
daysMap.set('2', 'Tuesday');
daysMap.set('3', 'Wednesday');
console.log(daysMap.size);
</script>
```
 The output of the above code is : 
 
 ```
 3
 
 ```

Following are some common methods that can be used to manipulate maps :

|#Sr.No |  Object    | Map|
|:----:|:----------|:-------|
| 1 |    set(key,value)  | Adds key and value to map
| 2 |    get(key)  | Returns value if key is matched
| 3 |    has(key)  | Returns true if an element with the specified key exists; else returns false
| 4 |    keys()  | Returns an iterator that contains the keys for each element in the map object
| 5 |    values()  | Returns an iterator that contains the values for each element in the map object
| 6 |    entries()  | Returns an iterator that contains the key-value pairs for each element in the Map
| 7 |    delete(key)  | Removes the specified element from a Map object 


### set()
Adds key and value to map

**Syntax**

```
map_name.set(key, value);

```
where, 
*key* is the key of the element to add to the Map object

*value*  is the value of the element to add to the Map object

**Illustration**

```html
 <script>
         let andy ={ename:"Andrel"},
             varun = {ename:"Varun"},
             prijin={ename:"Prijin"}

        let empJobs = new Map();
        empJobs.set(andy,'Programmer')
        empJobs.set(varun,'Accountant')
        empJobs.set(prijin,'HR')

        console.log(empJobs)
    </script>

```

The output of the above code is :

```js
{{…} => "Programmer", {…} => "Accountant", {…} => "HR"}
```

### get()
Returns value if the key is matched or returns *undefined* if the key is not found

**Syntax**
```
map_name.get(key)

```
where, 

*key* is the key of the element to return from the Map object


**Illustration**

```html
<script>
                let andy ={ename:"Andrel"},
                    varun = {ename:"Varun"},
                    prijin={ename:"Prijin"}
       
               let empJobs = new Map([
               [andy,'Software Architect'],
               [varun,'Developer']]
               );
                
              let value = empJobs.get(varun)
              console.log(value)
             
              console.log(empJobs.size)
        </script>

```
The output of the above code is :

```js
Developer
 2

```

### has()
Returns true if an element with the specified key exists; else returns false

**Syntax**
```
myMap.has(key)

```
where, 

*key* is the key of the element to test for presence

**Illustration**

```html
<script>
                let andy ={ename:"Andrel"},
                    varun = {ename:"Varun"},
                    prijin={ename:"Prijin"}
       
               let empJobs = new Map([
               [andy,'Software Architect'],
               [varun,'Developer']]
               );
                
              console.log(empJobs.has(prijin))
              console.log(empJobs.size)
        </script>

```
The output of the above code is :

```js
false
2
```

### keys()
Returns an iterator that contains the keys for each element in the map object

**Syntax**
```
map_name.keys()

```

**Illustration**

```html
   <script>
                let andy ={ename:"Andrel"},
                    varun = {ename:"Varun"},
                    prijin={ename:"Prijin"}
       
               let empJobs = new Map([
               [andy,'Software Architect'],
               [varun,'Developer']]
               );
                
              for(let emp of empJobs.keys()){
                  console.log(emp.ename)
              }
        </script>

```
The output of the above code is :

```js
Andrel
Varun
```

### values()
Returns an iterator that contains the values for each element in the map object

**Syntax**
```
map_name.values()

```

**Illustration**

```html
  
        <script>
                let andy ={ename:"Andrel"},
                    varun = {ename:"Varun"},
                    prijin={ename:"Prijin"}
       
               let empJobs = new Map([
               [andy,'Software Architect'],
               [varun,'Developer']]
               );
                
              for(let role of empJobs.values()){
                  console.log(role)
              }
        </script>

```

The output of the above code is :

```js
Software Architect
Developer
```

### entries() 
Returns an iterator that contains the key-value pairs for each element in the Map

**Syntax**
```
map_name.entries()
```

**Illustration**

```html
 <script>
                let andy ={ename:"Andrel"},
                    varun = {ename:"Varun"},
                    prijin={ename:"Prijin"}
       
               let empJobs = new Map([
               [andy,'Software Architect'],
               [varun,'Developer']]
               );
                
              for(let row of empJobs.entries()){
                  console.log("key is ",row[0])
                  console.log("value is ",row[1])
              }

              
        </script>

```
The output of the above code is :

```
key is  {ename: "Andrel"}
value is  Software Architect
key is  {ename: "Varun"}
value is  Developer
```

### delete()
Removes the specified element from a Map object 

**Syntax**
```
map_name.delete(key)
```
where, 

*key* is the key of the element to remove from the map


**Illustration**

```html
 <script>
                let andy ={ename:"Andrel"},
                    varun = {ename:"Varun"},
                    prijin={ename:"Prijin"}
       
               let empJobs = new Map([
               [andy,'Software Architect'],
               [varun,'Developer']]
               );
                
               empJobs.delete(andy) //deleting an element
              console.log(empJobs)

        </script>

```
The output of the above code is :

```js
 {{…} => "Developer"}
```
## WeakMap

Weakmap is a small subset of map. Keys are weakly referenced , so it can be non primitive only.If there are no reference to the object keys ,it will be subject to garbage collection.
- not iterable
- every key is object type

The weak map will allow garbage collection if the key has no reference.

### Syntax
```
new WeakMap([iterable])

```

### Illustration

```html
  
    <script>

        let emp = new WeakMap();
       emp.set(10,'Sachin');// TypeError as keys should be object
        
    </script>
```

### Illustration

```html
 
    <script>

        let empMap = new WeakMap();
      // emp.set(10,'Sachin');// Error as keys should be object
      let e1= {ename:'Kiran'},
          e2 = {ename:'Kannan'},
          e3 = {ename:'Mohtashim'}

        empMap.set(e1,1001);
        empMap.set(e2,1002);
        empMap.set(e3,1003);

        console.log(empMap)
        console.log(empMap.get(e2))
        console.log(empMap.has(e2))
        empMap.delete(e1)
        console.log(empMap)
        
    </script>

```

The output of the above code is :

```js
{{…} => 1002, {…} => 1003, {…} => 1001}
1002
true
{{…} => 1002, {…} => 1003}

```

## Set

A set is an unordered collection of unique values.This datastructure can contain values of primitive and object types.

### Syntax 
```js
 new Set([iterable])
 new Set()
```

### Illustration
```html
<script>
 let names= new Set(['A','B','C','D']);
    console.log(names)
</script>

```

The output of the above code is : 

```js
{"A", "B", "C", "D"}

```

### Checking the size of a set
The size property of the Set object can be used to query the number of elements in the Set.

**Syntax**
```
set.size
```

**Illustration**
```html
 <script>
    let names= new Set(['A','B','C','D']);
    console.log(names.size)

 </script>
```

The output of the above code is : 

```js
4
```

### Iterating a Set
We can use the forEach and for..of loops to iterate through a Set.This is shown in the example below. 

**Illustration**

```html
<script>

   let names= new Set(['A','B','C','D']);
   
   //iterate using forEach
  console.log('forEach')
  names.forEach(n=>console.log(n))
    
  console.log('for of..')
  
  //iterate using for..of 
  for(let n of names){
        console.log(n)
    }
  </script>
  ```
  The output of the above code is : 

```js
forEach
A
B
C
D
for of..
A
B
C
D

```

The following methods can be used to manipulate a set:

|#Sr.No |  Object    | Map|
|:----:|:----------|:-------|
| 1 |  add(element)  | Adds an element to the Set
| 2 |  has(element)  | Returns true if element found;else returns false
| 3 |  delete(element)  | Delete specific element from the Set
| 4 |  clear()  | Clears all elements from the Set


### add()

Adds an element to the set

**Syntax**
```
set_name.add(value)

```
where

*value* is the value to add to the Set


**Illustration**

```html
<script>

  let s = new Set([{
            ename:'Smith'
        },{
            ename:'Kannan'
        }])
        console.log(s)

        let students =new Set();
        students.add('Varun');
        students.add('Prijin');
        students.add('Navya');
        students.add('Kannan') //chaining
                .add('Raj')
                .add('Koshy')
                .add('Sudhakaran');  
        console.log(students)
    </script>

```
The output of the above code is : 

```js
 {{…}, {…}}
 {"Varun", "Prijin", "Navya", "Kannan", "Raj", …}
```

### has()
Returns true if element found;else returns false

**Syntax**
```
set_name.has(value)

```
where,

*value* is the value to search for in the Set

**Illustration**

```html
<script>

    let names= new Set(['A','B','C','D']);
    console.log(names.has('B'))

</script>

```
The output of the above code is : 

```js
true
```

### delete
Delete specific element from the Set

**Syntax**
```
set_name.delete(value)

```
where,

*value* is the value to delete from the Set

**Illustration**

```html
<script>

    let names= new Set(['A','B','C','D']);
    console.log(names)
    names.delete('A')
    console.log(names)

</script>

```
The output of the above code is : 

```js
{"A", "B", "C", "D"}
{"B", "C", "D"}
```

### clear()
Clears all elements from the Set

**Syntax**
```
set_name.clear()

```

**Illustration**

```html
<script>

   let names= new Set(['A','B','C','D']);
   console.log(names)
   names.clear();
   console.log(names)

</script>

```
The output of the above code is : 

```js
 {"A", "B", "C", "D"}
 {}
```

## Weak Set

A Weak set holds objects only.It holds objects weakly,that meany object stored in a weak set are subject to garbage collection,if they are not referenced. Weak Sets are not iterable and do not have the get method.

 ```html
    <script>

 let e1 = {ename:'A'}
 let e2 ={ename:'B'}
 let e3 ={ename:'C'}

 let emps = new WeakSet();
 emps.add(e1);
 emps.add(e2)
     .add(e3);

console.log(emps)
console.log(emps.has(e1))
emps.delete(e1);
console.log(emps)
</script>

 ```
 
 The output of the above code is : 

```js
WeakSet {{…}, {…}, {…}}
 true
WeakSet {{…}, {…}}
```
