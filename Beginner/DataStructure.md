---
title: Data Structures
layout: page
publish: true
description: Python Beginner
permalink: DataStructure
---

List, Tuple, Set, and Dictionary are the data structures in python that are used to store and organize the data in an efficient manner. Tuple can be created using `tuple()` function. Dictonary can be created using `dict()` function. List is mutable i.e we can make any changes in `list()`.Set can be created using `set()`.

| List                                                                                                           | Tuple                                                                                                | Set                                                                                | Dictionary                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| List is a non-homogeneous data structure which stores the elements in single row and multiple rows and columns | Tuple is also a non-homogeneous data structure which stores single row and multiple rows and columns | Set data structure is also non-homogeneous data structure but stores in single row | Dictionary is also a non-homogeneous data structure which stores key value pairs |
| List allows duplicate elements                                                                                 | Tuple allows duplicate elements                                                                      | Set will not allow duplicate elements                                              | Set will not allow duplicate elements but keys are not duplicated                |
| List can be represented by `[]`                                                                                | Tuple can be represented by`( )`                                                                     | Set can be represented by `{ }`                                                    | Dictionary can be represented by `{} `                                           |
| example: [1, 2, 3, 4, 5]                                                                                       | example: (1, 2, 3, 4, 5)                                                                             | example: {1, 2, 3, 4, 5}                                                           | example: {1, 2, 3, 4, 5}                                                         |
| List is mutable                                                                                                | Tuple is immutable                                                                                   | Set is mutable, but no duplicates are allowed                                      | Dictionary is mutable. But Keys are not duplicated                               |
| orderd                                                                                                         | Ordered                                                                                              | unorderd                                                                           | ordered                                                                          |

---

```python3
# use of list, tuple, set and
# dictonary

# Lists
>>> a = []

# Adding Element into list
>>> a.append(5)
>>> a.append(10)
>>> print("Adding 5 and 10 in list", a)
Adding 5 and 10 in list [5, 10]


# Popping Elements from list
>>> a.pop()
>>> print("Popped one element from list", a)
Popped one element from list [5]


# Set
>>> s = set()

# Adding element into set
>>> s.add(5)
>>> s.add(10)
>>> print("Adding 5 and 10 in set", s)
Adding 5 and 10 in set {10, 5}



# Removing element from set
>>> s.remove(5)
>>> print("Removing 5 from set", s)
Removing 5 from set {10}

# Tuple
>>> l=[5]
>>> t = tuple(l)

# Tuples are immutable
>>> print("Tuple", t)
Tuple (5, )

# Dictonary
>>> d = {}

# Adding the key value pair
>>> d[5] = "Five"
>>> d[10] = "Ten"
>>> print("Dictonary", d)
Dictonary {10: 'Ten', 5: 'Five'}


# Removing key-value pair
>>> del d[10]
>>> print("Dictonary", d)
Dictonary {5: 'Five'}



```

![datastructures](./Beginner/ds.gif)

[More methods](https://docs.python.org/3/tutorial/datastructures.html)

[Top](#)

[Back](/contents)
