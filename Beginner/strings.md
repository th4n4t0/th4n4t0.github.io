---
layout: page
title: Strings
publish: true
description: Python Beginner
permalink: strings
---

Strings are amongst the most popular types in Python. We can create them simply by enclosing characters in quotes and
assign a multiline string to a variable by using three quotes.

```python3

# Example 1

>>> a = "Hello"
>>> print(a)
Hello

# Using three double quotes

>>> a = """Lorem ipsum dolor sit amet,
>>> consectetur adipiscing elit,
>>> sed do eiusmod tempor incididunt
>>> ut labore et dolore magna aliqua."""
>>> print(a)

Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.

```

## Accessing characters in a string(Slice Operator & Indexing)

We can access individual characters using of a string using slicing. Index starts from 0.

- Trying to access a character out of index range will raise an `IndexError`.
- The index must be an integer. We can't use floats or other types, this will result into `TypeError`.

Python allows negative indexing for its sequences.

- The index of `-1` refers to the last item, `-2` to the second last item and so on.
- We can access a range of items in a string by using the slicing operator `:(colon)`.

```python3

# Example 1

str = "apple"

str[1] = a
str[-1] = e
str[1:5] = pple
str[2:-1] = pl

```

Strings are immutable. This means that elements of a string cannot be changed once they have been assigned. We can simply reassign different strings to the same name.

```python3
>>> my_string = 'apple'
>>> my_string[5] = 'a'
...
TypeError: 'str' object does not support item assignment
>>> my_string = 'Python'
>>> my_string
'Python'
```

We cannot delete or remove characters from a string. But deleting the string entirely is possible using the `del` keyword.

```python3

>>> del my_string[1]
...
TypeError: 'str' object doesn't support item deletion
>>> del my_string
>>> my_string
...
NameError: name 'my_string' is not defined
```

## Looping Through a String

strings are arrays, we can loop through the characters in a string, with a for loop.

```python3
>>> for x in "banana":
...  print(x)
banana
```

## Check String

To check if a certain phrase or character is present in a string, we can use the keyword `in`.

```python3

>>> txt = "The best things in life are free!"
>>> if "free" in txt:
...     print("Yes, 'free' is present.")
Yes, 'free' is present.

```

## Check if NOT

We can check if a certain phrase or character is NOT present in a string, we can use the keyword `not in`.

```python3

>>> txt = "The best things in life are free!"
>>> if "expensive" not in txt:
...     print("Yes, 'expensive' is NOT present.")
Yes, 'expensive' is NOT present.
```

# Concatenation

concatenate, or combine, two strings you can use the + operator.

```python3

>>> a = "Hello"
>>> b = "World"
>>> c = a + b
>>> print(c)
Hello World

# To add a space between them, add a " "

>>> c = a + " " + b
>>> Hello    World

```

# Escape Charatcers

To insert characters that are illegal in a string, use an escape character.An escape character is a backslash \ followed by the character you want to insert.

```python3

>>> txt = "We are the so-called "Vikings" from the north."

  File "demo_string_escape_error.py", line 1
    txt = "We are the so-called "Vikings" from the north."
                                       ^
SyntaxError: invalid syntax

```

To fix this problem, use the escape character \":

```python3
>>> txt = "We are the so-called \"Vikings\" from the north."
>>> print(txt)
We are the so-called "Vikings" from the north.
```

| Code | Result          |
| ---- | --------------- |
| \'   | Single Quote    |
| \\\  | Backslash       |
| \n   | New Line        |
| \r   | Carriage Return |
| \t   | Tab             |
| \b   | Backspace       |
| \f   | Form Feed       |
| \ooo | Octal value     |
| \xhh | Hex value       |

# string methods

Python has a set of built-in methods that you can use on strings.

- The `upper()` method returns the string in upper case:

```python3

a = "Hello, World!"
print(a.upper())

HELLO,WORLD
```

The lower() method returns the string in lower case:

```python3

a = "Hello, World!"
print(a.lower())

hello,world

```

- The strip() method removes any whitespace from the beginning or the end:

```python3

a = " Hello, World! "
print(a.strip())

HELLO,WORLD
```

- The replace() method replaces a string with another string

```python3

a = "Hello, World!"
print(a.replace("H", "J"))

Jello, World!

```

[More String Methods](https://docs.python.org/3/library/string.html)

[Top](#)

[Back](/python_beginner)
