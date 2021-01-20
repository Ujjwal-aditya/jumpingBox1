function bounceOff(object1,object2)
{
  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x  < object2.width/2 + object1.width/2 && object2.y-object1.y < object2.height/2 + object1.height/2
    && object1.y - object2.y < object2.height/2 + object1.height/2) {
  object2.velocityX = object2.velocityX * (-1);
  object1.velocityX = 0;
  object2.velocityY = object2.velocityY * (-1);
  object1.velocityY = 0;
console.log("touched")
}}
