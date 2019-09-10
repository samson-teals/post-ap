# Calculator

Start with page with standard calculator layout as HTML buttons.

Standard buttons are:
- 1 .. 9 (numbers)
- +, -, *, / (operators)
- = (equals)
- C (clear)

The page will also have 3 extra text elements to be used as buffers:
- First number
- Operator (plus, minus, multiply, divide)
- Second number

## Instructions
- Concatenate numbers into the first buffer as they are clicked
- When the operator is clicked, put the latest clicked operator into the operator buffer
- After the operator buffer is populated, concatenate numbers into the second buffer as they are clicked
- Display the answer when “=” is clicked
  - Optionally disallow further input once “=” is clicked
- Clear all fields and start again when "C" (clear) is clicked
