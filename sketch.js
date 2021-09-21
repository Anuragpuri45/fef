var  astronaut,brush,bg,sleep,gym,eat,bath,mo,ground ;

  function preload(){
   bg= loadImage("images/iss.png");
    sleep = loadAnimation("images/sleep.png"); 
    brush = loadAnimation("images/brush.png"); 
    gym = loadAnimation("images/gym1.png","images/gym2.png");
     eat = loadAnimation("images/eat1.png","images/eat2.png"); 
     bath = loadAnimation("images/bath1.png","images/bath2.png");
    mo = loadAnimation("images/move.png","images/move1.png");
  
  }



  function setup() {
    createCanvas(400, 400);

    ground = createSprite(200,100,20,20);
    ground.addImage("back",bg);
    ground.scale=0.2;

    astronaut = createSprite(200,200,20,20)
    astronaut.addAnimation("fref",sleep)
    astronaut.scale=0.1
    
   
  }
  
function draw() {
  background(220);

  if(keyDown("UP_ARROW")){
     astronaut.addAnimation("brushing", brush);
      astronaut.changeAnimation("brushing",brush);
       astronaut.y = 250;
        astronaut.velocityX = 0; 
        astronaut.velocityY = 0;
     }

      if(keyDown("DOWN_ARROW")){
        astronaut.addAnimation("eating",eat );
        astronaut.changeAnimation("eating",eat);
      }
     
      if(keyDown("LEFT_ARROW")){
        astronaut.addAnimation("bathing",bath );
        astronaut.changeAnimation("bathing",bath);
        astronaut.y=200;
      }

      if(keyDown("RIGHT_ARROW")){
        astronaut.addAnimation("gy",gym );
        astronaut.changeAnimation("gy",gym);
      }
     
   

  drawSprites();
}