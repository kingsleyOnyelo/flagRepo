function identical(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i++]){
            return false
        }
        return true;
    }
}
let arrMe = [1,4,4,4,4,5,7,6,8];
console.log(identical(arrMe))



const sumUp = (arr, target) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1   ; j < arr.length; j++){
            if(arr[j] === target - arr[i]){
                result.push(arr[i], arr[j]);
            }
        }
    }
    return result;
}
let arrSum = [8,4,1,6,7,3,5];
console.log(sumUp(arrSum, 6));