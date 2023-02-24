const img = new Image();
img.onload = function() {
  console.log('Image loaded');
};
img.onerror = function() {
  console.error('Error loading image');
};
img.src = 'https://9ced-122-161-50-113.in.ngrok.io/robot.png';
