function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

// circle.location = { x: 1 };
// circle['location'] = { x: 1 };

// const propertyName = 'location';
// circle[propertyName] = { x: 1};

const propertyName = 'center-location';
// No:
circle.center-location
// But:
circle[propertyName] = { x: 1};


delete circle.location;
delete circle['location'];