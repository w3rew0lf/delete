const xhr = new XMLHttpRequest();
xhr.open("GET", "https://9ced-122-161-50-113.in.ngrok.io/robot.png");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.response);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
