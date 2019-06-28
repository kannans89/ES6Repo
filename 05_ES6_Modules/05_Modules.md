# Modules

A module organizes a related set of JavaScript code written in a file.A module can contain variables and functions. By default, variables and functions of a module cannot be accessed outside the module.Variables and functions within a module should be exported so that they can be accessed from within other files. Modules in ES6 work only in `strict mode`. This means variables or functions declared in a module will not be added in global scope.

## export and import

The `export` keyword can be used to export single / multiple components in a module. 
When importing multiple components,we can use multiple export statements or a single `export` with `{}` binding syntax. 

### Multiple export statements

**Syntax**

```js
export component_name
```

The following example defines a module with a variable and two functions. These components are individually exported using the `export` keyword.

```js

export let company = "TutorialsPoint"

export let getCompany = function(){
    return company.toUpperCase()
}

export let setCompany = function(newValue){
    company = newValue
}

```

### Syntax 2: Single export statement

**Syntax**

```js
export {component1,component2,....,componentN}
```
Multiple components can be exported using a single export statement. The module components are all grouped inside the `{}` syntax, seperated by a comma.

The following example defines a module with a variable and two functions.All the components in the module are exported using a single `export` statement. 

```js
 //file name: 01_company.js
let company = "TutorialsPoint"

 let getCompany = function(){
    return company.toUpperCase()
}

 let setCompany = function(newValue){
    company = newValue
}

export {company,getCompany,setCompany}

```

## Import Syntax



now import this in another module as shown

### Syntax 1
```js
 //file name:02_company.js
import {company,getCompany} from './01_company.js'

console.log(company)
console.log(getCompany())

```

### Syntax 2
 
   ```js
import * as myCompany from './01_company.js'
//namespace import
console.log(myCompany.getCompany())
console.log(myCompany.company)
 ```

To execute both the modules we need to make an html file as shown below and run this in live server.Note in the script tag we should use attribute `type="module"`  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="./02_company.js" type="module"></script>
</body>
</html>
```

output is shown below:

```js
TutorialsPoint
TUTORIALSPOINT
```

-- Review this---
## Create Default module

```js
 //file name :01_default.js

let name = 'TutorialsPoint'

let company = {
    getName:function(){
        return name
    },
    setName:function(newName){
        name =newName
    }

}
//one per module
export default company
```

## Import default module

```js
//file name:02_default.js
import company from './01_default.js'

console.log(company.getName())
company.setName('Google Inc')
console.log(company.getName())

```

## Execute the modules

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="02_default.js" type="module"></script>
</body>
</html>
```

output is shown below

```js
TutorialsPoint
Google Inc
```

## Combining Default and Non Default Modules

### export

```js
//file name: 01_default.js
export let name = 'TutorialsPoint'

let company = {
    getName:function(){
        return name
    },
    setName:function(newName){
        name =newName
    }

}
//one per module
export default company
```

### import


when importing default and non default items from a module , first specify the default followed by non defulat with `{}` syntax

```js
//file name: 02_default.js
 // import firstDefault and then non default components
import company, {name} from './01_default.js'

console.log(name)
console.log(company.getName())
company.setName("Mohtashim")
console.log(company.getName())
```


### Execute

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="02_default.js" type="module"></script>
</body>
</html>

```