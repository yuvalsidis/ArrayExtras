'use strict'

const VOWELS = ['a','e','i','o','u']
var input = ['average', 'exceptional', 'amazing'];
var expected = ['aeae', 'eeioa', 'aai']
var actual = onlyVowels(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);

function onlyVowels(strs){
    return strs.map((str) => {
        var size = 0
        var newStr = ''
        while (size <= str.length) {
            newStr += VOWELS.includes(str.charAt(size))? str.charAt(size) : ''
            size++
        }
        return newStr
    })
}