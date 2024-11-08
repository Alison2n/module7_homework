const arr = [1,1,1,6,4,8,8,2,6,5,0];

function uniqueSorted(arr) {
    const uniqueArr = arr.filter((value, index, self) => {
        return self.indexOf(value) == index;
    });

    const sortedArr = uniqueArr.sort((a, b) => a - b);

    return sortedArr
};

console.log(uniqueSorted(arr));