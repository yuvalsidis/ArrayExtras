'use strict'

var input = ['abcdefg', 'xyz'];
var expected = ['Abcdefg', 'xyz']
var actual = capitalizeLongerThan5(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);

function capitalizeLongerThan5(strs){
    return strs.map((str) => { 
    return str.length > 5? str.charAt(0).toUpperCase() + str.substring(1) : str
    }) 
}