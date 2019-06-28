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
let company = "TutorialsPoint"

 let getCompany = function(){
    return company.toUpperCase()
}

 let setCompany = function(newValue){
    company = newValue
}

export {company,getCompany,setCompany}

```

-- Review this---
## Default module and non default modules

when importing default and non default items from a module , first specify the default and non defulat will be with `{}` binding expression.
