class Rope {

    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var option = {
            bodyA: body1 ,
            bodyB : body2 ,
            pointB:{x: this.offsetX,y : this.offsetY}
        }
        this.rope = Constraint.create(option)
        World.add(world,this.rope)

    }

    display(){
         var pointA= this.rope.bodyA.position ;
         var pointB= this.rope.bodyB.position ;

         strokeWeight(2) ; 

         var anchor2X= pointB.x+ this.offsetX
         var anchor2Y= pointB.x+ this.offsetY

         line( anchor2X, anchor2Y, pointA.x , pointA.y )
    }
}