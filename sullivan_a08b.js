/*  Anna Sullivan
    sullivan_a08b.js
    INFO2124WW
    Thoendel
    2/6/2020
*/
/* WRITE YOUR SOLUTION BETWEEN THIS LINE */

/*object literal named MathUtility to store 3 methods*/
const MathUtility = {

    //getAreaOfCircle method with one parameter called radius;
    getAreaOfCircle : function (radius){
         let circle = Math.PI * Math.pow(radius, 2); //math object for PI Math.PI and math object to square Math.pow() to calculate area of circle;
         return circle; //return area of circle using circle variable;
    },

    //getAreaOfSquare method with one parameter called side;
    getAreaOfSquare : function (side){
        let square = Math.pow(side, 2); //math object to square Math.pow() to calculate area of square;
        return square; //return area of square using square variable;
    },

    //getAreaOfTriangle method with two parameters called base and height;
    getAreaOfTriangle : function (base, height){
        let triangle = (height * base) / 2; //calculate area of triangle using math;
        return triangle; //return area of triangle using triangle variable;
    }
};


/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);