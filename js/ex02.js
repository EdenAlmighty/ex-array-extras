'use strict'


var input = ['abc', 'xyz'];
var expected = ['cba', 'zyx']
var actual = reverseAll(input)

console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);


function reverseAll(strs) {
    var reverseShit = strs.map(word => word.split('').reverse().join(''));
    return reverseShit
}

