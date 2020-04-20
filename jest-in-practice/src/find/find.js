'use strict'

const find = (arr, func) => {
    for(let i = 0; arr.length > i; i++){
        if(func(arr[i], i, arr)){
            return arr[i]
        }
    }
}
    
export default find
