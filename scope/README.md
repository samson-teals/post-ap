# Scope

The files in this folder are intended to be pasted into `playcode.io`.

Comment out `console.log` lines until you get no errors.

## var
- `var` is implied, except in `strict` mode
- `var` only exists in the `global` or `function` scopes

## let / const
- both `let` and `const` go down to the `block` scope
- the only difference is that `const` is "constant"
  - but only at the "top" level
  - remember that everything in js is an object
  
# Context

## Global
- as expected: global variables are accessible everywhere

## Function
- function scoped variables are only accessible within the function

## Block
- block scoped variables are only accessible within the block, except if declared as `var`
