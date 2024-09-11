// Description:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(input) {
    //place to store result
    let result = '';

    //iterate over the string
    for (let i = 0; i < input.length; i++){
        // append the current letter i+1 times to the string
        for (let j = 0; j < i+1; j++){
            //capitilize he first append
            if (j == 0){
                result += input[i].toUpperCase();
            }else{
                result += input[i].toLowerCase()
            }
        }

        // append dash if it is not the last letter
        if (i != input.length-1){
            result += '-'
        }

     
    }
    return result

}