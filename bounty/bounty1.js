// Question -> the loop runs for good 2-3 mins and JS being single threaded no core reaches 100% capacity why?


// Observation - I see that one core reaches 100% and then the load is shifted to another core until that one reaches to 100% and so on.

//  Ans- By reading some answers on gpt and google I see that common reason is modern machines work that way. The OS shifts load to different processors.
let sum = 0

for (let i=0; i<1000000000000; i++){
    sum = sum+i
}

console.log(sum)