# auto-compl README

This small extension help u to complete if/while/for/std::cout statements.

## Features

If u enter first letter of each statement u will have snippet provided in hint of context menu.

### Example 

| letter | completion    |
|--------|---------------|
|    w   |   while  (    | 
|   f    |  for (int i = |
|   i    | if (          |
| s      | std::cout     | 

Simple!

## Functions in extension.ts

### registerSnippetCompletionItem()

Function to return Completions generator. Starts once at start on every cpp file and returns completions for context menu.

# Author - M3100 Dzhamalutdinov Muslim 