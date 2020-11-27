class Ball
{
    constructor(x,y,radius)
    {
        var ball_options ={
            restitution: 1.0
        }

        this.radius = radius;
        this.ball = Bodies.circle(x,y,radius, ball_options);
        World.add(world,this.ball);
    }

    display()
    {
        ellipseMode(RADIUS);
        ellipse(this.ball.position.x, this.ball.position.y, 20, 20);

    }




}