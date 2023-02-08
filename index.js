const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player  {
    constructor(x,y,radius,color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw () {
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    } 
}

class Projectile {
    constructor(x, y, radius, pro_color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = pro_color
        this.velocity = velocity
    }

    draw () {
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    } 

}

const x = canvas.width / 2
const y = canvas.height / 2




addEventListener('click', (event) => { 
    const projectile = new Projectile(event.clientX,event.clientY,5,'green',null)
    projectile.draw()
    console.log(player)
    console.log(projectile)
    console.log(c)
    })

    const player = new Player(x,y,30,'blue');
    player.draw();

    console.log(player);
    console.log(canvas);
    console.log("prueba 10");
    console.log(c)


