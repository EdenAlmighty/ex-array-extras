'use strict'

var input = ['abcdefg', 'xyz'];
var expected = ['Abcdefg', 'xyz']
var actual = capitalizeLongerThan5(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);

function capitalizeLongerThan5(strs) {
    return strs.map(word => {
        if (word.length > 5) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        } else {
            return word
        }
    })
}


