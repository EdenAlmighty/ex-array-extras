'use strict'


var input = ['return', 'phrases', 'with one word'];
var expected = ['return', 'phrases']
var actual = onlyOneWord(input)
console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);

function onlyOneWord(strs) {
    return strs.filter((names) => {
        return names.split(' ').length === 1
    })
}
