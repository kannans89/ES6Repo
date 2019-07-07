# ES6 Syntax Changes

## Constant

The `const` keyword creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be re-declared.

The following rules hold true for a variable declared using the const keyword −
- Constants cannot be reassigned a value.
- A constant cannot be re-declared.
- A constant requires an initializer. This means constants must be initialized during its declaration.
- The value assigned to a const variable is immutable.

### Syntax

```js
  const VARIABLE_NAME = value
```

### Illustration

```html
     <script>
           const INCOME_TAX_RATE = 0.18;
           let salary = 300000;
           console.log("Deductions is ",salary*INCOME_TAX_RATE)
     </script>

```

Output:  

`Deductions is  120000`

## Constants are Immuatble

Unlike variables declared using `let` keyword,constants are immutable unlike let , that means its value cannot be changed.For example in the below example if we try to change value of the constant variable the an error will be displayed.

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

Output :

```js
changed income value is  150000
Uncaught TypeError: Assignment to constant variable
```

### const and arrays

Following example shows how to create an immutable array.New elements can be added to the array. However, reinitializing the array will result in an error as shown below.

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

The above example declares a constant array. A new element can be added to the array.However, when we try to re initialize the constant array EMP_IDS ,it gives error.

```js
dept numbers is  (5) [10, 20, 30, 50, 40]
employee ids (3) [1001, 1002, 1003]
Uncaught TypeError: Assignment to constant variable.
```
