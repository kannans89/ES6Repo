
# ES6 Syntax Changes

## Destructuring an array

Destructuring refers to extracting individual values from an array or an object into distinct variables. Consider a scenario where the values of an array needs to be assigned to individual variables. The traditional way of doing this is given below : 

```
var a= array1[0]
var b= array1[1]
var c= array1[2]

```
Destructuring helps to achieve the same in a concise way. 


### Syntax 

```
//destructuring an array

let [variable1,variable2]=[item1,item2]

//destructuring an object

let {property1,property2} = {property1:value1,property2:value2}

```

### Illustration

```html

<script>

     let names = ['Mohtashim','Kannan','Kiran']
     let [n1,n2,n3] = names;

     console.log(n1)
     console.log(n2)
     console.log(n3);

     //rest operator with array destructuring
     let locations=['Mumbai','Hyderabad','Chennai']
     let [l1,...otherValues] =locations
     console.log(l1)
     console.log(otherValues)
    
     //variables already declared
     let name1,name2;
     [name1,name2] =names
     console.log(name1)
     console.log(name2)

     //swapping 
     let first=10,second=20;
     [second,first] = [first,second]
     console.log("second is ",second) //10
     console.log("first is ",first) //20


    </script> 

```

The output of the above code is : 

```
Mohtashim
Kannan
Kiran
Mumbai
["Hyderabad", "Chennai"]
Mohtashim
Kannan
second is  10
first is  20

```


## Destructuring an object

When destructuring an object the variables names and the object property names must match.

### Illustration 

```html
 <script>
let student = {
       rollno:20,
       name:'Prijin',
       cgpa:7.2
   }

 //destructuring to same property name
  let {name,cgpa} = student

  console.log(name)
  console.log(cgpa)

 //destructuring to different name

 let {name:student_name,cgpa:student_cgpa}=student
 console.log(student_cgpa)
 console.log("student_name",student_name)
</script>

```
The output of the above code is : 

```
Prijin
7.2
7.2
student_name Prijin
```

### Illustration

If variable is already declared ,then the destructuring object syntax will  be surrounded by `()` as shown in the example ` ({rollno} = student)`

```html
  <script>
   let student = {
       rollno:20,
       name:'Prijin',
       cgpa:7.2
   }

  // destructuring to already declared variable
  let rollno;

   ({rollno} = student)
   console.log(rollno)

  // assign default values to variables

  let product ={ id:1001,price:2000} //discount is not product property

  let {id,price,discount=.10} = product
  console.log(id)
  console.log(price)
  console.log(discount)


```

ouput:

```html
20
1001
2000
0.1
```

### Illustration

The below example shows the use of rest operator while destructuring,  how to destruct  nested objects .

```html
<script>
// rest operator with object destructuring

   let customers= {
       c1:101,
       c2:102,
       c3:103
   }

  let {c1,...others} = customers
  console.log(c1)
  console.log(others)

  //nested objects
  let emp = {
       id:101,
       address:{
           city:'Mumbai',
           pin:1234
       }
  }

let {address} = emp;
console.log(address)

let {address:{city,pin}} = emp
console.log(city)

  </script>


```

The output of the above code is : 

```
101
{c2: 102, c3: 103}
{city: "Mumbai", pin: 1234}
Mumbai
```
