var pi = Math.PI;

function calculateSquareArea(w, l) {
  return w * l;
}

function calculateSquarePerimeter(w, l) {
  return 2 * w + 2 * l;
}

function calculateCircleArea(r) {
  return pi * r * r;
}

function calculateCircleCircumference(r) {
  return 2 * pi * r;
}

function calculateCubeArea(a) {
  return 6 * a * a;
}

function calculateCubeVolume(a) {
  return a * a * a;
}

function calculateTubeArea(r, h) {
  return (2 * (2 * pi * r)) + ((2 * pi * r) * h)
}

function calculateTubeVolume(r, h) {
  return pi * r * r * 2 * h;
}



// level 1

var squareArea = calculateSquareArea(5, 5);
console.log(`square area = ${squareArea}`);

var squarePerimeter = calculateSquarePerimeter(5, 5);
console.log(`square perimeter = ${squarePerimeter}`);

var circleArea = calculateCircleArea(2);
console.log(`circle area = ${circleArea}`);

var circleCircumference = calculateCircleCircumference(2);
console.log(`circle circumference = ${circleCircumference}`);

var cubeArea = calculateCubeArea(5);
console.log(`cube area = ${cubeArea}`);

var cubaVolume = calculateCubeVolume(5);
console.log(`cube volume = ${cubaVolume}`);

var tubeArea = calculateTubeArea(5, 2);
console.log(`tube area = ${tubeArea}`);

var tubeVolume = calculateTubeVolume(2, 8);
console.log(`tube volume = ${tubeVolume}`);



// level 2
function add(varA, varB) {
  return varA + varB;
}
squareArea = calculateSquareArea(add(2, 2), 3);
console.log(`square area = ${squareArea}`);

function calculateTubeVolumeWithCircle(circleArea, h) {
  return circleArea * h;
}
tubeVolume = calculateTubeVolumeWithCircle(calculateCircleArea(2), 7);
console.log(`tube volume = ${tubeVolume}`);