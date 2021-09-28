const https = require('https');

https.get({
  port: 8080,
  hostname: 'weather-by-cities.azurewebsites.net',
  path: '/cities',
  headers: { city: 'Boston'},
}, (res) => {
  console.log("connected");
  res.on("data", (chunk) => {
    console.log("chunk", "" + chunk);
  });
  res.on("end", () => {
    console.log("No more data");
  });
  res.on("close", () => {
    console.log("Closing connection");
  });
});