const img = new Image();
img.onload = function() {
  console.log('Image loaded');
};
img.onerror = function() {
  console.error('Error loading image');
};
img.src = 'https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg';
