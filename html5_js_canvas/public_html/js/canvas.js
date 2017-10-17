var canvas = document.querySelector('canvas'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    canvas = canvas.getContext('2d');


var color2 = ['#113E3E', '#578A8D', '#272A1C', '#3F473C', '#3F473C']
var color=['#2D5F73','#538EA6','#F2D1B3','#F2B8A2','#F2B8A2']
var color3=[]

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;

});

window.addEventListener('resize', function() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

var friction=.90,
    acceleration=1;

function Ball(x, y, radius, dx, dy) {
    this.color=color[0];
    this.radius=radius;
    this.dy=dy;
    this.x=x;
    this.y=y;
    
    this.draw = function() {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        canvas.fillStyle = this.color;
        canvas.fill();


    }
    
    this.update = function() {
        this.y+=this.dy;
        if(this.y+this.radius>=height)this.dy=-this.dy*friction;//lose speed due to friction
        else this.dy+=acceleration;

        console.log(this.dy);
        this.draw();
    }
}


function animate() {
    requestAnimationFrame(animate);

    canvas.clearRect(0, 0, width, height);
    ball.update();
}

var ball=new Ball(width/2, height/2, 20, 2,2);
animate();