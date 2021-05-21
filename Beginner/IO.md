---
layout: page
title: File handling
publish: true
description: Python Beginner
permalink: filehandling
---

# Read files

To open the file, use the built-in `open()` function. The `open()` function returns a file object, which has a `read()` or `readline()` method for reading the content of the file:

```python3

line = open("demofile.txt").readlines()
for line in file:
    line = line.strip()
    print(line)

```

# Write to an Existing File

To write to an existing file, we must open the existing file first using `open()` function:

| Arguments | usage                                                  |
| --------- | ------------------------------------------------------ |
| "a"       | will append to the end of the file                     |
| "w"       | will overwrite any existing content                    |
| "x"       | will create a file, returns an error if the file exist |

```python3

f = open("demofile2.txt", "a")
f.write("Now the file has more content!")
f.close()

#open and read the file after the appending:
f = open("demofile2.txt", "r")
print(f.read())

'''By default the read() method returns the whole text, but you can also specify
how many characters you want to return'''

#read(5)

```

# Create a New File

```python3

f = open("myfile.txt", "x")
f.write("Hello World!")
f.close()

```

# Delete a File

To delete a file, you must import the OS module, and run its `os.remove()` function.

```python3

import os
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
else:
  print("The file does not exist")

```

![File Operations](/Beginner/io.gif)

[Top](#)

[Back](/python_beginner)
