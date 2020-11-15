 class Chain{
            constructor(bodyA,bodyB){
               var  options={
                   bodyA: bodyA,
                   bodyB:bodyB,
                   length:90,
                   stiffness:0.009
                }
                this.chain=Constraint.create(options);
                World.add(world,this.chain);
            }
            display(){
            var PointA=this.chain.bodyA.position;
            var PointB=this.chain.bodyB.position;
            strokeWeight(7);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
        }
        }