function twoSum(nums, target){
    let map = new Map();

    for(let z = 0 ; z < nums.length; z++){
        let num1 = nums[z]; 
        let num2 = target - num1;
        if(map.has(num2)){
            return [z,map.get(num2)];

        }
        map.set(num1, z);

    }
}
console.log(twoSum([2,7,11,15], 26))