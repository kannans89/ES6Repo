
# ES6 Syntax Changes

## Destructuring an array

We will se how to destructure an array into individual variables.Destructuring helps to unpack values from an array or an object into distinct variables.Destructring assigment syntax exmaple is shown below


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

## Destructuring an object

When we destructure an object the variables names and the object property names should match as shown below.

### Example 1:

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

### Example 2:


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

### Example 3:


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

