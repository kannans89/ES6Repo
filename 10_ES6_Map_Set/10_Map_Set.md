# Maps and Sets
ES6 introduces two new data structures- maps and sets.

## Maps
A map is a collection of key-value pairs. Maps are similar to objects. However, there are some differences between maps and objects. These are listed below : 

//clarify here 
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



Following are some common methods that can be used to manipulate maps :

|#Sr.No |  Object    | Map|
|:----:|:----------|:-------|
| 1 |    set(key,value)  | adds key and value to map
| 2 |    get(key)  | returns value if key is matched
| 3 |    has(key)  | returns true if  key is matched
| 4 |    size  | returns count of elements in map
| 5 |    keys()  | returns an iterator to iterate map keys
| 6 |    values()  | returns an iterator to iterate map values
| 7 |    entries()  | returns an iterator to an array with keys and values
| 8 |    delete(key)  | removes the key from map


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

### has()
Example keys() method

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

Example values() method

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

Example of entries() and delete()


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

              empJobs.delete(andy) //deleting an element
              console.log(empJobs)

        </script>

```


## WeakMap

Weakmap is a small subset of map.Keys are weakly referenced , so it can be non primitive only.If there are no reference to the object keys ,it will subject to garbage collection.
- not iterable
- every key is object type

The weak map will allow garbage collection if the key has no reference.

```html
  
    <script>

        let emp = new WeakMap();
       emp.set(10,'Sachin');// TypeError as keys should be object
        
    </script>
```


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

Set datastructure help to store set of unique values both primitive and objects.

syntax 
```js
 new Set([iterable])
 new Set()
```

|#Sr.No |  Object    | Map|
|:----:|:----------|:-------|
| 1 |    add(element)  | adds element to set
| 2 |    has(element)  | returns true if element found
| 3 |    size  | returns number of elements in set
| 4 |    delete(element)  | delete specific element
| 5 |    clear()  | clears all elements in set


Example of add method


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

Other exmaples are shown below

```html
<script>


    let names= new Set(['A','B','C','D']);
    console.log(names.has('B'))
    console.log(names.size)
    //iterate
    names.forEach(n=>console.log(n))
    
    console.log('for of..')
    for(let n of names){
        console.log(n)
    }
   //delete
    names.delete('A')
   console.log(names)

   //clear

   names.clear();
   console.log(names)
</script>

```

## Weak Set

 Weak sets holds objects only.It holds objects weakly,that meany object held in weak set are subject to garbage collection,if they are not referenced.Not iterable and no get method.

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
