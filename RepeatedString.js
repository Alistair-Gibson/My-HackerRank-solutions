function repeatedString(s, n) {
    let count = 0;
    if (s === 'a') {
        return count = n;
    }

    // //First Try did failed about half the tests too slow.
    //  let fullString = s.repeat(n);
    //  let strArray = fullString.split('', n);

    //  for( let i = 0; i < strArray.length; i++) {
    //     if (strArray[i] === 'a') {
    //         count++;
    //      }
    //   }

    //     //Second try failed 7/23 tests guessing its an issue with not full strings and uneven a distrubution
    //     let asInString = 0;
    //    for (let i = 0; i < s.length; i++) {
    //        if(s[i] === 'a'){
    //            asInString++;
    //        }
    //    }
    //    let stringAmount = n / s.length;
    //    count = Math.round(asInString * stringAmount);


    let asInString = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            asInString++;
        }
    }
    let fullStrings = Math.floor(n / s.length);
    let fullStringAs = asInString * fullStrings;

    let unFullStrings = n / s.length;
    let remainder = unFullStrings - fullStrings;
    let remaingLetters = Math.round(s.length * remainder);

    let remaingArray = s.split('', remaingLetters)
    let remaingAs = 0;

    for (let i = 0; i < remaingArray.length; i++) {
        if (remaingArray[i] === 'a') {
            remaingAs++;
        }
    }

    count = fullStringAs + remaingAs;



    return count;

}