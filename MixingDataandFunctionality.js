const myTri = {
    a : 3,
    b : 4,
    getArea : function(){
        return (this.a * this.b) / 2;
    },
    getHypotenues : function(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}

// It is helpful when data mixed with functionality ans related functions lives together

// It is difficult to maintain thousands of triangles

