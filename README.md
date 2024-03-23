##### Hexlet tests and linter status:
[![Actions Status](https://github.com/nokrepilov/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nokrepilov/frontend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/ac416da9e266a4c0ad1e/maintainability)](https://codeclimate.com/github/nokrepilov/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ac416da9e266a4c0ad1e/test_coverage)](https://codeclimate.com/github/nokrepilov/frontend-project-46/test_coverage) 

# Generate Difference
Generate Difference is a cli-utility that compares two files and shows the difference. Supports formats: yaml, json. Generating a report in the form of plain text, stylish and json.

## Installation
Prerequisites: Node.js
```
 git clone https://github.com/nokrepilov/frontend-project-46.git
 cd frontend-project-46
 make install
 npm link
 ```
 #### For start to run:
```
gendiff --format [option] <path to first file> <path to second file>
```

## Examples of using
[//]: # (#### Output usage information)

[//]: # (gendiff -h)

#### Compare two JSON files. Stylish format output

[![asciicast](https://asciinema.org/a/SEJ3OCsU4ok5T9QwEnDEN4tzf.png)](https://asciinema.org/a/SEJ3OCsU4ok5T9QwEnDEN4tzf)

#### Compare two YAML files. Stylish format output
[![asciicast](https://asciinema.org/a/f1qbbKmAeHHeR8rTAKyZjCcXe.png)](https://asciinema.org/a/f1qbbKmAeHHeR8rTAKyZjCcXe) 