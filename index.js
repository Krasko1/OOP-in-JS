// 'use strict';

// const Circle = function(){
//     this.draw = function(){
//         console.log(this);
//     }
// };

// const c = new Circle();
// c.draw();

// const draw = c.draw;
// console.log(draw);
// draw();

class Circle{
    draw(){
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();