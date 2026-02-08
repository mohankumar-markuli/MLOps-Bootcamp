
const arr = [5,3,1,2,4,5,6];

function findSum(arr){
    let sum =0;
    for (let i =0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));


// reduce(function(accumulator,current_value),initial_value)
const output = arr.reduce(function (acc, curr){
    acc = acc + curr;
    return acc
}, 0);

console.log(output);

const output2 = arr.reduce(function(max,curr){
    if (curr > max){
        max = curr
    }
    return max
},0)

console.log(output2);