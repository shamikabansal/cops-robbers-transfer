  class MazeWall{
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
   this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("plantBackground.png")
   World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    imageMode(CENTER);
    fill(34,139,34);
    //StrokeWeight(34,139,34);
    rect(pos.x, pos.y, this.width, this.height);
  }
};
  