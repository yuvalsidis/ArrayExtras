'use strict'


var input = ['abc', 'xyz'];
var expected = ['cba', 'zyx']
var actual = reverseAll(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);

function reverseAll(strs){
    return strs.map((str) => reverseStr(str))
}

function reverseStr(str) {
    var size = str.length
    var newStr = ''
    while(size > 0){
        newStr += str.slice(-1)
        str += str.substring( 0, size - 1)
        size--
    }
    return newStr
}