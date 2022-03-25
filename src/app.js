const path = require("path")
const express = require("express")      //getting express lib

const app = express()                   //defining express function is a top level function of express

//console.log(__dirname)              // __dirname is used to get current directory address

//defineing the paths
const publicPath = path.join(__dirname,'../public')         //path.join ethod append the dir address as string
//const viewPath = path.join(__dirname,'../templetes')      // if we are renaming the view folder name with template use this

//setup handlebars engine and views location using set method
app.set('view engine', 'hbs')
//app.set('views',viewPath)                                // if we are renaming the view folder name with template use this                         


//setup static directory to serve
app.use(express.static(publicPath))

// below methods are used for hbs  handal bars which is located in views folder
app.get('', (req,res) => {          //1st arg is empty '' bcz this indicates that this is index page and for index page we dont need address

    res.render('index', {   //render is goes to view folder and gets the html file | 1st arg is the html file view and (optional)2nd arg is obj that can pass to that file
            title: 'Express - Webserver',
            name: 'Web-Server Application'
    })            
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/help',(req,res)=>{        
    res.render('help' , {
        helptext: 'Wel-come to helpdesk in web-server app'
    })          //this is file name from view with hbs extention
})

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