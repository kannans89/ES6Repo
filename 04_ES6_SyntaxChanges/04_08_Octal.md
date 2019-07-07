# ES6 Syntax Changes

## Octal and  Binary Literals
Prior to ES6, there was no support for binary literals. ES6 added support for binary literals and changed the representation for octal literals.Prior to ES6, octal literals were represented using the prefix `0`.In ES6, octal literals and binary literals are represented by using the prefix `0o` and `0b` respectively.

### Illustration
The following example illustrates octal literal in ES5 and ES6.
```html
<script>

       //octal in ES5
       var old_octal_style = 010 //octal base 8
        console.log(old_octal_style) // decimal base 10


        //octal in ES6

         let  new_octal_style = 0o10;// octal
         console.log(new_octal_style)
</script>

```

Output: 

```
//output goes here...

```


### Illustration
The following example illustrates binary literal in ES5 and ES6.

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

Output: 

```
3
3
```
