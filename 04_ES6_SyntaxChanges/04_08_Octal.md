# ES6 Syntax Changes

## Octal and  Binary Literals

The representation of Ocatal and Binary literals in ES6.In es5


```html
<script>


       var old_octal_style = 010 //octal base 8
        console.log(old_octal_style) // decimal base 10


        //octal in ES6

         let  new_octal_style = 0o10;// octal
         console.log(new_octal_style)
</script>

```

In ES5 javascript doesn't provide any literal form of binary numbers.
To parse a binary string we need to use the parseInt function.For example


```html
<script>

         //Binary literals
         var old_binary_parsing = parseInt('11',2)
         console.log(old_binary_parsing) //evaluates to 3

         //binary in es6
         let new_binary = 0b11//binary base 2
         console.log(new_binary); // decimal base 10
 
    </script>

```