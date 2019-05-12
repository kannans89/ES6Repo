# ES6 Syntax Changes

## Constant

`const` keyword in ES6 allows js programmers to declare and initialize a constant.Constant are declared by convention capital cases with underscore as separator of words

### Syntax

```js
  const VARIABLE_NAME = value
```

### Example 1

```html
     <script>
           const INCOME_TAX_RATE = 0.18;
           let salary = 300000;
           console.log("Deductions is ",salary*INCOME_TAX_RATE)
     </script>

```

output is `Deductions is  120000`

### Example 2

Constants are immutable unlike let , that means its value cannot be changed.For example in below example if we try to change value of constant variable the following error will be displayed.

```html
  <script>
        let income = 100000
        const INTEREST_RATE = 0.08
        income += 50000 // mutable
        console.log("changed income value is ",income)
        INTEREST_RATE += 0.01
        console.log("changed rate is ",INTEREST_RATE) //Error: not mutable
    </script>

```

output is shown below

```js
changed income value is  150000
Uncaught TypeError: Assignment to constant variable
```

### Example 3 - const and arrays

Following example shows how to assign array to a constant variable.The array contents are allowed to be modified but reassigning the same `const` variable to a new array will give error as shown below.

```html
 <script>
         const DEPT_NOS = [10,20,30,50]
         DEPT_NOS.push(40)
         console.log('dept numbers is ',DEPT_NOS)

         const EMP_IDS = [1001,1002,1003]
         console.log('employee ids',EMP_IDS)
         //re assigning variable employee ids
         EMP_IDS = [2001,2002,2003]
         console.log('employee ids after changing',EMP_IDS)
    </script>
```

In above example we are pushing values to a const array DEPT_NOS.Also when we try to re initialize the constant array EMP_IDS ,it gives error.

```js
dept numbers is  (5) [10, 20, 30, 50, 40]
employee ids (3) [1001, 1002, 1003]
Uncaught TypeError: Assignment to constant variable.
```