class Ball {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restituition:0.5,
          density:3.0,
          friction:1
        
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
image( this.image,pos.x, pos.y, this.width, this.height);}
    }
