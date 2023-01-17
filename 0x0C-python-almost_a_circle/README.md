Task 0 If it's not tested it doesn't work

Task 1: Write the first class Base:

Create a folder named models with an empty file __init__.py inside - with this file, the folder will become a Python package

Create a file named models/base.py:

Class Base:

private class attribute __nb_objects = 0

class constructor: def __init__(self, id=None)

Task 2: Write the class Rectangle that inherits from Base:

In the file models/rectangle.py

Class Rectangle inherits from Base

Private instance attributes, each with its own public getter and setter:

__width -> width

__height -> height

__x -> x

__y -> y

Class constructor: def __init__(self, width, height, x=0, y=0, id=None):

Call the super class with id - this super call with use the logic of the __init__ of the Base class

Assign each argument width, height, x and y to the right attribute

Task 3: Update the class Rectangle by adding the public method def area(self): that returns the area value of the Rectangle instance.

Task 4: Update the class Rectangle by adding the public method def display(self): that prints in stdout the Rectangle instance with the character # - you don’t need to handle x and y here.

Task 5: Update the class Rectangle by overriding the __str__ method so that it returns [Rectangle] (<id>) <x>/<y> - <width>/<height>

Task 6: Update the class Rectangle by updating the public method def update(self, *args): by changing the prototype to update(self, *args, **kwargs) that assigns a key/value argument to attributes:

**kwargs can be thought of as a double pointer to a dictionary: key/value

As Python doesn’t have pointers, **kwargs is not literally a double pointer – describing it as such is just a way of explaining its behavior in terms you’re already familiar with

**kwargs must be skipped if *args exists and is not empty

Each key in this dictionary represents an attribute to the instance



Task 7: Write the class Square that inherits from Rectangle:

In the file models/square.py

Class Square inherits from Rectangle

Class constructor: def __init__(self, size, x=0, y=0, id=None)::

Call the super class with id, x, y, width and height - this super call will use the logic of the __init__ of the Rectangle class. The width and height must be assigned to the value of size

You must not create new attributes for this class, use all attributes of Rectangle - As reminder: a Square is a Rectangle with the same width and height

All width, height, x and y validation must inherit from Rectangle - same behavior in case of wrong data

The overloading __str__ method should return [Square] (<id>) <x>/<y> - <size> - in our case, width or height



Task 8: Update the class Square by adding the public getter and setter size

The setter should assign (in this order) the width and the height - with the same value

The setter should have the same value validation as the Rectangle for width and height - No need to change the exception error message (It should be the one from width)



Task 9:Update the class Square by adding the public method def update(self, *args, **kwargs) that assigns attributes:

*args is the list of arguments - no-keyworded arguments

1st argument should be the id attribute

2nd argument should be the size attribute

3rd argument should be the x attribute

4th argument should be the y attribute

**kwargs can be thought of as a double pointer to a dictionary: key/value (keyworded arguments)

**kwargs must be skipped if *args exists and is not empty

Each key in this dictionary represents an attribute to the instance



Task 10: Write the class Square that inherits from Rectangle:

In the file models/square.py

Class Square inherits from Rectangle

Class constructor: def __init__(self, size, x=0, y=0, id=None)::

Call the super class with id, x, y, width and height - this super call will use the logic of the __init__ of the Rectangle class. The width and height must be assigned to the value of size

You must not create new attributes for this class, use all attributes of Rectangle - As reminder: a Square is a Rectangle with the same width and height

All width, height, x and y validation must inherit from Rectangle - same behavior in case of wrong data

The overloading __str__ method should return [Square] (<id>) <x>/<y> - <size> - in our case, width or height



Task 11: Update the class Square by adding the public getter and setter size

The setter should assign (in this order) the width and the height - with the same value

The setter should have the same value validation as the Rectangle for width and height - No need to change the exception error message (It should be the one from width)

 

Task 12: 

Task 13: Update the class Rectangle by adding the public method def to_dictionary(self): that returns the dictionary representation of a Rectangle:

Task 14: Update the class Square by adding the public method def to_dictionary(self): that returns the dictionary representation of a Square:

This dictionary must contain:

id

size

x

y

Task 15: JSON is one of the standard formats for sharing data representation.

Update the class Base by adding the static method def to_json_string(list_dictionaries): that returns the JSON string representation of list_dictionaries:

list_dictionaries is a list of dictionaries

If list_dictionaries is None or empty, return the string: "[]"

Otherwise, return the JSON string representation of list_dictionaries



Task 1

Task 17: Update the class Base by adding the static method def from_json_string(json_string): that returns the list of the JSON string representation json_string:

json_string is a string representing a list of dictionaries

If json_string is None or empty, return an empty list

Otherwise, return the list represented by json_string



Task 18: Update the class Base by adding the class method def create(cls, **dictionary): that returns an instance with all attributes already set:

**dictionary can be thought of as a double pointer to a dictionary

To use the update method to assign all attributes, you must create a “dummy” instance before:

Create a Rectangle or Square instance with “dummy” mandatory attributes (width, height, size, etc.)

Call update instance method to this “dummy” instance to apply your real values

You must use the method def update(self, *args, **kwargs)

**dictionary must be used as **kwargs of the method update



Task 19: Update the class Base by adding the class method def load_from_file(cls): that returns a list of instances:

The filename must be: <Class name>.json - example: Rectangle.json

If the file doesn’t exist, return an empty list

Otherwise, return a list of instances - the type of these instances depends on cls (current class using this method)

You must use the from_json_string and create methods (implemented previously)

Task 20: Update the class Base by adding the class methods def save_to_file_csv(cls, list_objs): and def load_from_file_csv(cls): that serializes and deserializes in CSV:

The filename must be: <Class name>.csv - example: Rectangle.csv

Has the same behavior as the JSON serialization/deserialization

Format of the CSV:

Rectangle: <id>,<width>,<height>,<x>,<y>

Square: <id>,<size>,<x>,<y>

Task 21: Update the class Base by adding the static method def draw(list_rectangles, list_squares): that opens a window and draws all the Rectangles and Squares:

You must use the Turtle graphics module

To install it: sudo apt-get install python3-tk

To make the GUI available outside your vagrant machine, add this line in your Vagrantfile: config.ssh.forward_x11 = true

No constraints for color, shape etc… be creative!

[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[B[B[B
