exports.find_smallest = function(arr) {
    smallest = arr[0]
    smallest_index = 0
    for (let key in arr) {
        if (arr[key] < smallest) {
            smallest = arr[key]
            smallest_index = key
        }
    }
    return smallest_index
}


// choice_sorting array elements

exports.selector_sort = function (arr) {
    new_arr = []
    for( let item in arr ) {

    }
    return new_arr
}
find_smallest([3,4,5,6,7,8])