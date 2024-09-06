// Classes are the blueprint of functionality

class Triangle{
    getArea(){
        return (this.a * this.b) /2;
    }

    getHypotenues(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}

myTri = new Triangle();
myTri.a = 3;
myTri.b = 4;

// new Triangle() => Object
// defines the methods each instance of Triangle will have
// Make a new triangle with new Triable()

// 'this' refers to the current object

// Class names should be UpperCamelCase

// myTri instanceof Triangle
// true