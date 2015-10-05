
var r = new Rune({
  container: "body",
  width: 892 ,
  height: 595,
  debug: true
});

var x = r.width/3;
var y = r.height/3*2;
var y1= r.height*0.98;
r.rect(0,0, r.width, r.height)
.fill(0)

r.rect(x-250,y1-30,500,60)
.fill(255)
.stroke(false)
r.rect(x-200,y1-80,400,160)
.fill(255)
.stroke(false)

for(var i = 0; i<2;i++){
r.circle(x-200+(i*400),y1-30,50)
.fill(255)
.stroke(false)
}

r.ellipse(x,y,350,280)
.fill(255)
.strokeWidth(10)
.stroke(0)

r.rect(x-90,y-90,180,180)
.fill(0)
.stroke(false)
r.rect(x-120,y-60,240,120)
.fill(0)
.stroke(false)

for(var j = 0; j<2;j++){
  for(var i = 0; i<2;i++){
r.circle(x-90+(i*180),y-60+(j*120),30)
.fill(0)
.stroke(false)
}}

r.circle(x+90,y-60,8)
.fill(255)
.stroke(false)

//--------------------------
// var x = r.width/8;
// var y = r.height/9*5;
// var y1= r.height*0.85;
// r.rect(0,0, r.width, r.height)
// .fill(0)

// r.rect(x-300,y1-80,600,160)
// .fill(255)
// .stroke(false)
// r.rect(x-250,y1-130,500,260)
// .fill(255)
// .stroke(false)

// for(var i = 0; i<2;i++){
// r.circle(x-250+(i*500),y1-80,50)
// .fill(255)
// .stroke(false)
// }

// r.ellipse(x,y,450,350)
// .fill(255)
// .strokeWidth(10)
// .stroke(0)

// r.rect(x-115,y-115,230,230)
// .fill(0)
// .stroke(false)
// r.rect(x-145,y-85,290,170)
// .fill(0)
// .stroke(false)

// for(var j = 0; j<2;j++){
//   for(var i = 0; i<2;i++){
// r.circle(x-115+(i*230),y-85+(j*170),30)
// .fill(0)
// .stroke(false)
// }}

// r.circle(x+110,y-85,8)
// .fill(255)
// .stroke(false)


r.draw();