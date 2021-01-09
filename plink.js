class Plinko {
    constructor(x,y) {
var options ={
    restitution:0.4,
    isStatic:true
}
this.r=10
this.body = Bodies.circle(x,y,10,options)
World.add(world,this.body)

    }
display() {
    var angle = this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    noStroke();
    fill("white")
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop()
}


}