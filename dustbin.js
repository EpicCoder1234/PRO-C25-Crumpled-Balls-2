class Wall{
    constructor(x,y,w,h){
        var ground_options={
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,w,h,ground_options);
        this.image = loadImage("dustbingreen.png");
        this.width = w
        this.height = h;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,700,425,150,150);
        pop();
    }
}