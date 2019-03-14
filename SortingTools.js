arr = [1,2,3,4,5]

swapValues(arr, 0, 3)
// arr postaje [4,2,3,1,5]

insertValueAtIndex(arr, 10, 2)
// arr postaje [4,2,10,3,1,5]

deleteValueAtIndex(arr, 0)
// arr postaje [2,10,3,1,5]

// zamenjuje vrednosti niza `arr` na pozicijama `i` i `j` jednu sa drugom
function swapValues(arr, i, j) {
    const x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
}
 
// umece vrednost `v` u niz `arr` na poziciji `i`
function insertValueAtIndex(arr, v, i) {
    arr.splice(i, 0, v);
} 
 
 
// brise vrednost u nizu `arr` na poziciji `i`
function deleteValueAtIndex(arr, i) {
    arr.splice(i, 1);
}

// sortiranje po vrednosti
function sortByValue(arr){
    for(var i = 0; i<arr.length; i++){
        for(let j = 0; j<(arr.length - i - 1); j++){
            if(arr[j]>arr[j+1]){
                const x = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = x;
            }
        }
    }
    return arr;
}