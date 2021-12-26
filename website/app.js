// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()++1'.'+ d.getDate()+'.'+ d.getFullYear();

let Zip_Code = "";
let temp ='';
let feeling = "";

// APi source key
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = ",us&appid=b04ec97ab0485c606ba2ca31f3d4405c"


document.getElementById('generate').addEventListener('click' ,(es)=>{

    const Zip_Code = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;

    getInfo(baseURL , apiKey , Zip_Code)  
    
    .then(function(data){
        console.log(data);
        postData('/',{
            temp:temp, 
            newDate:newDate, 
            feeling:feeling});
        updateUI();
    }) ;

});

const getInfo = async (url) =>{

    const response = await fetch(url)

    try {
        const  myData  = await response.json();
        console.log(myData);

        return myData;
    } catch(error) {
        console.log('you have an error and it is :'+ error );
    }
}

const postData = async (url = '' ,data  = {})=> {
    const response = await fetch(url , {
        method : 'POST',
        credentials: 'same-origin',
        Headers :{
            'content-type' : 'application/json',
        },
            // creat JSON String
        body: JSON.stringify(data),

    })

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;


    } catch(error) {

        console.log('you have an error and it is :'+ error );

    }

} 

const updateUI = async ()=>{
    const request = await fetch('/any')

    try {

      const anyData = await request.json();

      document.getElementById('date').innerHTML = `${anyData.newDate}`;
      document.getElementById('temp').innerHTML = `${anyData.temp}°`;
      document.getElementById('content').innerHTML =`I Feel: ${anyData.feeling}`;
  
    }
    catch(error) {
        console.log('you have an error and it is :'+ error );
    }
  };
