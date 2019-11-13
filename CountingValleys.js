function countingValleys(n, s) {
    //variable for the amount of valleys
    let valleys = 0;
    //variable to track current level in regards to sea level
    let seaLevel = 0;
    //turn the string on letters into an array
    let walk = s.split("");

    //loop for checked in the letters in the array
    for (let i = 0; i < walk.length; i++) {
        //check if your going up currently and if so add 1 to the sea level
        if (walk[i] === 'U') {
            seaLevel++;
            //if your have moved up and the new sea level vaulue is 0 add to the valley variable
            //this can only happen when coming out of a valley so increases the valleys traversed
            if (seaLevel === 0) {
                valleys++;
            }
            //if moving down just reduce the sea level by 1
        } else {
            seaLevel--;
        }
    }

    //return the amount of valleys traversed.
    return valleys;

}