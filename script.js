const canvas = document.getElementById("canvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const tool = canvas.getContext("2d");

const leaf = new Image();
leaf.src = "leaf.png";
let leavesData=[]; //Empty arraty to fill it later on with for loop.

class Leaf {
    constructor(image, sx, sy, sw, sh, dx, dy, dw, dh,speedX,speedY,alpha) {
        this.image = image;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.dw = dw;
        this.dh = dh;
        this.speedX=speedX;
        this.speedY=speedY;
        this.alpha=alpha;

    }
    move(){
        if(this.dx>width*0.99) this.dx=-10;
        this.dx+=this.speedX;
    }
    draw() {
        tool.globalAlpha=this.alpha;
        tool.drawImage(this.image, this.sx, this.sy, 
            this.sw, this.sh, this.dx, this.dy, this.dw, this.dh)

    }
}

//! Function to generate many leaves
function generateLeaf(){
    for (let i=0;i<150;i++){
        leavesData.push(new Leaf(leaf,0,0,16,16,Math.random()*width*0.99,
    Math.random()*height*0.99,16,16,Math.random()*2,1,Math.random()));
    }
}

//! Function to draw the leaves
function drawingLeaves(){
    for(let i=0;i<leavesData.length;i++){
        leavesData[i].draw();
    }
}
generateLeaf();

//! Function to move the leaves
function moveLeaves(){
    for(let i=0;i<leavesData.length;i++){
       leavesData[i].move(); 
    }
}




function update(){
    tool.clearRect(0,0,width,height);
    moveLeaves();
    drawingLeaves();
   
    requestAnimationFrame(update);
}
update();
console.log(leavesData);

