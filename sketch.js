const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var wall11;wall12.wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;
var wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40;
var wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50;
var wall51,wall52,wall53,wall54,wall55,wall56,wall57,wall58,wall59,wall60;
var wall61,wall62,wall63,wall64,wall65,wall66,wall67,wall68,wall69,wall70;
var wall71,wall72,wall73,wall74,wall75,wall76,wall77,wall78,wall79,wall80;
//svar robbers;

function preload(){	
	Maze = loadImage("MazeImage.png");
}


function setup() {

 createCanvas(1000,1000);

engine = Engine.create();
world = engine.world;
Engine.run(engine);
	//Create the Bodies Here.

//Robber1 = new Robbers(20,20);
wall1 = new MazeWall(192,143.5,130,17); 
 wall2 = new MazeWall(83,500,15,907); 
 wall3 = new MazeWall(500,55,850,17); 
 wall4 = new MazeWall(500,945,850,17); 
 wall5 = new MazeWall(917,478,17,865); 
 wall6 = new MazeWall(479,278,308,17); 
 wall7 = new MazeWall(479,233,390,17); 
 wall8 = new MazeWall(125,188,17,193); 
 wall9 = new MazeWall(125,500.5,17,284); 
 wall10 = new MazeWall(125,768,15,195); 
 wall11 = new MazeWall(458.5,143.5,182,16); 
 wall12 = new MazeWall(208,85,15,45); 
 wall13 = new MazeWall(180,99,43,16); 
 wall14 = new MazeWall(312,99,139,16); 
 wall15 = new MazeWall(437,99,57,16); 
 wall16 = new MazeWall(500,77,16,60); 
 wall17 = new MazeWall(542,99,16,105); 
 wall18 = new MazeWall(667,76.5,16,60); 
 wall19 = new MazeWall(750,76.5,16,60); 
 wall20 = new MazeWall(646,99,60,16);
 wall21 = new MazeWall(813,99,140,16); 
 wall22 = new MazeWall(292,121,16,60); 
 wall23 = new MazeWall(333,144,16,105); 
 wall24 = new MazeWall(417,121,16,60); 
 wall25 = new MazeWall(583,144,16,105); 
 wall26 = new MazeWall(708.7,188,16,193); 
 wall27 = new MazeWall(834,144,16,105); 
 wall28 = new MazeWall(687,143.5,225,16); 
 wall29 = new MazeWall(897,143.5,56,16); 
 wall30 = new MazeWall(395,188.5,141,16.5);
 wall31 = new MazeWall(563,188.5,56,16.5); 
 wall32 = new MazeWall(812,188,141,16);
 wall33 = new MazeWall(165.5,188,98,16.5);
 wall34 = new MazeWall(270,188,55,16.5);
 wall35 = new MazeWall(250,165,16.5,60);
 wall36 = new MazeWall(500,165.5,16.5,60);
 wall37 = new MazeWall(668,165.5,16.5,60);
 wall38 = new MazeWall(208,210,16,60);
 wall39 = new MazeWall(291,232,16,105);
 wall40 = new MazeWall(457,210,16,60);
 wall41 = new MazeWall(625,210,16,60);
 wall42 = new MazeWall(750,255,16,149);
 wall43 = new MazeWall(208,233,98,16.5);
 wall44 = new MazeWall(770,232.5,57,16);
 wall45 = new MazeWall(855,233,57,15.5);
 wall46 = new MazeWall(249,344,16,238);
 wall47 = new MazeWall(668,254.5,16.5,60);
 wall48 = new MazeWall(835,255.5,16.5,60);
 wall49 = new MazeWall(875,255.5,16,60);
 wall50 = new MazeWall(144.7,276.5,55,16.5);
 wall51 = new MazeWall(688,276.5,57,16.5);
 wall52 = new MazeWall(814,278,60,15);
 wall53 = new MazeWall(145,322,139,16.5);
 wall54 = new MazeWall(291,322,100,16.5);
 wall55 = new MazeWall(438,322,140,16.5);
 wall56 = new MazeWall(688,322,141,16.5);
 wall57 = new MazeWall(563,322,55,16.5);
 wall58 = new MazeWall(855,322,141,16.5);
 wall59 = new MazeWall(208,345,16.5,150);
 wall60 = new MazeWall(332,300,16.5,60);
 wall61 = new MazeWall(500,300,16.5,60);
 //wall62 = new MazeWall(395,188.5,141,16.5);
 //wall63 = new MazeWall(395,188.5,141,16.5);
 //wall64 = new MazeWall(395,188.5,141,16.5);
 //wall65 = new MazeWall(395,188.5,141,16.5);
 //wall66 = new MazeWall(395,188.5,141,16.5);
 //wall67 = new MazeWall(395,188.5,141,16.5);
 //wall68 = new MazeWall(395,188.5,141,16.5);
 //wall69 = new MazeWall(395,188.5,141,16.5);
 //wall70 = new MazeWall(395,188.5,141,16.5);
 //wall71 = new MazeWall(395,188.5,141,16.5);
 //wall72 = new MazeWall(395,188.5,141,16.5);
 //wall73 = new MazeWall(395,188.5,141,16.5);
 //wall74 = new MazeWall(395,188.5,141,16.5);
 //wall75 = new MazeWall(395,188.5,141,16.5);
 //wall76 = new MazeWall(395,188.5,141,16.5);
 //wall77 = new MazeWall(395,188.5,141,16.5);
 //wall78 = new MazeWall(395,188.5,141,16.5);
 //wall79 = new MazeWall(395,188.5,141,16.5);
 //wall80 = new MazeWall(395,188.5,141,16.5);







}


function draw() {
  rectMode(CENTER);
  background(Maze);
  
  if (keyDown("LEFT_ARROW")){
    //.x = player2.x - 5; 
}
 
if (keyDown("RIGHT_ARROW")){
    player2.x = player2.x + 5; 
} 
 // fill("red");
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();
  wall31.display();
  wall32.display();
  wall33.display();
  wall34.display();
  wall35.display();
  wall36.display();
  wall37.display();
  wall38.display();
  wall39.display();
  wall40.display();
  wall41.display();
  wall42.display();
  wall43.display();
  wall44.display();
  wall45.display();
  wall46.display();
  wall47.display();
  wall48.display();
  wall49.display();
  wall50.display();
  wall51.display();
  wall52.display();
  wall53.display();
  wall54.display();
  wall55.display();
  wall56.display();
  wall57.display();
  wall58.display();
  wall59.display();
  wall60.display();
  wall61.display();
  wall62.display();
  wall63.display();
  wall64.display();
  wall65.display();
  wall66.display();
  wall67.display();
  wall68.display();
  wall69.display();
  wall70.display();
  wall71.display();
  wall72.display();
  wall73.display();
  wall74.display();
  wall75.display();
  wall76.display();
  wall77.display();
  wall78.display();
  wall79.display();
  wall80.display();

  

  drawSprites();
 
}



