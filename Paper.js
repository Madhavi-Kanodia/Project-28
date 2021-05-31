class Paper {
    constructor(x, y,radius) {
      this.body1=loadImage("paperImg.png");
      var options = {
          static:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
     
      this.body = Bodies.circle (x, y, radius,options);
      this.radius = radius;
     
      World.add(world, this.body);
     }
     
    display(){
     
     ellipseMode(RADIUS);

     fill ("pink");

     circle(this.body.position.x,this.body.position.y,this.radius);
     image (this.body1,100,100);

    }
  };