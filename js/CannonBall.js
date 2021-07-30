class CannonBall {
    constructor(x, y) {
     
     var options={
     restituion:0.8,
     friction:1,
     density:1,
     isStatic:true

     }
      this.r=40;
      this.image=loadImage("./assets/cannonball.png")
      this.body=Bodies.circle(x,y,this.r,options);
     this.trajectory=[];
      World.add(world,this.body);
    }
    shoot(){
        var velocity=p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:50,y:-30})
    }
    display() {
      
     var angle=this.body.angle;
     var pos=this.body.position;
      
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      
      pop();

      if(this.body.velocity.x>0 && this.body.position.x>300){
        var position=[this.body.position.x,this.body.position.y]
        this.trajectory.push(position);
      }
      for(var i=0; i<this.trajectory.length; i++){
        image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5);
      }
    }
  }
  