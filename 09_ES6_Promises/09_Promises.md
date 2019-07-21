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
The below example shows a function `add_positivenos_async()` which add two numbers asynchronously .If positvie values are passed pormise is resolved adn if negatives are passed promise is rejected.

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
end
Handling success 30
Handling error NOT_Postive_Number_Passed
```

## Promises Chaining
Promises chaining can be used when we have a sequence of asynchronous tasks to be done one after another. Promises are chained when a promise depends on the result of another promise. This is shown in the example below: 

### Illustration

In the below example `add_positivenos_async()` function adds two numbers asynchronously and rejects if negative values are passed.The result from first call to `add_positivenos_async(10,20)` is 30 , it is used to chain next call which is `add_positivenos_async(30,30)` .Subsequent calls are made from result from previous promise call.Note each `then()` method have a `return` statement.

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
end
first result 30
second result 60
third result 120
```

**promise.all()**

The below example executes an array of asynchronous operations `[add_positivenos_async(10,20),add_positivenos_async(30,40),add_positivenos_async(50,60)]` ,when all the operations are completed promise is fully resolved.

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
              //Promise.all(iterable)
               Promise.all([add_positivenos_async(10,20),add_positivenos_async(30,40),add_positivenos_async(50,60)])
               .then(function(resolveValue){
                  console.log(resolveValue[0])
                  console.log(resolveValue[1])
                  console.log(resolveValue[2])
                  console.log('all add operations done')
               })
               .catch(function(err){
                   console.log('Error',err)
               })
              console.log('end')
 </script>

```


output is shown

```js
end
30
70
110
all add operations done

```

**promise.race()**

The below example takes an array `[add_positivenos_async(10,20),add_positivenos_async(30,40)]` of asynchronous operations .Which ever add operation completes first will be resolved.This will not wait for all asynchronous operations to complete

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
        
                      //Promise.race(iterable)
               Promise.race([add_positivenos_async(10,20),add_positivenos_async(30,40)])
               .then(function(resolveValue){
                  console.log('one of them is done')
                  console.log(resolveValue)

               }).catch(function(err){
                   console.log("Error",err)
               })
                console.log('end')
            </script>
```

output is shown

```js
end
one of them is done
30

```