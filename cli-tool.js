const { program } = require('commander');
const { pipeline, Transform } = require('stream');
const fs = require('fs');
const {validationOptions} = require('./validation-options');

program
  .version('0.0.1')
  .option('-s, --shift [number]', 'shift for cipher')
  .option('-i, --input [file]', 'an input file', '')
  .option('-o, --output [file]', 'an output file', '')
  .option('-a, --action [string]', 'an action encode/decode')
  .parse(process.argv);

const options = program.opts();
validationOptions({action: options.action, shift: options.shift});
/* checkExistFile(options.input);
checkExistFile(options.output); */
pipeline(
  options.input ? fs.createReadStream(options.input) : process.stdin,
  options.output ? fs.createWriteStream(options.output) : process.stdout,
  error => {
    if(error) {
      process.stderr.write("Pipline error", error);
      process.exit(1);
    }
  }
)