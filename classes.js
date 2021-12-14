/**
 * Create a Circle class using ES6 Class syntax. An instances should be initialized with two properties:
 
 * radius, which is a number
 
 * color
 
 * It should have four methods:
 
 * drawCircle() which returns the string "Drawing a <<color>> circle."
 
 * getCircumference() returns the circumference of the circle.
 
 * getArea() returns the area of the circle.
 
 * changeColor() updates the color property and returns the new color.
 *
 */

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  
  drawCircle() {
    return `Drawing a ${this.color} circle.`
  }
  
  // circumference of a circle = 2 * r * pi
  getCircumference() {
    return Math.PI * 2 * this.radius
  }
  
  // area of a circle is r^2 * pi
  getArea() {
    return Math.pow(this.radius, 2) * Math.PI
  }
  
  /**
   * changeColor() updates the color property and returns the new color.
   */
  changeColor(newColor) {
    this.color = newColor;
    return newColor;
  }
  
}

const myBlueCircle = new Circle(10, "blue");
const myRedCircle = new Circle(10, "red");

const myBigCircle = new Circle(100, "gray");

console.log(myBlueCircle.drawCircle());
console.log(myRedCircle.drawCircle());
console.log('the circumference of my big circle is:', myBigCircle.getCircumference());
console.log('the area of my big circle is:', myBigCircle.getArea());

console.log('myBlueCircle is:', myBlueCircle.color);
myBlueCircle.changeColor('yellow');
console.log('myBlueCircle is now:', myBlueCircle.color);
myBlueCircle.changeColor('dark grey');
console.log('myBlueCircle is now:', myBlueCircle.color);
