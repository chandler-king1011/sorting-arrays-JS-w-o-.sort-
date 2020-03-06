const findMax = (numArr) => {
    let max = numArr[0];
    for(let i = 0; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }
    return max;
}


const sortBestFirst = (ratings) => {
    let startingLength = ratings.length;
    let sortedRatings = [];
    let currentMax;
    let index;
    for (let i = 0; i < startingLength; i++) {
        currentMax = findMax(ratings)
        index = ratings.indexOf(currentMax);
        ratings.splice(index, 1);
        sortedRatings.push(currentMax);
    }
    return sortedRatings;
}


console.log(sortBestFirst([20, 17, 25, 5, 100, 105, 20, 1]));
