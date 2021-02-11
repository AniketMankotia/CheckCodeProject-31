var maxDrops=100;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrellaObj;
var thunder,thunder1,thunder2,thunder3,thunder4;
var drops = [];
var drops2 = [];
var drops3 = [];
var drops4 = [];


function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    
    for(var i=50; i<=maxDrops; i=i+2){
        drops.push(new Drops(i,10,10));
    }
    for(var a=50; a<=maxDrops; a=a+2){
        drops2.push(new Drops(a,0,10));
    }
    for(var l=50; l<=maxDrops; l=l+2){
        drops3.push(new Drops(l,-10,10));
    }
    for(var n=50; n<=maxDrops; n=n+2){
        drops4.push(new Drops(l,-10,10));
    }
        

    umbrellaObj = new Umbrella(100,540,70);
}

function draw(){
    background(0);
    Engine.update(engine);


    for(var i=0; i< drops.length; i++){ 
        drops[i].display();
    }
    for(var a=0; a< drops2.length; a++){ 
        drops2[a].display();
    }
    for(var l=0; l< drops3.length; l++){ 
        drops3[l].display();
    }
    for(var n=0; n< drops4.length; n++){ 
        drops4[n].display();
    }

    umbrellaObj.display();
    

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(50,350),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
    thunder.scale = random(0.3,0.6);
}

    drawSprites();
    
}   


