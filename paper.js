class Paper{
    constructor(x,y,diameter){
        var paper_options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Matter.Bodies.circle(x,y,diameter,paper_options);
        this.image = loadImage("paper.png")
        this.width = diameter;
        World.add(world,this.body)
        
    
    }
    display(){
        var pos = this.body.position;
        console.log(pos)
        push();
        translate(pos.x,pos.y);
        fill("green");
        imageMode(CENTER);
        image(this.image,0,10,110,110);
        pop();
    }
}
