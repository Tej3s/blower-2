class ball {
    constructor(x, y) {
        var options = {
          restitution: 0.8,
          friction: 0,
          density: 0,
          
        };
        this.r = 40;
    
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world,this.body);
        console.log(this.body);
    }
    show() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
       ellipse(0,0,this.r, this.r);
        pop();
}
}