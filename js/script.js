function caesarCipher(string, isCrypting = true, key = 3){
    let letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let cipher = []
    if(isCrypting == true){
        for (let i=0 ;i< string.length; i++){
            let indexof = letters.indexOf(string[i])
            let index = (indexof + key > 26) ? indexof + key -26 : indexof + key
            cipher.push(letters.at(index))
        }
    } else {
        for (let i=0 ;i< string.length; i++){
            let indexof = letters.indexOf(string[i])
            let index = (indexof - key < 1) ? indexof - key + 26 : indexof - key
            cipher.push(letters.at(index))
        }
    }
    return cipher.join("");
}


function analyzeArray(array){
    let avg = 0
    let sorted = array.sort();
    for(let i in array){
        avg += array[i]
    }
    let object = {}
    object.average = Math.round((avg / array.length)),
    object.min = sorted[0],
    object.max = sorted.at(-1),
    object.length = array.length
    
    return object
}


console.log(analyzeArray([9,1,3,7]).max)
module.exports = analyzeArray;