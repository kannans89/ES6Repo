# ES6 Syntax Changes

## SpreadOperator

ES6 provides a new operator called the spread operator.That consist of of three dots `...` . This helps to spread out the element of an array or a string.For example

### Example 1:Spread operator and  function

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

### Example 2:  array copy and concat

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

### Example 3: Object copy and concat


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