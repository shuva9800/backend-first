const express = require('express');
const app=express();

// use to parse req.body in express specially put & post case
const bodyParser = require('body-parser');

//specfically parse JASONI data & add it to the request.Body object
app.use(bodyParser.json());

app.listen(3000, ()=> {
    console.log("server started on port no 3000")
});

app.get('/', (req, res)=>{
  res.send("hello world!.....");
})
app.post('/api/cars',(req, res)=>{
    const {name,brand} = req.body;
    console.log(name);

    console.log(brand);
    res.send("successfully submitted car");
})