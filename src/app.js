const path = require("path")
const express = require("express")      //getting express lib

const app = express()                   //defining express function is a top level function of express

//console.log(__dirname)              // __dirname is used to get current directory address
const publicPath = path.join(__dirname,'../public')         //path.join ethod append the dir address as string

app.use(express.static(publicPath))


/**** Commenting this bcz we are now inteactivng with HTML DOM elements if we we want to use only throgh Express use this ****/

// app.get('/', (req,res) => {                  //this get fun is executed if we are not deling with html element only depends on react js 
//     res.send("<h2><i>Welcome to Express</i></h2>")
// })

// app.get('/help', (req,res) => {             // get function is used  get request or send responce
//     res.send("This is Help page")          //res is responce attribute of get function for express is used to send the responce to browser
    
// })

// app.get('/about',(req,res) => {
//     //res.send("About page Info")                   //for demo practice
//     res.send([{                              //here we are sening the json data to browser also we are using array of json
//         name:'shivam',
//         age: 27
//     },{
//         name: 'ana',
//         age:25
//     }]) 
// })

app.get('/weather',(req,res) => {
    //res.send("Your weather information")
    res.send([{
        forcast: 'todays forecast',    
        location: 'solapur'
    }
    ])
})



app.listen(3000 , ()=> {
    console.log("Application is running on 3000")
})