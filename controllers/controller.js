const axios = require('axios');

const API_KEYS = 'f4ba14af644ffcbc4c6173503924b29f'; 




exports.renderHomepage = (req, res) => {
    res.render("index");
}

exports.renderAboutpage = (req, res) => {
    res.render("about");
    
}

exports.getWeather = (req, res) =>{
    console.log(req);
    const citys = req.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${API_KEYS}&units=metrics`;

   
    axios.get(url).then( (response) =>{

        res.render("index", {
            weather : `It is currently ${response.data.main.temp} in ${response.data.name}`
        });
        
       console.log(`It is currently ${res.data.main.temp} in ${res.data.name}`);
      

    }).catch((error ) => {
       // console.log(error);
    });
   

} 