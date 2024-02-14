// Exercise 38 - Bigger than 100

var nums = [23, 206, 108, 18, 32, 999]

var bigNums = nums.filter(num => num > 100)
console.log('ex38:', bigNums);

//Exercise 44

var nums = [3, 2, 0, 2, 2, 0, 3]
var numsCount = [0, 0, 0, 0]

nums.forEach(num => {
    if (numsCount[num]) numsCount[num]++
    else numsCount[num] = 1
})
console.log('ex44:', numsCount);


// //Exercise 46

var nums = [1, 2, 3, 4, 5]

function multBy(nums, multiplier, isImmutable) {
    var modifiedNums = (isImmutable) ? nums.slice() : nums
    modifiedNums = nums.map((num) => (num * multiplier))
    return modifiedNums
}
console.log('ex46:', multBy(nums, 2, true));
