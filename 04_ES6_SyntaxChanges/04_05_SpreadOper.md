# ES6 Syntax Changes

## SpreadOperator

ES6 provides a new operator called the spread operator.The spread operator is represented by three dots `...` . The spread operator converts an array into individual array elements.

### Spread operator and  function

**Illustration**

```html

 <script>
     function addThreeNumbers(a,b,c){
         return a+b+c;
     }

     const arr = [10,20,30]
     console.log('sum is :',addThreeNumbers(...arr))
     console.log('sum is ',addThreeNumbers(...[1,2,3]))
    </script>

```

Output: 


### Spread operator and Array copy and concat
The spread operator can be used to copy one array into another. It can also be used to concatenate two or more arrays.This is shown in the example below: 

**Illustration**

```html
<script>

     //copy array using spread operator
      let source_arr = [10,20,30]
      let dest_arr = [...source_arr]
      console.log(dest_arr)

      //concatenate two arrays
      let arr1 = [10,20,30]
      let arr2 =[40,50,60]
      let arr3 = [...arr1,...arr2]
      console.log(arr3)

</script>

```

Output



### Spread Operator and Object copy and concat
The spread operator can be used to copy one object into another. It can also be used to concatenate two or more objects.This is shown in the example below:

**Illustration**

```html
  <script>

      //copy object
      let student1 ={firstName:'Mohtashim',company:'TutorialsPoint'}
      let student2 ={...student1}
      console.log(student2)
      //concatenate objects
      let student3 = {lastName:'Mohammad'}
      let student4 = {...student1,...student3}
      console.log(student4)
</script>

```

Output
