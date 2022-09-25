const memoization = (fn) => {
    let results = {}

    return (arg) => {
        if(!results[arg]){
            results[arg] = fn(arg);
        }
        return results[arg];
    }
}



const suma = memoization(
function sum(number1,number2){
    return number1 - number2;
})

console.log(suma(5,5));

const request = memoization(async id=>{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let json = await res.json();
    return json
})
request(1).then(r=> console.log(r))