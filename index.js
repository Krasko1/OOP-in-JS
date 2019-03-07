function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw');
    }

    this.defaultLocation = {x: 0, y: 0};
    this.computeOptimumLocation = function(){
    }
}

const circle = new Circle(10);
// BAD:
// circle.defaultLocation = false;
// circle.computeOptimumLocation();