function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        computeOptimumLocation();
        console.log('draw');
    }

    let defaultLocation = {x: 0, y: 0};
    let computeOptimumLocation = function(){
    }
}

const circle = new Circle(10);
// BAD:
// circle.defaultLocation = false;
// circle.computeOptimumLocation();