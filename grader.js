function letterGrader(num) {
    switch (true) {
        case num >= 90:
            return 'A';
        case num < 90 && num >= 80:
            return 'B';
        case num < 80 && num >=70:
            return 'C';
        case num < 70 && num >= 60:
            return 'D';
        case num < 60:
            return 'F'
    }
}


function averageScore(arr) {
    var total = 0;
    arr.forEach(function(el) {
        total += el;
    })
    return total/arr.length;
}

function medianScore(arr) {
    arr = arr.sort();
    if (arr.length % 2) {
        return arr[Math.floor(arr.length/2)];
    } else {
        return averageScore(arr.slice(arr.length/2 -2, arr.length/2))
    }
}

function modeScore(arr) {
    var found = {};
    arr.forEach(function(el) {
        if (Object.keys(found).indexOf(String(el)) == -1) {
            found[el] = 1;
        } else {
            found[el]++;
        }
    });

    out = 0;
    highest = 0
    for (i in found) {
        if (found[i] > highest) {
            out = i;
            highest = found[i];
        }
    }
    return +out;
}

console.log(letterGrader(2));

module.exports = {
    letterGrader: letterGrader,
    averageScore: averageScore,
    medianScore: medianScore,
    modeScore: modeScore
}
