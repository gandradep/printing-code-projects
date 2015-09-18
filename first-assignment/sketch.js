
// var r = new Rune({
//   container: "body",
//   width: 600,
//   height: 842,
//   debug: true
// });

// r.rect(0,r.height/2, r.width, r.height/2)
//   .fill(0)

//   .stroke(false)

//   var diameter = r.width*0.1
  

//   r.circle(r.width*2/3,r.height/2, diameter)
//   .fill(0)
//   .stroke(false)

// r.triangle((r.width*2/3)-diameter, r.height/2, (r.width*2/3)+diameter, r.height/2, r.width*2/3,(r.height/2)+(diameter*2))
//   .fill(255)

//   .stroke(false)



// r.draw();

// different colors

var r = new Rune({
  container: "body",
  width: 600,
  height: 845,
  debug: true
});

r.rect(0,0, r.width, r.height/2)
  .fill(0)
  .stroke(false)

  var diameter = r.width*0.1
  

  r.circle(r.width/3,r.height/2, diameter)
  .fill(255)
  .stroke(false)

r.triangle((r.width/3)-diameter, r.height/2, (r.width/3)+diameter, r.height/2, r.width/3,(r.height/2)+(diameter*2))

  .fill(0)
  .stroke(false)


r.draw();