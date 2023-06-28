function stringlen(string) {
    if(string.length>=1 && string.length<=10){
    return string.length;
    }
    throw new Error('length is not within the conditions');
  }
  module.exports = stringlen;