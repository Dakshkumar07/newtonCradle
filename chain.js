class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
    
        this.offsetX = offsetX
        this.offsetY = offsetY

  
        var option ={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX, y:this.offsetY}
       
       
    }

    this.chain = Constraint.create(option);
    World.add(world,this.chain);
    
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
       push();
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y,this.offsetY);
        pop();
    }

}