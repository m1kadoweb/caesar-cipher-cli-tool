
const upperFirstLetter = 'A'.charCodeAt();
const upperLastLetter = 'Z'.charCodeAt();
const lowerFirstLetter = 'a'.charCodeAt();
const lowerLastLetter = 'z'.charCodeAt();

const encode = (msg, shift) => {
  const arr = msg.split('').map(letter => {
    if(letter.charCodeAt() >= upperFirstLetter && letter.charCodeAt() <= upperLastLetter) {
      return String.fromCharCode(upperFirstLetter + (letter.charCodeAt() - upperFirstLetter + shift) % 26);
    } else if(letter.charCodeAt() >= lowerFirstLetter && letter.charCodeAt() <= lowerLastLetter) {
      return String.fromCharCode(lowerFirstLetter + (letter.charCodeAt() - lowerFirstLetter + shift) % 26);
    } else {
      return letter.charCodeAt();
    }
  })
  return arr.join('');
}

const decode = (msg, shift) => {
  const arr = msg.split('').map(letter => {
    if(letter.charCodeAt() >= upperFirstLetter && letter.charCodeAt() <= upperLastLetter) {
      return String.fromCharCode(upperLastLetter - (upperLastLetter - letter.charCodeAt() + shift) % 26);
    } else if(letter.charCodeAt() >= lowerFirstLetter && letter.charCodeAt() <= lowerLastLetter) {
      return String.fromCharCode(lowerLastLetter - (lowerLastLetter - letter.charCodeAt() + shift) % 26);
    } else {
      return letter.charCodeAt();
    }
  })
  return arr.join('');
}

module.exports = { encode, decode }