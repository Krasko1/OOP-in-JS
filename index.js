function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        computeOptimumLocation();
        console.log('draw');
    }

    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!x.value || !y.value)
                throw new Error('Invalid location');

            defaultLocation = value;
        }
    });

    let defaultLocation = {x: 0, y: 0};
    let computeOptimumLocation = function(){
    }
}

const circle = new Circle(10);

// Not very good:
// circle.getDefaultLocation();