function isPalindrome (x){
    palindrome = x
    palindrome = palindrome.toString().split('').reverse().join('')
    palindrome = parseInt(palindrome)
    result = false;

    if(palindrome === x){
        result = true
    }else{
        result = false
    }
    
    return result;
}
console.log(isPalindrome(121));