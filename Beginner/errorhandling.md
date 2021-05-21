---
layout: page
title: Error handling
publish: true
description: Python Beginner
permalink: errorhandling
---

Python has many built-in exceptions that are raised when your program encounters an error (something in the program goes wrong). When these exceptions occur, the Python interpreter stops the current process and passes it to the calling process until it is handled. If not handled, the program will crash.

Error handling in python is mainly handled by `try`, `except` and `finally`

- The `try` block lets you test a block of code for errors.

- The `except` block lets you handle the error.

- The `finally` block lets you execute code, regardless of the result of the `try` and `except` blocks.

```python3

#The try block will generate a NameError, because x is not defined:

try:
  print(x)
except:
  print("Variable x is not defined")

# output

Variable x is not defined

```

- We can define as many exception blocks as you want, i.e if we want to execute a special block of code for a special kind of error.

```python3

try:
  print(x)

except NameError:

# block for NameError

  print("Variable x is not defined")

except:

# block for Other exception

  print("Something else went wrong")

```

# Else

We can use the `else` keyword to define a block of code to be executed if no errors were raised.

```print3

try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")


# Output

Hello
Nothing went wrong
```

# Finally

The `finally` block, if specified, will be executed regardless if the try block raises an error or not.

```python3

try:
  print(x)
except:
  print("Something went wrong")
finally:
  print("The 'try except' is finished")

#Output
Something went wrong
The 'try except' is finished
```

# Raise an exception

As a Python developer you can choose to throw an exception if a condition occurs. To throw (or raise) an exception, use the raise keyword.

```python3

# Raise an error and stop the program if x is lower than 0:

x = -1

if x < 0:
  raise Exception("Sorry, no numbers below zero")

```

![Exceptions](/Beginner/error.gif)

[Top](#)

[Back](/python_beginner)