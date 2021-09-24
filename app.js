const express = require('express');
let cities = require('./city.list.json'); // your json file path
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get("/cities", (req,res) => {
   //req.headers.city
  //  console.log(cities.filter(word => word.name.includes('Boston')))
   let searchResults = cities.filter(word => word.name.includes(req.headers.city))
   console.log(searchResults)
   res.send(searchResults);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

