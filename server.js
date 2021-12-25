// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require ('express');
const app = express();

//Dependencies
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const myPort = 8000;

const server = app.listen(myPort, ()=> {

    console.log(`your server is running now in http://localhost:' ${myPort}`);

})

// initiol  route with a call back function

app.get('/postData', (request,response)=>{
    res.send(projectData);
  
}); 
    
//   post route  

app.post('/post' , (request , response) =>{
    console.log(request.body);

      temp=     request.body.temp,
      newDate=  request.body.newDate,
      feeling=  request.body.feeling


})
 
  
