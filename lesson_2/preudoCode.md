# Practicing pseudocode 

### A function that returns the sum of two numbers
```shh
START 

SET num1 = GET
SET num2 = GET 

SET sum = READ num1 + READ num2 

PRINT sum

END
```

### A function that takes an array of strings, and returns a string that is all those strings concatenated together

```ssh
START 

# Given a collection of strings called "arr" 

SET concatString = empty string 

SET iterator = 1
SET savedNum = value within arr collection at space 1

WHILE iterator <= length of arr
  SET currentString = value within arr at space "iterator"
  concatString = conctatString + currentString 

  iterator = iterator + 1

PRINT concatString

END
```

### A function that takes an array of integers, and returns a new array with every other element

```ssh
START 

# Given a collection of integer numbers called "nums" 

SET iterator = 1

SET newArr = empty collection


WHILE iterator <= length of nums
  SET currentNumber = value within nums collection at space "iterator" 
  IF remainder of the division of the space of currentNumber by iterator === 0
    add currentNumber to newArr 
  ELSE 
    skip to next iteration 
  
  iterator = iterator + 1

PRINT newArr

END
```