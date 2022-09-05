const convertToUppercase = (array) => {
  return new Promise((resolve, reject) => {
    if (array.every(element => typeof element === 'string')) {
      let newArray = array.map(element => element.toUpperCase());
      resolve(newArray);
    } else {
      reject(new Error('Error: Not all items in the array are strings!'));
    }
  })
}

export default convertToUppercase;
