export const arrayForSearch = [1, 4, 5, 8, 5, 3, 32, 6, 7, 5, 3, 6, 8, 2, 35, 6, 8, 46, 43, 21];


export function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(i);
            return i;

        }
    }
    return -1;
}

