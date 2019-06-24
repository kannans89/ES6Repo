
# ES6 Syntax Changes

## Object literal Extension

- Object property initializer syntax
- computed properties
- concise method syntax
  
### Object property initializer 


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

### Computed Properties

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

### Concise method syntax

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
</script>

```
