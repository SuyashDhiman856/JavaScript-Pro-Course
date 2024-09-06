class Triangle{
    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    getArea()
    {
        return "Area of Triangle is " + 0.5*a*b;
    }

    getHypotenues()
    {
        return "Hypotenues of Triangle is " + (a**2 + b**2);
    }
}

class ColorTriangle extends Triangle{
    constructor(a, b, color)
    {
        super(a, b); // inheriting the properties from the parent
        this.color = color;
    }

    getArea()
    {
        return "Area of Triangle is " + 0.5*a*b;
    }

    getHypotenues()
    {
        return "Hypotenues of Triangle is " + (a**2 + b**2);
    }

    getColor()
    {
        return color;
    }
}