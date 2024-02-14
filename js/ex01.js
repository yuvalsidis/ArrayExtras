'use strict'

var input = ['return', 'phrases', 'with one word']
var expected = ['return', 'phrases']
var actual = onlyOneWord(input)
actual[0] = 'return1'


function onlyOneWord(input){
    const result = input.filter((word) => !word.includes(' '))
    return result
}
function wordInclude(word){
    return word.includes(' ')
}

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);
