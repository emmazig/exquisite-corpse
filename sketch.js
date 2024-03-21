

let sectionOne = [];
let oneA, twoA, threeA ,fourA , fiveA ,sixA, sevenA;
let sectionTwo = [];
let oneB, twoB, threeB ,fourB , fiveB ,sixB, sevenB;
let sectionThree = [];
let oneC, twoC, threeC ,fourC , fiveC ,sixC, sevenC;
let sectionFour = [];
let oneD, twoD, threeD ,fourD , fiveD ,sixD, sevenD;
let sectionFive = [];
let oneE, twoE, threeE ,fourE , fiveE ,sixE, sevenE;
let sectionSix = [];
let oneF, twoF, threeF ,fourF , fiveF ,sixF, sevenF;
let sectionSeven = [];
let oneG, twoG, threeG ,fourG , fiveG ,sixG, sevenG;



function preload(){
 //section one
oneA = loadImage('images/1a.png');
twoA = loadImage('images/2a.png');
threeA = loadImage('images/3a.png');
fourA = loadImage ('images/4a.png')
fiveA = loadImage('images/5a.png')
sixA = loadImage('images/6a.png')
sevenA = loadImage('images/7a.png')


// section two
oneB = loadImage('images/1b.png');
twoB = loadImage('images/2b.png');
threeB = loadImage('images/3b.png');
fourB = loadImage ('images/4b.png')
fiveB = loadImage('images/5b.png')
sixB = loadImage('images/6b.png')
sevenB = loadImage('images/7b.png')


// section three
oneC = loadImage('images/1c.png');
twoC = loadImage('images/2c.png');
threeC = loadImage('images/3c.png');
fourC = loadImage ('images/4c.png')
fiveC = loadImage('images/5c.png')
sixC = loadImage('images/6c.png')
sevenC = loadImage('images/7c.png')

// section four
oneD = loadImage('images/1d.png');
twoD = loadImage('images/2d.png');
threeD = loadImage('images/3d.png');
fourD = loadImage ('images/4d.png')
fiveD = loadImage('images/5d.png')
sixD = loadImage('images/6d.png')
sevenD = loadImage('images/7d.png')

// section five
oneE = loadImage('images/1e.png');
twoE = loadImage('images/2e.png');
threeE = loadImage('images/3e.png');
fourE = loadImage ('images/4e.png')
fiveE = loadImage('images/5e.png')
sixE = loadImage('images/6e.png')
sevenE = loadImage('images/7e.png')

// section six
oneF = loadImage('images/1f.png');
twoF = loadImage('images/2f.png');
threeF = loadImage('images/3f.png');
fourF = loadImage ('images/4f.png')
fiveF = loadImage('images/5f.png')
sixF = loadImage('images/6f.png')
sevenF = loadImage('images/7f.png')

// section seven
oneG = loadImage('images/1g.png');
twoG = loadImage('images/2g.png');
threeG = loadImage('images/3g.png');
fourG = loadImage ('images/4g.png')
fiveG = loadImage('images/5g.png')
sixG = loadImage('images/6g.png')
sevenG = loadImage('images/7g.png')


}


function setup() {
createCanvas( windowWidth, windowHeight);
background(255, 255, 255);
frameRate(4)
sectionOne.push(oneA);
sectionOne.push(twoA);
sectionOne.push(threeA);
sectionOne.push(fourA);
sectionOne.push(fiveA);
sectionOne.push(sixA);
sectionOne.push(sevenA);


sectionTwo.push(oneB);
sectionTwo.push(twoB);
sectionTwo.push(threeB);
sectionTwo.push(fourB);
sectionTwo.push(fiveB);
sectionTwo.push(sixB);
sectionTwo.push(sevenB);

sectionThree.push(oneC);
sectionThree.push(twoC);
sectionThree.push(threeC);
sectionThree.push(fourC);
sectionThree.push(fiveC);
sectionThree.push(sixC);
sectionThree.push(sevenC);

sectionFour.push(oneD);
sectionFour.push(twoD);
sectionFour.push(threeD);
sectionFour.push(fourD);
sectionFour.push(fiveD);
sectionFour.push(sixD);
sectionFour.push(sevenD);


sectionFive.push(oneE);
sectionFive.push(twoE);
sectionFive.push(threeE);
sectionFive.push(fourE);
sectionFive.push(fiveE);
sectionFive.push(sixE);
sectionFive.push(sevenE);

sectionSix.push(oneF);
sectionSix.push(twoF);
sectionSix.push(threeF);
sectionSix.push(fourF);
sectionSix.push(fiveF);
sectionSix.push(sixF);
sectionSix.push(sevenF);

sectionSeven.push(oneG);
sectionSeven.push(twoG);
sectionSeven.push(threeG);
sectionSeven.push(fourG);
sectionSeven.push(fiveG);
sectionSeven.push(sixG);
sectionSeven.push(sevenG);


// T = createElement('h2', 'T');
// T.position(windowWidth/4 - 40, 200)
// I = createElement('h2', 'I');
// I.position(windowWidth/4 - 37, 250)
// M = createElement('h2', 'M');
// M.position(windowWidth/4 - 40, 300)
// E = createElement('h2', 'E');
// E.position(windowWidth/4 - 40, 350)
}


function windowResized(){
resizeCanvas( windowWidth, windowHeight);
}
function draw() {
  let r = random(sectionOne);
image(r, windowWidth/4 + 200, 50, 50, 700);

let a = random(sectionTwo);
image (a, windowWidth/4 + 250, 50, 50, 700);

let n = random(sectionThree);
image (n, windowWidth/4 + 300, 50, 50, 700);

let d = random(sectionFour);
image (d, windowWidth/4 + 350, 50, 50, 700);

let o = random(sectionFive);
image (o, windowWidth/4 + 400, 50, 50, 700);

let m = random(sectionSix);
image (m, windowWidth/4 + 450, 50, 50, 700);

let s = random(sectionSeven);
image (s, windowWidth/4 + 500, 50, 50, 700);



}
