var music,box,surface1,surface2,surface3,surface4,left,right;
var above;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 createCanvas(800,600);

    //create 4 different surfaces
    surface1  = createSprite(700,580,200,40);
    surface1.shapeColor = "orange";

    surface2  = createSprite(500,580,200,40);
    surface2.shapeColor = "red";
    
    surface3  = createSprite(300,580,200,40);
    surface3.shapeColor = "blue";
    
    surface4  = createSprite(100,580,200,40);
    surface4.shapeColor = "yellow";


    //creating the edges
    above = createSprite(400,0,800,10);
    above.debug=true;
    bottom = createSprite(400,610,800,10);
    bottom.debug = true;
    left = createSprite(-10,300,10,600);
    left.debug=true;
    right = createSprite(810,300,10,600);
    right.debug=true;

    //create box sprite and give velocity
    box = createSprite(random(20,750),50,40,40);
    box.velocityX=5;
    box.velocityY=6;
    box.debug=true;
}

function draw() {
    background(rgb(169,169,169));
   
    box.bounceOff(left);
    box.bounceOff(right);
    box.bounceOff(above);
        
    boxCollision(surface1);
    boxCollision(surface2);
    boxCollision(surface3);
    boxCollision(surface4);

    drawSprites();
  
    //add condition to check if box touching surface and make it box
}

function boxCollision(object1)
{

    var soundState=0;

    if(box.x-object1.x<(box.width+object1.width)/2 && object1.x - box.x<(box.width+object1.width)/2 && box.y-object1.y<(box.height+object1.height)/2 &&  object1.y-box.y<(box.height+object1.height)/2 )
    {
        box.shapeColor= object1.shapeColor;
       if(object1===surface1)
       {
           soundState=1;
       }

       if(soundState==1)
       {
            
           music.play();
           console.log("yo");
       }
       if(object1===surface2)
       {
           box.velocityY=0;
           box.velocityX=0;
       }
    
        box.velocityY= box.velocityY* (-1);
    }
}

