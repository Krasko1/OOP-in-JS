function createCircle(radius) {
    return {
        // radius: radius,
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);