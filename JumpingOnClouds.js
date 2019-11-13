function jumpingOnClouds(c) {
    //Variable to store the jumps
    let jumps = 0;

    //Loop over the array
    for (let i = 0; i < c.length; i++) {
        //If a two space jump is possible then do that and move the loop along and add the jump to the variable
        if (c[i + 2] === 0) {
            jumps++;
            i++
        } else {
            //if not check a one space jump is possible and add it to the variable
            if (c[i + 1] === 0) {
                jumps++
            }
        }
    }

    //return the amount of jumps
    return jumps;

}