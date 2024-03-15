#!/usr/bin/python3

'''Importing function from BaseGeometry Class'''


BaseGeometry = __import__('7-base_geometry').BaseGeometry

'''Represent class Rectangle'''


class Rectangle(BaseGeometry):
    """ Class that defines a rectangle from BaseGeometry Class """

    def __init__(self, width, height):
        """ Initializes instance """
        self.integer_validator("width", width)
        self.integer_validator("height", height)
        self.__width = width
        self.__height = height
