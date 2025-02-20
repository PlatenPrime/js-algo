import { swap } from "../swap.js";

export const arrayForSearch = [18, -18, -2, -3, -11, 14, 11, -4, 7, 11, 11, 20, 13, 13, 0, 11, -17, 9, 15, 12]

let count = 0

export function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
                console.log("arr[j]: ",arr[j]);
                console.log("arr[min]: ",arr[min]);
                
            }
            console.log("count: ",count);
            
            count++;
        }
        if (min !== i) {
            console.log("min: ",min);
            console.log("i: ",i);
            
            swap(arr, i, min);
        }
    }
    console.log(count);
    console.log(arr);
    
    return arr;
}