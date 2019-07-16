# Maps and Sets
ES6 introduces two new data structures- maps and sets.

## Maps
A map is an ordered collection of key-value pairs. Maps are similar to objects. However, there are some differences between maps and objects. These are listed below : 

|#Sr.No |  Object    | Map|
|:----:|:----------|:-------|
| 1 |    keys cannot be Object type  | Keys can be any type
| 2 |   keys are not ordered  | Keys are ordered
| 3 |   not iterable  | iterable


//is this needed?
Objects are much similar to maps.Since there was no maps available objects were used like maps to store key and value as shown below

```html
  <script>
        //key and values using object
        let customer = {
            id:101, //id is key , 101 is value
            name:'Kannan',
            location:'Chennai'
        }
        console.log(customer['location']) 
        console.log(customer['name'])
    </script>
```

### Syntax

 ```html
   let map= new Map([iterable])
   let map= new Map()
 ```

### Illustration: 
//create a simple map 

### Checking size of the map

The size property can be used to determine the number of values stored in the map.

**Syntax**
```
```

**Illustration**
```

```
 The output of the above code is : 
 
 ```
 
 ```

Following are some common methods that can be used to manipulate maps :

|#Sr.No |  Object    | Map|
|:----:|:----------|:-------|
| 1 |    set(key,value)  | adds key and value to map
| 2 |    get(key)  | returns value if key is matched
| 3 |    has(key)  | returns true if  key is matched
| 4 |    keys()  | returns an iterator to iterate map keys
| 5 |    values()  | returns an iterator to iterate map values
| 6 |    entries()  | returns an iterator to an array with keys and values
| 7 |    delete(key)  | removes the key from map


### set()
adds key and value to map

**Syntax**
```

```

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

**Illustration**
Example of set uisng the iterable constructor

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

### get()
returns value if key is matched

**Syntax**
```
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
                
              let value = empJobs.get(varun)
              console.log(value)
             
              console.log(empJobs.size)
        </script>

```
### has()
returns true if  key is matched


**Syntax**
```
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
                
              console.log(empJobs.has(prijin))
              console.log(empJobs.size)
        </script>

```

### keys()
returns an iterator to iterate map keys

**Synatx**
```

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

### values()
returns an iterator to iterate map values

**Syntax**
```
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

### entries() 
returns an iterator to an array with keys and values

**Syntax**
```
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

### delete()
removes the key from map

**Syntax**
```
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
                
               empJobs.delete(andy) //deleting an element
              console.log(empJobs)

        </script>

```

## WeakMap

Weakmap is a small subset of map. Keys are weakly referenced , so it can be non primitive only.If there are no reference to the object keys ,it will be subject to garbage collection.
- not iterable
- every key is object type

The weak map will allow garbage collection if the key has no reference.

### Syntax
```

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

## Set

A set is an unordered collection of unique values.This datastructure can contain values of primitive and object types.

### Syntax 
```js
 new Set([iterable])
 new Set()
```

### Illustration
//simple set 

### Checking the size of a set

**Syntax**
```
```

**Illustration**
```

```

### Iterating a Set

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

The following methods can be used to manipulate a set.

|#Sr.No |  Object    | Map|
|:----:|:----------|:-------|
| 1 |    add(element)  | adds an element to set
| 2 |    has(element)  | returns true if element found
| 3 |    delete(element)  | delete specific element
| 4 |    clear()  | clears all elements in set


### add()
adds an element to the set

**Syntax**
```
```

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

     
        

    </script>

```

### has()
returns true if element found

**Syntax**
```
```

**Illustration**

```html
<script>

    let names= new Set(['A','B','C','D']);
    console.log(names.has('B'))

</script>

```

### delete
delete specific element

**Syntax**
```
```

**Illustration**

```html
<script>

    let names= new Set(['A','B','C','D']);
    console.log(names)
    names.delete('A')
    console.log(names)

</script>

```

### clear()
clears all elements in set

**Syntax**
```

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
