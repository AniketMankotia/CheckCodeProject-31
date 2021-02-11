class BaseClass{
    constructor(x,y,r){
        var options={
            isStatic: false,
            friction:0.1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = 10;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.x,this.y,5);
        pop();
    }
}