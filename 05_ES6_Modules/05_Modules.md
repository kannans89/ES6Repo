# Modules

A module stores a related set of javascript code written in a file.Functions and variable of a module are not available outside the module unless it is exported.Modules in ES6 works only in `strict mode`,which means variables or functions will not be added in global scope.

## export and import

We can export a module components using single `export` with `{}` binding syntax or using multiple export statement

### Syntax 1: multiple export

```js

export let company = "TutorialsPoint"

export let getCompany = function(){
    return company.toUpperCase()
}

export let setCompany = function(newValue){
    company = newValue
}

```



### Syntax 2: single export

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

## Default module and non default modules

when importing default and non default items from a module , first specify the default and non defulat will be with `{}` binding expression.