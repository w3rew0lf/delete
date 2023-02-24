$.get(
    "https://9ced-122-161-50-113.in.ngrok.io/robot.png",
    {paramOne : 1, paramX : 'abc'},
    function(data) {
       alert('page content: ' + data);
    }
);
