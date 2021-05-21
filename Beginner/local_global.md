---
layout: page
title: Local-Global variables
publish: true
description: Python Beginner
permalink: local_global
---

The `global` keyword is used to create global variables from a no-global scope, e.g. inside a function and local variables can be created by just declaring them

```python3

x = "global"

def foo():
    print("x inside:", x)


foo()
print("x outside:", x)

# Output

x inside: global
x outside: global

```

# Non local variables

The `nonlocal` keyword is used to work with variables inside nested functions, where the variable should not belong to the inner function.Use the keyword `nonlocal` to declare that the variable is not local.

```python3

def myfunc1():
  x = "John"
  def myfunc2():
    nonlocal x
    x = "hello"
  myfunc2()
  return x

print(myfunc1())

# Output

hello

```

![Global Variables](/Beginner/global_variable.gif)

[Top](#)

[Back](/python_beginner)
