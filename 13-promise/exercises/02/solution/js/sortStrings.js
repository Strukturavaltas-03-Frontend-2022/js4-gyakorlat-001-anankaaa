const sortStrings = (array) => {
    return new Promise((resolve, reject) => {
        try {
            if (array.every(element => typeof element === 'string')) {
                let newArray = array.sort();
                resolve(newArray);
            } else {
                reject(new Error('Error: Not all items in the array are strings!'));
            }
        } catch (error) {
            reject(new Error('Error: Something went wrong with sorting words!'))
        }
    })
}

export default sortStrings;
