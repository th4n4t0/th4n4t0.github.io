---
layout: page
title: Funtions
publish: true
description: Python Beginner
permalink: functions
---

A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result.

Python a function is defined using the `def` keyword.

```python3
def my_function():
  print("Hello World!")
```

## Calling a Function

A function call can be made using the function name followed by parenthesis`()`

```python3
def my_function():
  print("Hello World!")

# function call

my_function()
```

Information can be passed into functions as arguments. Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.

```python3

def my_function(name1, name2):
  print(name1 + " " + name2)

my_function("Sam", "Tom")

```

- If you try to call the function with out full arguments, you will get an error:

# Arbitrary Arguments, `*args`

If you do not know how many arguments that will be passed into your function, add a `*` before the parameter name in the function definition.

This way the function will receive a tuple of arguments, and can access the items accordingly:

```python3

def my_function(*kids):
	a=list(kids)
	print(a)

my_function("Edger", "Sam", "Rahul")

['Edger', 'Sam', 'Rahul']

```

- You can also send arguments with the key = value syntax.

# Arbitrary Keyword Arguments, `**kwargs`

If you do not know how many keyword arguments that will be passed into your function, add two asterisk: `**` before the parameter name in the function definition.

```python3

def my_function(**kid):
    print(f"His first name is {kid['fname']}")


my_function(fname="Sam", lname="Tom")

His first name is Sam

```

[Top](#)

[Back](/contents)
