
var r = new Rune({
  container: "body",
  width: 600 ,
  height:500,
 debug: false
});
r.rect(0,0,r.width,r.height)
.fill(150)
var hueAngle = Math.round(Rune.random(-20,20));
var hue2 = hueAngle
var side = 20;


var radius = 35;
var radiusCircles = 15;
var radiusCenter = 25;



for (var j = 0 ; j < 15; j++){
	radius = radius + 33;
	var numCircle = Math.round(6.28*radius/(2.5*radiusCircles));
	console.log(radius);
var angle = 360/ numCircle;
for(var i = 0; i<numCircle; i++){
var value = Math.round(Rune.random(70,90));
var saturation = Math.round(Rune.random(60,90));



  var curAngle = i * angle;
  var x = Math.cos(Rune.radians(curAngle)) * radius;
  var y = Math.sin(Rune.radians(curAngle)) * radius;
	
	r.circle((r.width/2)+x,(r.height/2)+y,radiusCircles)
	.fill('hsv', hue2 ,saturation,value)
	.stroke('hsv',hue2 - 20,100,100)
	.strokeWidth(4);

	 if(hue2 > hueAngle + 80)
	{hue2 = hueAngle}
	else{hue2 = hue2 + 3}

//var extra = Math.round(Rune.random(1,5));
//hue2 = hue2 + extra*72;

}
}


r.circle(r.width/2,r.height/2,radiusCenter)
.fill('hsv',hue2,100,100)
.strokeWidth(10)
.stroke('hsv',hue2 - 10,80,30)



r.draw();