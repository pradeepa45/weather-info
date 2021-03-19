let countryName,countryObj;
let cityName;
let urlcountry =  "https://countriesnow.space/api/v0.1/countries";
let countryRequest = new XMLHttpRequest();
countryRequest.open("GET", urlcountry);
countryRequest.send();
countryRequest.onload = ()=>{
    countryObj = JSON.parse(countryRequest.response);
    var dropdown = document.getElementById("country-name");
    for(var i=0; i<countryObj.data.length; i++){
        var option = document.createElement("option");
        option.innerHTML = countryObj.data[i].country;
        dropdown.options.add(option);
    }
}

function setCity(){
    let z, l = document.getElementById("city-name").options.length - 1;
    for(z = l; z>=0; z--){
        document.getElementById("city-name").remove(z);
    }
    let firstOne = document.createElement("option");
    firstOne.innerHTML = "Select City";
    firstOne.disabled = true;
    document.getElementById("city-name").add(firstOne);

    for(let i=0; i<countryObj.data.length; i++){
        if(countryObj.data[i].country == document.getElementById("country-name").value){
            for(let j=0; j< countryObj.data[i].cities.length; j++){
                let newOption = document.createElement("option");
                newOption.innerHTML = countryObj.data[i].cities[j];
                document.getElementById("city-name").add(newOption);
            }
            break;
        }
    }
}

function getWeather(){
    cityName = document.getElementById("city-name").value;
    // console.log(cityName);
    let url = "http://api.weatherstack.com/current?access_key=220419e1d2eb28444afff031cb1bf17a&query="+cityName;
    let req = new XMLHttpRequest(); 
    req.open("GET", url);
    req.send();
    req.onload = ()=>{
        let obj = JSON.parse(req.response);
        // console.log(obj);
        let timeNow = obj.location.localtime;
        let splitTimeNow = timeNow.split(" ");
        console.log(splitTimeNow[1]);
        if(splitTimeNow[1] < "03:00" || splitTimeNow[1] >= "19:00"){
            // var period = "early morning";
            var darkOrLight = "dark";
        }
        else{
            var darkOrLight = "light"
        }


        let sc = obj.current.weather_descriptions
        let w = obj.current.weather_code;

        console.log(darkOrLight+ " " + sc + " " + w);
        if(darkOrLight == "light"){
            if(w == 113 && sc == "Sunny"){
                //sunny or clear sky
                document.body.style.backgroundImage = "url('Images/sunny.jpg')";
            }
            else if(w == 113 && sc == "Clear"){
                document.body.style.backgroundImage = "url(Images/clearday.jpg)";
            }
            else if(w == 116){
                //partly cloudy
                document.body.style.backgroundImage = "url('Images/lightpc.jpg')";
            }
            else if(w == 119){
                //cloudy
                document.body.style.backgroundImage = "url('Images/cloudy.jpg')";
            }
            else if(w == 122){
                document.body.style.backgroundImage = "url('Images/overcast.jpg')";
            }
            else if(w == 143 || w == 260 || w == 248){
                //mist and fog
                document.body.style.backgroundImage = "url('Images/lightmist.jpg')";
                // document.input.style.color = "black";
            }
            else if(w == 281 || w == 311 || w == 286 || w == 296 || w == 176 || w == 263 || w == 185 || w == 353 || w == 293 || w == 284 || w == 317 || w == 362){
                //light rain
                document.body.style.backgroundImage = "url('Images/lightmist.jpg')";
            }
            else if(w == 302 || w == 299 || w == 359 || w == 356 || w == 314 || w == 308 || w == 305 || w == 320 || w == 182){
                //moderate and heavy rain
                document.body.style.backgroundImage = "url('Images/heavyrain.jpg')";
            }
            else if(w == 392 || w == 179 || w == 332 || w ==  395 || w == 335 || w == 329 || w == 326 || w == 323 || 371 || w == 368){
                //snow
                document.body.style.backgroundImage = "url('Images/snow.jpg')";
            }
            else if(w == 200){
                //thunders
                document.body.style.backgroundImage = "url('Images/lightthunders.jpg')";
            }
            else if(w == 230 || w == 227){
                //blizzard
                document.body.style.backgroundImage = "url('Images/blizzard.jpg')";
            }
        }
        else{
            if(w == 113 && sc == "clear"){
                //sunny or clear sky
                document.body.style.backgroundImage = "url('Images/clearnight.jpg')";
            }
            else if(w == 113 && sc == "Sunny"){
                document.body.style.backgroundImage = "url('Images/sunny.jpg')";
            }
            else if(w == 116){
                //partly cloudy
                document.body.style.backgroundImage = "url('Images/pcnight.jpg')";
            }
            else if(w == 119){
                //cloudy
                document.body.style.backgroundImage = "url('Images/cloudy.jpg')";
            }
            else if(w == 122){
                document.body.style.backgroundImage = "url('Images/overcast.jpg')";
            }
            else if(w == 143 || w == 260 || w == 248){
                //mist
                document.body.style.backgroundImage = "url('Images/nightmist.jpg')";
            }
            else if(w == 281 || w == 311 || w == 286 || w == 296 || w == 176 || w == 263 || w == 185 || w == 353 || w == 293 || w == 284 || w == 317 || w == 362){
                //light rain
                document.body.style.backgroundImage = "url('Images/lightmist.jpg')";
            }
            else if(w == 302 || w == 299 || w == 359 || w == 356 || w == 314 || w == 308 || w == 305 || w == 320 || w == 182){
                //heavy rain
                document.input.style.backgroundImage = "url('Images/rainy.jpg')";
            }
            else if(w == 392 || w == 179 || w == 332 || w ==  395 || w == 335 || w == 329 || w == 326 || w == 323 || 371 || w == 368){
                //snow
                document.body.style.backgroundImage = "url('Images/nightsnow.jpg')";
            }
            else if(w == 200){
                //thunders
                document.body.style.backgroundImage = "url('Images/darkthunders.jpg')";
            }
            else if(w == 230 || w == 227){
                //blizzard
                document.body.style.backgroundImage = "url('Images/darkb.jpg')";
            }
            else{
                document.body.style.backgroundImage = "url('Images/bgi.jpg')";
            }
        }
        // console.log(obj.current.temperature);
        document.getElementById("location").value = obj.location.name + ", " + obj.location.country;
        document.getElementById("region").value = obj.location.region;
        document.getElementById("c-time").value = obj.location.localtime;
        document.getElementById("utc").value = obj.location.utc_offset;
        document.getElementById("c-temp").value = obj.current.temperature;
        document.getElementById("f-temp").value = ((obj.current.temperature)*1.8 + 32).toFixed(3);
        document.getElementById("weather").value = obj.current.weather_descriptions;
        document.getElementById("f-like").value = obj.current.feelslike;
        document.getElementById("wind-speed").value =obj.current.wind_speed;
        document.getElementById("pressure").value = obj.current.pressure;
        document.getElementById("humidity").value = obj.current.humidity;
        document.getElementById("uv-index").value = obj.current.uv_index;
        document.getElementById("visibility").value = obj.current.visibility;
        // document.getElementById("weather-icon").img = obj.current.weather_icons;
        var observedTimeUTC = obj.current.observation_time;
        var para = document.getElementById("last-observation");
        para.innerHTML = " ";
        var t = document.createTextNode("**Last observed at " + observedTimeUTC + " UTC");
        para.appendChild(t);
        //     let obj = JSON.parse(req.response);
        //     console.log(req.response);
        //     
        // // console.log(city);
    }
}

