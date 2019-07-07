
# ES6 Syntax Changes

## Template literal

ES6 introduces template literals.Template literals are enclosed by the back-tick ` ` (grave accent)  character.

Template literals are enclosed in the  using the Template strings provide the following advantages over string literals: 
- Unlike string literals, template literals do not require the new-line character *\n* for extending strings across a single-line.
- Template literals can incorporate both single and double quotes in a string without having to escape them.
- Template literals allows embedded expressions. The major differnece between normal string and tmeplate literal is substitution expression.This allows us to embed any variable or expression inside a template and output result as part of the string.This is denoted by `${}` These expressions are evaluated at run-time. 

The syntax for using  a template literal is given below: 

### Syntax

```js
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

## Tagged Templates

 A tag is a function which can interpret and process a template literal. A tag appears in front  of the  template literal.Syntax is shown below.

 ```js
   let output_fromTag = tagFunction `Template literal with ${variable1} , ${variable2}`
 ```

The tag function implementation syntax is blow

```js
function tagFunction(literals,...variable_values){
    //process
    return "some result"
}

```

## Illustraion 1


```html
<script>
         function myTagFn(literals,...values){

            console.log("literal values are");
            for(let c of literals){
                console.log(c)
            }

            console.log("variable values are ");
            for(let c of values){
                console.log(c)
            }

            return "Done"
         }
         let company = `TutorialsPoint`
         let   company_location = `Mumbai`
         let result = myTagFn `Hello this is ${company} from ${company_location}`

         console.log(result)
        
    </script>

```

output is : The result from tag function is `Done`

```js
literal values are
 Hello this is 
  from

 variable values are 
 TutorialsPoint
 Mumbai
 Done

```


## Illustraion 2:

The below tag function takes a template literal and converts it to upper case as shown.

```html
 <script>
        function convertToUpperTagFn(literals, ...values) {

            let result = "";

            for (let i = 0; i < literals.length; i++) {
                result += literals[i];
                if (i < values.length) {
                    result += values[i];
                }
            }

            return result.toUpperCase();
        }
        let company = `TutorialsPoint`
        let company_location = `Mumbai`
        let result = convertToUpperTagFn `Hello this is ${company} from ${company_location}`

        console.log(result)

    </script>


```

output: `HELLO THIS IS TUTORIALSPOINT FROM MUMBAI`
