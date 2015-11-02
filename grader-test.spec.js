var grader = require('./grader.js');

describe('letterGrader', function() {
    it('Should return "A" when given above 90', function() {
        expect(grader.letterGrader(93)).toEqual('A');
    });
    it('Should return "F" when given number below 60', function() {
        expect(grader.letterGrader(59)).toEqual('F');
    });
});

describe('averageScore', function() {
    it('Should return the correct average for the numbers given', function() {
        expect(grader.averageScore([1,2,3,4,5])).toEqual(3);
        expect(grader.averageScore([1,8,5,4,2])).toEqual(4);
    });
});

describe('medianScore', function() {
    it('should return the middle number in the group given an odd length', function() {
        expect(grader.medianScore([52,80,80,86,94])).toEqual(80);
    });
    it('should return the average of the two middle numbers given an even length', function() {
        expect(grader.medianScore([52,85,45,81,95,73,90,86,94,40])).toEqual(77);
    });
});

describe('modeScore', function() {
    it('should return the number that occurs most often in the array', function() {
        expect(grader.modeScore([1,5,2,8,8,1,1,2])).toEqual(1);
    })
});
