// sum of an even an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = arr.length;

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(i);
    }
}