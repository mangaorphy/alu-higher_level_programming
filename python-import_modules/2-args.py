#!/usr/bin/python3
import sys
if __name__ == "__main__":
    num_arg = len(sys.argv) - 1
    arguments = sys.argv[1:]

    print(f"Number of argument(s): {num_arg}")
    if num_arg == 0:
        print(".\n")
    else:
        print(":")
        for i, arg in enumerate(arguments, start=1):
            print(f"{i}: {arg}")
