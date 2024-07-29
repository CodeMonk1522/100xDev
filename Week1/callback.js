
// function arithmetic(a,b, func){
//     return func(a,b)
// }


// function sum(a,b){
//     return a + b
// }

// function sub(a,b){
//     return a - b
// }



// function displayResult(data){
//     console.log('Result of sum is:', data)
// }



// const value = arithmetic (2,3,sub);

// console.log(value)



class Animal {

    constructor(name, legCount, speakSound) {
        this.name = name;
        this.legCount = legCount;
        this.speakSound = speakSound; // Rename to avoid conflict with method name
    }

    static hello() {
        console.log('Animal says hello');
    }

    speak() {
        console.log('I speak ' + this.speakSound); // Correct string concatenation
    }
}


let dog = new Animal('Doggie', 4, 'bhow bow')
let cat = new Animal ('Cat', 4, 'mew mew')
cat.speak(); //calling function on object This will log mew mew