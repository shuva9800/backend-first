
// const express = require('express');
// const app=express();

// // use to parse req.body in express specially put & post case
// const bodyParser = require('body-parser');

// //specfically parse JASONI data & add it to the request.Body object
// app.use(bodyParser.json());

// app.listen(3000, ()=> {
//     console.log("server started on port no 3000")
// });

// app.get('/', (req, res)=>{
//   res.send("hello world!.....");
// })
// app.post('/api/cars',(req, res)=>{
//     const {name,brand} = req.body;
//     console.log(name);

//     console.log(brand);
//     res.send("successfully submitted car");
// })



// // const mongoose= require('mongoose');


// // mongoose.connect('mongodb://localhost:27017/myDatabase', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(()=> {console.log("connection successfull")})
// // .catch((error)=> {console.log("error occured")});
// const mongoose = require('mongoose');

//step1: create a folder
//step2: move into that folder
//step3: npm init -y
//step4: open folder using VSCode
//step5: npm i express 
//step6: create server.js

//Server Instantiate
const express = require('express');
const app = express();

//used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());


//activate the server on 3000 port
app.listen(8000, () => {
    console.log("Server Started at port no. 8000")
});


//Routes
app.get('/', (request,response) => {
    response.send("hello Jee , kaise ho saare");
})

app.post('/api/cars', (request,response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recieved an error" + error)} );
