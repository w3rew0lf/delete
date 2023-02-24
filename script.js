const url='https://9ced-122-161-50-113.in.ngrok.io/robot.png';
   const fetchText = (async () => {
   const response = await fetch(url);
   return await response.json();
})() 
