class Circle{
    constructor(radius){
        this.radius = radius;
    }

    draw(){
    }

    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

// const c = new Circle(1);
// c.draw();
// Circle.parse();

const c = Circle.parse('{ "radius": 1 }');
console.log(c);
