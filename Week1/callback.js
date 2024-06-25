
function arithmetic(a,b, func){
    return func(a,b)
}


function sum(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}



function displayResult(data){
    console.log('Result of sum is:', data)
}



const value = arithmetic (2,3,sub);

console.log(value)