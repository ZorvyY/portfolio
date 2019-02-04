function distance(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt(
    Math.pow(r1-r2, 2) + Math.pow(g1 - g2, 2), + Math.pow(b1-b2, 2));
}

function pixelDistance(p1, p2) {
  return distance(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]);
}

var imgCanv = document.createElement('canvas');
var context = imgCanv.getContext('2d');
var img = document.getElementById('myimg');
var img = new Image();
img.onload = function() {
  imgCanv.width = 200;
  imgCanv.height = 100;
  context.drawImage(img,0,0,200,100);
  document.body.appendChild(imgCanv);

  var imageData = context.getImageData(0, 0, img.width, img.height);


  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  console.log(imageData.data.length);
  const newData = new ImageData(200, 100);//= //new ImageData(imageData.data.slice(), 200, 100);

  function getPixel(i, j) {
    const idx = 4 * i * 200 + j * 4;
    return imageData.data.slice(idx, idx+4);
  }

  function setPixel(i, j, data) {
    const idx = 4 * i * 200 + j * 4;
    data.forEach((val, i) => {
      newData.data[idx + i] = data[i];
    });
  }
    

  

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 200; j++) {
      let currentPixel = getPixel(i,j);
      let max = 0;

      if (i != 0 && j != 0) {
        max = Math.max(max, 
          pixelDistance(currentPixel, getPixel(i-1, j-1)));
      } 
      if (i != 0) {
        max = Math.max(max, 
          pixelDistance(currentPixel, getPixel(i-1, j)));
      } 
      if (i != 0 && j != 200-1) {
        max = Math.max(max, 
          pixelDistance(currentPixel, getPixel(i-1, j+1)));
      } 

      if (j != 0) {
        max = Math.max(max, 
          pixelDistance(currentPixel, getPixel(i, j-1)));
      } 
      if (i != 200-1 && j != 0) {
        max = Math.max(max, 
          pixelDistance(currentPixel, getPixel(i+1, j-1)));
      } 

      if (i != 200-1) {
        max = Math.max(max, 
          pixelDistance(currentPixel, getPixel(i+1, j)));
      } 

      if (i != 200-1 && j != 200-1) {
        max = Math.max(max, 
          pixelDistance(currentPixel, getPixel(i+1, j+1)));
      } 
      if (j != 200-1) {
        max = Math.max(max, 
          pixelDistance(currentPixel, getPixel(i, j+1)));
      } 

      if (max >= 105) setPixel(i, j, [0,0,0,255]);
      else setPixel(i, j, [255,255,255,255]);

    }
  }

  ctx.putImageData(newData, 0, 0);

};
img.src = "tomcat.jpg";

//const imageData = ctx.createImageData(100, 100);
/*
// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  // Percentage in the x direction, times 255
  let x = (i % 400) / 400 * 255;
  // Percentage in the y direction, times 255
  let y = Math.ceil(i / 400) / 100 * 255;

  // Modify pixel data
  imageData.data[i + 0] = x;        // R value
  imageData.data[i + 1] = y;        // G value
  imageData.data[i + 2] = 255 - x;  // B value
  imageData.data[i + 3] = 255;      // A value
}
*/

// Draw image data to the canvas
