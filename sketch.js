var bg_img,bg,obstacle,runner,coin;
var c_img,s_img,r_img,border1,border2;

function preload()
{
bg_img=loadImage("Road.png");

c_img=loadAnimation("Coin/coin1.gif","Coin/coin2.gif","Coin/coin3.gif","Coin/coin4.gif","Coin/coin5.gif","Coin/coin6.gif","Coin/coin7.gif","Coin/coin8.gif","Coin/coin9.gif",
 "Coin/coin9.gif","Coin/coin10.gif","Coin/coin11.gif","Coin/coin12.gif","Coin/coin13.gif","Coin/coin14.gif","Coin/coin15.gif","Coin/coin16.gif","Coin/coin17.gif","Coin/coin18.gif","Coin/coin19.gif","Coin/coin20.gif",
 "Coin/coin21.gif","Coin/coin22.gif");
 
r_img= loadAnimation("Runner/runner1.gif","Runner/runner2.gif","Runner/runner3.gif","Runner/runner4.gif","Runner/runner5.gif","Runner/runner6.gif","Runner/runner7.gif")
r_i=loadImage("images.png")

s_img=loadAnimation("Spider/spider1.gif","Spider/spider2.gif","Spider/spider3.gif","Spider/spider4.gif","Spider/spider5.gif","Spider/spider6.gif",
"Spider/spider7.gif","Spider/spider8.gif","Spider/spider9.gif","Spider/spider10.gif","Spider/spider11.gif")
}

function setup() {
  createCanvas(1800,600);
  bg=createSprite(100,300)
  bg.addImage(bg_img)
  bg.velocityX=-5

  runner = createSprite(70,200,20,50);
  runner.addAnimation("running",r_img);
  //runner.addImage(r_i);
  runner.scale = 0.4;
  runner.debug=true

  //create obstacles and coin group
 obstaclesGroup=new Group();
 coinGroup=new Group();
  

 border1=createSprite(100,10,1800,10);  
 border1.visible=false
  
  
}


function draw() {
  background(0);  
  if(bg.x < 0 ){
    bg.x = width/2;
  }

  /*jump when the space key is pressed
  if(keyDown("space")&& runner.y >=100) {
    runner.velocityY = -13;
 }*/

   /*if(keyDown("up"))
   {
    runner.y=-2
   }*/
   

  spawnObstacles()
  spawnCoins()


    runner.collide(border1)



  drawSprites();
};

function spawnObstacles()
{
  if(frameCount%60===0){
    obstacle = createSprite(1600,180,10,40);
    obstacle.y=Math.round(random(60,500))
    obstacle.addAnimation("spider",s_img);
    obstacle.velocityX=-5;
    obstacle.scale=0.5
    
    obstaclesGroup.add(obstacle)
  }


 
}

function spawnCoins()
{
  if(frameCount%60===0)
  {
   coin=createSprite(1600,200,10,30);
   coin.y=Math.round(random(50,625))
   coin.addAnimation("coin",c_img);
   coin .velocityX=-5
   coin.scale=0.6
   coinGroup.add(coin)
   
  }
}