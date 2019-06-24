# Object Extensions

## String extension

```html
<script>
        let company='TutorialsPoint'
        console.log(company.startsWith('Tutorial'))
        console.log(company.endsWith('Point'));
        console.log(company.includes('orial'))
        //with parameter

        console.log(company.startsWith('orial',3)) // 3 is index
        console.log(company.endsWith('Tutor',5))//5 is length of string


    </script>
```

The repeat method repeats the string and concatenates together as per the specified times .

```html
<script>
  //   //repeat method

       let name="Kiran-"
      console.log(name.repeat(3));
</script>

```

Regex extensions

```html
   <script>
   let str = 'Javascript is  Fun to Work , very Fun '
   let regex = /[A-Z]/g  // g stands for global matches 
   let result = str.match(regex);
   console.log(result)


      // /gi global match ignore case
    
   let str = 'Javascript is  fun to Work , very Fun '
   let regex = /Fun/gi;
   console.log(str.replace(regex,'enjoyable'));
   console.log(str)
   console.log(str.search(regex))

 
</script>

```

## Number

Number.isfinite
Number.isNaN


## Math

## Array
 Array.from() method creates a shallow copy from an array like or iterable object.


## Object
