const { stderr } = process;
const fs = require('fs');

const validationOptions = ({action, shift}) => {
    if(!action) {
        stderr.write('Set the action please')
        process.exit(1);
    }
    if(action !== 'encode' && action !== 'decode') {
        stderr.write('Action value must be encode or decode');
        process.exit(1);
    }
    if(!shift) {
        stderr.write('Set the shift please');
        process.exit(1);
    }
    if(isNaN(+shift) || !Number.isInteger(+shift)) {
        stderr.write('Shift must be integer');
        process.exit(1);
    }
};

/* const checkExistFile = (file) => {    
    fs.access(file, err => {
        stderr.write('File not exist\n');
        process.exit(1);
    });
} */

module.exports = {validationOptions};