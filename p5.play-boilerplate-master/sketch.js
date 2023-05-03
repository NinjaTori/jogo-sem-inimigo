var Spc

function preload() {
  pc=loadAnimation ("1 crri.png","2 crri.png","3 crri.png","4 crri.png","5 crri.png"," 6 crri.png")
  Pparado=loadAnimation ("parado1.png","parado2.png",)
  Pparado.frameDelay = 20


  m1=loadImage ("DE.jpg")
  m2=loadImage ("EM.jpg")
  m3=loadImage ("MD.jpg")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  var Sm1 = createSprite(windowWidth/2, windowHeight -150, 50 , 50);
  Sm1.scale = 1.05
  Sm1.addImage(m1)

  var Sm2 = createSprite(windowWidth/2, windowHeight -444, 50 , 50);
  Sm2.scale = 1.05
  Sm2.addImage(m2)

  var Sm3 = createSprite(windowWidth/2, windowHeight -737, 50 , 50);
  Sm3.scale = 1.05
  Sm3.addImage(m3)

  
  Spc = createSprite(500, 297, 50, 50)
  Spc.addAnimation("pc_parado",Pparado)
  Spc.scale= 0.3

  Spc.addAnimation("Pc_crri",pc)
  

 ground = createSprite(windowWidth/2, windowHeight -78, width , 5);
 ground.visible = false

 ground2 = createSprite(windowWidth/2, windowHeight -372, width , 5);
 ground2.visible = true

 escada = createSprite(349, windowHeight -220, 73 , 312)

}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyIsDown(RIGHT_ARROW)){
    Spc.changeAnimation("Pc_crri",pc)
    Spc.position.x = Spc.position.x + 7
    Spc.mirrorX(+1)
  }

  if(keyIsDown(LEFT_ARROW)){
    Spc.changeAnimation("Pc_crri",pc)
    Spc.position.x = Spc.position.x - 7
    Spc.mirrorX(-1)
  }

 console.log(Spc.y)
 console.log(Spc.x)
  if(keyIsDown(UP_ARROW)&&frameCount%38===0){
    Spc.changeAnimation("pc_parado",Pparado)
    Spc.position.y = Spc.position.y - 100
    //Spc.velocityY = -10
  }

  Spc.velocityY = Spc.velocityY + 0.5
  Spc.collide(ground)
}




















