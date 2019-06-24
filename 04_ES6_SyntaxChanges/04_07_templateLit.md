
# ES6 Syntax Changes

## Template literal

Template literals are string literals which allows embedded expressions.Template literals will be enclosed by backticks `\`` character.
Let us see an example

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

### Expression interpolation in template literal

The major differnece between normal string and tmeplate literal is substitution expression.This allows us to embed any variable or expression inside a template and output result as part of the string.This is denoted by `${}`

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