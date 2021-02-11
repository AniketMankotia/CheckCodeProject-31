class Drops extends BaseClass{
    constructor(x,y,r){
        super(x,y,r);
    }
    display(){
        super.display();
            
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)});
        }
      
    }
}