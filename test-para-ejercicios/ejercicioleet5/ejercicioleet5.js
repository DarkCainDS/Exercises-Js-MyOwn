function isValid(s){
    const map = new Map();
    const stack = [];

    map.set(')','(');
    map.set(']','[');
    map.set('}','{');

    for(let z = 0; z < s.length; z++){

        const curr = s[z];
        const peeks = stack[stack.length -1];

        if(map.has(curr) && map.get(curr) === peeks ){
            stack.pop();
        }else{
            stack.push(curr);
        }
    }
    return stack.length === 0;
}
console.log(isValid('[]{}'))

module.exports = isValid;