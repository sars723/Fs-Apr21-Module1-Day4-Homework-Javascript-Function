/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

console.log(" ")
console.log("excercise 1 area")
console.log("-----------------------------------")

const area=function(length1, length2)
{
    let area=0
    area=length1*length2
    return area
}
const testArea=area(4,4)
console.log(testArea)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log(" ")
console.log("excercise 2 sum")
console.log("-----------------------------------")

const crazySum=function(num1 ,num2)
{
    let result=0
    result=num1+num2
    if(num1===num2){
        return result*3
    }
    else
    {
        return result
    }
}
const testCrazySum=crazySum(12,12)
console.log(testCrazySum)
/* console.log(crazySum(10,20)) */


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

console.log(" ")
console.log("excercise 3 difference")
console.log("-----------------------------------")

const crazyDiff=function(num)
{
    let result=0
    result=num-19
    if(num>19){
        return result*3
    }
    else
    {
        return result
    }
}
const testCrazyDiff=crazyDiff(12)
console.log(testCrazyDiff)
/* console.log(crazyDiff(39)) */


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

console.log(" ")
console.log("excercise 1 b/n 20 and 100")
console.log("-----------------------------------")

const boundary=function(num)
{
    if((num>=20 && num<=100)|| num===400)
    {
        return true
    }
    else 
    {
        return false
    }
}
const testBoundary=boundary(12)
console.log(testBoundary)
/* console.log(boundary(54))
console.log(boundary(145))
console.log(boundary(400)) */

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log(" ")
console.log("excercise 5 add Strive in front of a string")
console.log("-----------------------------------")

let striveInFront="Strive hello world"
let arrStriveInFront=[]
let newArrFrontStrive=[]
arrStriveInFront=striveInFront.split(" ")
console.log(arrStriveInFront[0].toLocaleLowerCase())
const strivify=function()
{
    //for(i=0;i<arrStriveInFront.length;i++)
    //{
        if(arrStriveInFront[0].toLowerCase()!=="strive")
        {  
            newArrFrontStrive="strive"
            newArrFrontStrive+=" "+ striveInFront
        }
        else{
            newArrFrontStrive=striveInFront
        }
   // }
    
        return newArrFrontStrive
}
const testStrivify=strivify()
console.log(testStrivify)



/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

console.log(" ")
console.log("excercise 6 multiple of 3 or 7")
console.log("-----------------------------------")

let numMultipleOf3Or7=47
const check3and7=function(num){
    if(num%3===0 || num%7===0){
        return true
    }
    else
    {return false}
}
const testCheck3and7=check3and7(numMultipleOf3Or7)
console.log(testCheck3and7)

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

console.log(" ")
console.log("excercise 7 reverse a string")
console.log("-----------------------------------")

let stringToBeReversed="Strive"
let arrToBeReversed=[]
let reversedArray=[]
let j=0
arrToBeReversed=stringToBeReversed.split("")
const reverseString=function()
{
    for(let i=arrToBeReversed.length-1;i>=0;i--)
    {
       reversedArray[j] =arrToBeReversed[i]
       j++
    }
    
return reversedArray.join("")
}
const testReverseString=reverseString()
console.log(testReverseString)

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

console.log(" ")
console.log("excercise 8 capitalize first letter")
console.log("-----------------------------------")

let firstLetterCapital="hello world"
let arrCapitalize=[]
arrCapitalize=firstLetterCapital.split(" ")
/* console.log(arrCapitalize[0][0].toUpperCase())
console.log(arrCapitalize.length) */
const upperFirst=function(){
    for(let i=0;i<arrCapitalize.length;i++){
        arrCapitalize[i][0]=arrCapitalize[i][0].toUpperCase()
        console.log(arrCapitalize[i][0])
    }
console.log(arrCapitalize)
}
upperFirst()


/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

console.log(" ")
console.log("excercise 9 cut the first and last character")
console.log("-----------------------------------")

let string="hello"
let stringArray=[]
stingArray=string.split("")
//console.log(stingArray)
const cutString=function(){
    stingArray.shift()
    stingArray.pop()
    return stingArray.join("")
}
const testCutString=cutString()
console.log(testCutString)

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log(" ")
console.log("excercise 10 random number b/n 1 and 10")
console.log("-----------------------------------")

let n=6
let randomNumbersArray=[]
const giveMeRandom=function(num){
    for(let i=0;i<num;i++){
       randomNumbersArray[i] =1+ Math.floor(Math.random()*9)
    }
    return randomNumbersArray
}
const testRandomNumArray=giveMeRandom(n)
console.log(testRandomNumArray)

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/