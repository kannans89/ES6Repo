
# ES6 Syntax Changes

## Template literal

ES6 introduces template literals.Template literals are enclosed by the back-tick ` ` (grave accent)  character.

Template literals are enclosed in the  using the Template strings provide the following advantages over string literals: 
- Unlike string literals, template literals do not require the new-line character *\n* for extending strings across a single-line.
- Template literals can incorporate both single and double quotes in a string without having to escape them.
- Template literals allows embedded expressions. The major differnece between normal string and tmeplate literal is substitution expression.This allows us to embed any variable or expression inside a template and output result as part of the string.This is denoted by `${}` These expressions are evaluated at run-time. 

The syntax for using  a template literal is given below: 

### Syntax

```
//simple template literal
`string text`

//multi-line string in a template literal
`string text line 1
 string text line 2`
 
 //template literal with embedded expression
 `string text ${expression} string text`

```

### Illustration

The following example uses template literal to represent a multi-line string value. 

```html
 <script>
     let text = `welcome to modern javascript`
     console.log(text)

     let multilineText = `
                   Hello 
                   TutorialsPoint
                   is fun to learn !!
                `
                console.log(multilineText)


</script>

```

The output of the above code is : 

```
welcome to modern javascript

                   Hello 
                   TutorialsPoint
                   is fun to learn !!
```

### Illustration

The following example illustrates expression interpolation in  a template literal.

```html

        <script>
                
                //interpolation

                let firstName='Mohtashim',
                    company = 'TutorialsPoint'

                let message = ` Hello , ${firstName}  how is  ${company} !!`
                console.log(message)

                let price=100,tax=.50;
                let totalCost = `The total is ${price+(price*tax)}`
                console.log(totalCost)
                 
           </script>
```

The output of the above code is : 

```
 Hello , Mohtashim  how is  TutorialsPoint !!
The total is 150
```

//should we include tagged template literals ??
