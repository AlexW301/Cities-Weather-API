const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get("/cities", (req,res) => {
    const cities = [
    {
      id: 1,
      name: "boston",
    },
    {
        id: 2,
        name: "boston",
      },
    {
      id: 3,
      name: "new york",
    },
    ,
    {
      id: 4,
      name: "salem",
    },
   ];

   //req.headers.city
   let searchResults = cities.filter(res => res.name.includes(req.headers.city))
   console.log(searchResults)
   res.send(searchResults);
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

