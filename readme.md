#Grading Exercise

**Instructions:** Fork and clone this repository.  Create a file called `grader.js` and write the following functions inside of it.  You must have full test coverage(write a bunch of jasmine tests for each function).  This is an open-book exercise.  Feel free to refer to your notes and the jasmine docs.

###Letter Grader

Write a function `letterGrader` which takes a test score and returns the equivalent letter grade.

* A: 90-100
* B: 80-89
* C: 70-79
* D: 60-69
* F: 0-59

```
letterGrader(98);
//=> 'A'
```
**Bonus:** Add '+' and '-' grades.  So a 98 is actually a A+ and an 80 is a B-


###Average

Write a function 'averageScore` which takes an array of test scores and returns the average score.

```
averageScore([90, 95, 87, 60]);
//=> 83
```

###Median

Write a function `medianScore` which takes an array of test scores and calculates the median score.  The median is the middle value.  If there are an even number of scores, calculate the average of the middle two scores.

```
medianScore([52,80,80,86,94])
//=> 80
```

###Mode

Write a function `modeScore` which takes an array of test scores and calculates the mode score.  The mode is the value that appears most often.

```
modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])
//=> 92
```
