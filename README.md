#Caesar cipher CLI TOOL

## How to install

1. Clone this repository to your computer with command git clone [link]
2. Install dependencies with help npm install or npm input

## How to use the app

In the terminal, type:
* node cli-tool.js and type the following options

Options: 

* -s, --shift: a shift. Required field.
* -i, --input: an input file. Optional field.
* -o, --output: an output file. Optional field.
* -a, --action: an action encode/decode. Required field

## Examples

* node cli-tool.js -a encode -s 5 -i test.txt -o output.txt
* node cli-tool.js -a encode -s 15
* node cli-tool.js -a decode -s 27
* node cli-tool.js -a decode -s 18 -o output.txt
* node cli-tool.js -a decode -s 10 -i input.txt

