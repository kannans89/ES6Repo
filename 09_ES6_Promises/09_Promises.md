# Promise
Promises are a clean way to implement async programming in JavaScript (ES6 new feature). Promises help you to execute  multiple async operations together in a much cleaner code style as compared to function callbacks.Promise as the name says, promises to return data in future and not at the current moment.Functions which return promises perform operations that may take a while to execute.
A Promise object has three states :
- *pending* :  initial state, neither fulfilled nor rejected
- *resolved* : meaning that the operation completed successfully
- *rejected* : meaning that the operation failed

A promise is completed when it is resolved or rejected.


## Syntax:
```js
 let p =new Promise(function(resolve,reject){
     let workDone=true; // some time consuming work
      if(workDone){
          //invoke resolve function passed
          resolve('success promise completed')
      }
      else{
          reject('ERROR , work could not be completed')
      }
 })
```
where, 

*p* is the promise object
*resolve* is the function  that should be called when the promise executes successfully
*reject* is the function that should be called when the promise encounters an error

## Illustration
//descrioption here....

```html
 <script>

        function add_positivenos_async(n1, n2) {
            let p = new Promise(function (resolve, reject) {
                if (n1 >= 0 && n2 >= 0) {
                    //do some complex time consuming work
                    resolve(n1 + n2)
                }
                else
                    reject('NOT_Postive_Number_Passed')

            })

            return p;
        }

        add_positivenos_async(10, 20)
            .then(successHandler)  // if promise resolved
            .catch(errorHandler);// if promise rejected
        
        add_positivenos_async(-10, -20)
            .then(successHandler)  // if promise resolved
            .catch(errorHandler);// if promise rejected
        

        function errorHandler(err) {
            console.log('Handling error', err)
        }
        function successHandler(result) {
            console.log('Handling success', result)

        }

        console.log('end')
    </script>

```
The output of the above code is : 

```

```

## Promises Chaining
Promises chaining can be used when we have a sequence of asynchronous tasks to be done one after another. Promises are chained when a promise depends on the result of another promise. This is shown in the example below: 

### Illustration

//description... 


```html
 
        <script>

                function add_positivenos_async(n1, n2) {
                    let p = new Promise(function (resolve, reject) {
                        if (n1 >= 0 && n2 >= 0) {
                            //do some complex time consuming work
                            resolve(n1 + n2)
                        }
                        else
                            reject('NOT_Postive_Number_Passed')
        
                    })
        
                    return p;
                }
        
               add_positivenos_async(10,20)
                .then(function(result){
                    console.log("first result",result)
                  return  add_positivenos_async(result,result)
                }).then(function(result){
                    console.log("second result",result)
                       return add_positivenos_async(result,result)
                }).then(function(result){
                    console.log("third result",result)
                })
        
                console.log('end')
            </script>

```
The output of the above code is : 

```

```

//promise.all()
//promise.race()
