// Binary Search

// takes in a sorted array of numbers, and a target number
// returns the index of the target number
// if the number is not found, returns null

type BinarySearchState = {
    array: number[],
    target: number,
    left: number,
    right: number,
    middle: number
}

export function binarySearch(arr: number[], target: number): number | null {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) { //floor returns the largest int <= a given number
        const middle = Math.floor((right + left) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            left = middle + 1; // left half is discarded
        } else {
            right = middle - 1; // right half is discarded
        }
    }
    return null;
}