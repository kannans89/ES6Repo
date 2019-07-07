
# ES6 Syntax Changes

## Object literal Extension

ES6 introduces following syntax changes in object literals declaration.

- Object property initializer syntax
- computed properties syntax
- concise method syntax
  
### Object property initializer 

In object property initializer syntax , we can initalize an object directly with variables .This will create attributes which have same name of the variables as shown.

```html
 <script>
        let firstName='Tutorials',lastName='Point'

        let company={
            firstName,
            lastName
        }

        console.log(company)
        console.log(company.firstName)
        console.log(company.lastName)
        
    </script>
```

output is shown below

```js
{firstName: "Tutorials", lastName: "Point"}
Tutorials
 Point

```

### Computed Properties

In computed properties syntax the property of object can be dynamically created from variables.Example shows a `suffix` variable value is used to compute the `company` object.

```html
<script>
        let suffix='Name'

        let company= {
            ['first'+suffix]:'Tutorials',
            ['last'+suffix]:'Point'
        }

        console.log(company)
        console.log(company['firstName'])
        console.log(company['lastName'])
    </script>

```

output is shown below

```js
{firstName: "Tutorials", lastName: "Point"}
Tutorials
Point
```

### Concise method syntax

In Concise methods syntax we can use method name directly without the use of `function` keyword if we want to attach a function with an object lieral.This is simplified  syntax to add function to object literal.

```html

<script>
    let firstName='Tutorials',lastName='Point'

    let company={
        firstName,
        lastName,
        getFullName(){
            return this.firstName+" - "+this.lastName
        }
    }
    console.log(company.getFullName())
    console.log(company)
</script>

```

output:

```js
Tutorials - Point
{firstName: "Tutorials", lastName: "Point", getFullName: ƒ}
```
