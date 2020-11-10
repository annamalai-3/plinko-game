const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies


var engine,world;
this.particles = [];
this.plinkos = []
this.divisions = [];

function setup() {
  createCanvas(480,800);
  
 engine = Engine.create();
 world = engine.world;



ground = new Ground(200,660,490,20);
Engine.run(engine);

}

function draw() {
  background("black");  
 Engine.update(engine);

for(var i = 0;i<480;i=i+50){

this.plinkos.push(new Plinko(i,130,10));

}
for (var j = 0;j<this.plinkos.length;j++){


  this.plinkos[j].display();
}

for(var a = 0;a<480;a=a+50){

this.plinkos.push(new Plinko(a,180,10))

}

for(var b = 0;b<this.plinkos.length;b++){

this.plinkos[b].display();

}
for(var c=0;c<480;c=c+60){


this.plinkos.push(new Plinko(c,220,10));

}

for(var d = 0;d<this.plinkos.length;d++){

this.plinkos[d].display();


}
for(var e=0;e<480;e=e+60){


  this.plinkos.push(new Plinko(e,260,10));
  
  }
  
  for(var e = 0;e<this.plinkos.length;e++){
  
  this.plinkos[e].display();
  
  
  }
  
for( var f = 0;f<480;f = f+70){


this.plinkos.push(new Plinko(f,300,10));

}
for(var g=0;g<this.plinkos.length;g=g+70){

this.plinkos[g].display();


}


for(var l = 0;l<480;l=l+60){


this.divisions.push(new Division(l,600,10,200));


}

for(var m = 0;m<this.divisions.length;m++){

this.divisions[m].display();


}
ground.display();
if(frameCount%1===0){

this.particles.push(new Particle(random(0,480),40,10));

}

for(var n=0;n<this.particles.length;n++){

this.particles[n].display();

}
  drawSprites();


}