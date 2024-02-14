'use strict'

var input = ['average', 'exceptional', 'amazing'];
var expected = ['aeae', 'eeioa', 'aai']
var actual = onlyVowels(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);

function onlyVowels(strs){
    const vowels = 'aeiou'
    return strs.map(arr => {
        return arr.split('').filter(char => vowels.includes(char)).join('')
    })
}
