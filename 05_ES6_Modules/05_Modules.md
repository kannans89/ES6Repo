# Modules
Consider a scenario where parts of JavaScript code need to be reused. ES6 comes to your rescue with the concept of Modules.

A module organizes a related set of JavaScript code.A module can contain variables and functions.A module is nothing more than a chunk of JavaScript code written in a file.  
By default, variables and functions of a module are not available for use.Variables and functions within a module should be exported so that they can be accessed from within other files. Modules in ES6 work only in `strict mode`. This means variables or functions declared in a module will not be accessible globally.

## Exporting a Module
The `export` keyword can be used to export components in a module. 

### Exporting a Single Component

**Syntax**

```js
export component_name
```

### Exporting Multiple Components
When importing multiple components,we can use multiple export statements or a single `export` with `{}` binding syntax. 

**Syntax**

```js
export component1
export component2
...
...
export componentN

```

OR

```js
export {component1,component2,....,componentN}
```

In the second syntax, multiple components are exported using a single export statement. The module components are all grouped inside the `{}` syntax and seperated by a comma.



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
## Importing a Module
To be able to consume a module, use the `import` keyword. Single and multiple components can be imported from a module. We can import selected components or all components from a module. 

### Importing Selected Components from Module

**Syntax**

```js

import {component1,component2..componentN} from module_name

```

### Importing All Components from a Module

Use the asterisk `*` operator to import all components from a module.

**Syntax**

```js

import * as variable_name from module_name

```

Use the syntax given below to access an imported variable or function in the current file.

**Syntax**

```js

variable_name.component_name

```

## Illustration 1: 
**Step 1** Create a file company1.js and add the following code

```js

let company = "TutorialsPoint"

 let getCompany = function(){
    return company.toUpperCase()
}

 let setCompany = function(newValue){
    company = newValue
}

export {company,getCompany,setCompany}

```

**Step 2** Create a file company2.js. This file consumes components defined in the company1.js file. Add the following code- 

```js
 
 import {company,getCompany} from './01_company.js'

console.log(company)
console.log(getCompany())

```
The above code can also be written as given below - 

```js

import * as myCompany from './01_company.js'
//namespace import
console.log(myCompany.getCompany())
console.log(myCompany.company)

```

**Step 3** Execute the modules using an HTML file 

To execute both the modules we need to make an html file as shown below and run this in live server.Note that we should use the attribute `type="module"` in the script tag.

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

**Output**

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
