function Circle(radius){
    this.radius = radius;

    this.move = function(){
        console.log('move');
    }
}

const c1 = new Circle(1);

Circle.prototype.draw = function(){
    console.log('draw');
}

c1.draw();

// returns instance members
console.log(Object.keys(c1));

// returns all members (instance + prototype)
for(let key in c1)
    console.log(key);
