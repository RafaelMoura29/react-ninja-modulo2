'use strict'

const reverse = (arr) => {
    return arr.length === 0
        ? []
        : [...reverse(arr.slice(1)), arr.slice(0,1)[0]]
}

export default reverse