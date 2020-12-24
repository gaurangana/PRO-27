class Bob{
  
    constructor(x,y,r){
     
     var option = {
       isStactic: false,
         restitution: 1,
         friction: 0 ,
         density: 0.8
   
     }
     this.x = x
     this.y= y 
     this.r = r
     //this.image = loadImage("sprites.png/paper.png")
     this.body =   Bodies.circle(this.x,this.y,(this.r)/2,option)
     //this.radius = 30;
  
    
       World.add(world,this.body)
    }
   
    display (){
        var p = this.body.position
        //var angle = this.body.angle
        push()
        translate(p.x, p.y)
        rectMode(CENTER)
        //rotate(angle)
        //ellipseMode(RADIUS)
        fill(255,0,255)
        ellipse(0,0 , this.r, this.r);
        //p.x = mouseX
      //  p.y = mouseY
        pop()
    }
   }