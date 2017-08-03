let items = [4, 2, 6, 5, 3, 9]

function swap( items, firstIndex, secondOndex ) {
    const temp = items[firstIndex]
    items[firstIndex] = items[secondOndex]
    items[secondOndex] = temp
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++
        }
        while (items[j] > pivot) {
            j--
        }
        if (i <= j) {
            swap(items, i, j);
            i++
            j++
        }
    }
    return i
}

function quick_sort(items, left, right) {
    let index = undefined

    if (items.length > 1) {
        index = partition(items, left, right)

        if (left < index - 1) {
            quick_sort(items, left, right)
        }

        if (index < right) {
            quick_sort(items, index, right)
        }
    }
    return index
}