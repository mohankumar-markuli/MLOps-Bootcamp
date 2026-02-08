// map
const arr = [5,3,6,4];

function double(x){
    return x*2;
}

const output = arr.map(double)
const output2 = arr.map(function double(x){
    return x*2;
});


const output3 = arr.map((x)=>  x*2)

console.log(output)
console.log(output2)
console.log(output3)

// use of reduce in place of map
reduced_arr = []
const reduce_output = arr.reduce(function abc(acc,curr){
    acc = curr *2
    reduced_arr.push(acc)
    return acc
},reduced_arr)

console.log('reduce result',reduced_arr)



