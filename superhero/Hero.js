class Hero {
  constructor(x,y,r)
	{
		var options = { 
			restitution:0,
			density: 1, 
			friction:1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			var angle = this.body.angle
			var heroPos=this.body.position;		
			push()
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
