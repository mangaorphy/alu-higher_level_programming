#!/usr/bin/python3
""" Module that contains a function that returns the number of characters of a text file
"""


def write_file(filename="", text=""):
    """Writes string text file (UTF8) returns number text written."""
    with open(filename, encoding='utf-8') as f:
        f.write(text)
        return len(text)
