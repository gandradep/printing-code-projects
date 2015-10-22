
var r = new Rune({
  container: "body",
  width: 900 ,
  height:660,
 debug: false
});
r.rect(0,0,r.width,r.height)
.fill(0)
r.rect(r.width/2,0,1.1,r.height)
.fill(255)


var wave = r.path(25, r.height*0.45)
.rotate(-5,r.width/2,r.height/2)
.stroke(255)
.fill(255)
.curveTo(0, -500, 100, 0)
  .curveTo(150, 400, 150, -20)
  .curveTo(160, -300, 250, 0)
  .curveTo(340,200,350,0)
  .curveTo(370,-100,425,0)




for(var i = 0; i<73;i++){
  wave.curveTo(425+5*i, i*10,425+5*(i+10), -i)
  
}
 
  wave.lineTo(825, 50)
  wave.lineTo(450,0)
 



r.draw();