document.onload = function() {
            var val = document.getElementById('imagename').value,
                src = 'https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg',
                img = document.createElement('img');

            img.src = src;
            document.body.appendChild(img);
