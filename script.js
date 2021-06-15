let countryName, countryObj;
let cityName;
let urlcountry = "https://countriesnow.space/api/v0.1/countries";
let countryRequest = new XMLHttpRequest();
countryRequest.open("GET", urlcountry);
countryRequest.send();
countryRequest.onload = () => {
    countryObj = JSON.parse(countryRequest.response);
    var dropdown = document.getElementById("country-name");
    for (var i = 0; i < countryObj.data.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = countryObj.data[i].country;
        dropdown.options.add(option);
    }
}

function setCity() {
    let z, l = document.getElementById("city-name").options.length - 1;
    for (z = l; z >= 0; z--) {
        document.getElementById("city-name").remove(z);
    }
    let firstOne = document.createElement("option");
    firstOne.innerHTML = "Select City";
    firstOne.disabled = true;
    document.getElementById("city-name").add(firstOne);

    for (let i = 0; i < countryObj.data.length; i++) {
        if (countryObj.data[i].country == document.getElementById("country-name").value) {
            console.log(countryObj.data[i].country);
            for (let j = 0; j < countryObj.data[i].cities.length; j++) {
                let newOption = document.createElement("option");
                newOption.innerHTML = countryObj.data[i].cities[j];
                document.getElementById("city-name").add(newOption);
            }
            break;
        }
    }
}

var sky;
var img = false;
var imgId;
var bg = false;
var bgClass;

function getWeather() {
    cityName = document.getElementById("city-name").value;
    console.log(cityName);
    // let url = "http://api.weatherstack.com/current?access_key=220419e1d2eb28444afff031cb1bf17a&query="+cityName;
    const apiKey = 'bd7228b267c6855b266b2f63b49faf53';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();
    req.onload = () => {
        let obj = JSON.parse(req.response);
        // console.log(obj);
        if (obj.cod == 404) {
            noData();
        }
        else {
            document.getElementById('error').style.display = 'none'
            document.getElementById('data').style.display = 'block';
            // console.log(obj.weather);
            const timeNow = obj.dt;
            const utcOff = obj.timezone;
            const sunset = obj.sys.sunset;
            const sunrise = obj.sys.sunrise;
            var sunsetTime = new Date(sunset * 1000 + utcOff * 1000).toISOString().split("T")[1].split(".")[0];
            var sunriseTime = new Date(sunrise * 1000 + utcOff * 1000).toISOString().split("T")[1].split(".")[0];
            // console.log(sunriseTime, sunsetTime);
            var date = new Date(timeNow * 1000 + utcOff * 1000).toISOString();
            var ctime = date.split("T")[1].split(".")[0];
            // console.log(ctime);
            var hours = ctime.split(":")[0];
            var min = ctime.split(":")[1];
            var img = false;
            if (hours >= sunriseTime.split(":")[0] && hours < sunsetTime.split(":")[0]) {
                sky = 'light';
            }
            else {
                sky = 'dark';
            }
            console.log(sky);

            if (sky == 'light') {
                if (obj.weather[0].description == 'sunny') {
                    setBackGround('sunny');
                    setImage('sunny-img');
                    console.log('sunny')
                }
                else if (obj.weather[0].description == 'clear sky') {
                    setBackGround('clear-sky');
                    setImage('warm-img')
                    console.log('clear sky');
                }
                else if (obj.weather[0].description.includes('rains') || obj.weather[0].description.includes('rain')) {
                    setBackGround('light-rains');
                    setImage('rain-img')

                    console.log('rains');

                }
                else if (obj.weather[0].description.includes('clouds')) {
                    console.log('clouds');
                    setDarkFont();
                    setImage('cloudy-img')
                    setBackGround('light-clouds');

                }
                else if (obj.weather[0].description.includes('haze')) {
                    console.log('haze');
                    setBackGround('light-haze');
                    setImage('haze-img');
                }
                else if (obj.weather[0].description.includes('snow')) {
                    console.log('snow');
                    setBackGround('light-snow')
                    setDarkFont();
                    setImage('snow-img');
                }
                else {
                    setBackGround('light');
                    setImage('warm-img');
                    console.log('fallback')
                }
            }
            else if (sky == 'dark') {
                if (obj.weather[0].description == 'clear sky') {
                    setBackGround('dark-clear');
                    setImage('stars-img');
                    console.log('clear sky');
                    setLightFont();
                }


                else if (obj.weather[0].description.includes('rains') || obj.weather[0].description.includes('rain')) {
                    console.log('rains');
                    setBackGround('dark-rains');
                    setImage('rain-img')
                }
                else if (obj.weather[0].description.includes('clouds')) {
                    console.log('clouds');
                    setBackGround('dark-clouds');
                    setLightFont();
                    setImage('cloudy-img');

                }
                else if (obj.weather[0].description.includes('snow')) {
                    console.log('snow')
                    setBackGround('dark-snow');
                    setImage('snow-img');
                }
                else if (obj.weather[0].description.includes('haze')) {
                    console.log('haze');
                    setBackGround('dark-haze');
                    setImage('haze-img')
                }
                else {
                    setBackGround('dark');
                    setImage('dark-img');
                    console.log('fallback');
                }
            }
            document.getElementById('location-text').innerHTML = obj.name;
            document.getElementById("current-time").value = ctime;
            document.getElementById("temperature").value = obj.main.temp + ' ' + String.fromCharCode(176) + 'C';
            document.getElementById("feels-like").value = obj.main.feels_like + ' ' + String.fromCharCode(176) + 'C';
            document.getElementById("min-temp").value = obj.main.temp_min + ' ' + String.fromCharCode(176) + 'C';
            document.getElementById("max-temp").value = obj.main.temp_max + ' ' + String.fromCharCode(176) + 'C';
            document.getElementById("weather").value = obj.weather[0].description;
            document.getElementById("humidity").value = obj.main.humidity + '%';
            document.getElementById("windspeed").value = obj.wind.speed + ' m/s, ' + obj.wind.deg + String.fromCharCode(176);
            document.getElementById("pressure").value = obj.main.pressure + 'hPa';
            document.getElementById("sunset").value = sunsetTime;
            document.getElementById("sunrise").value = sunriseTime;




        }

    }
}

function setLightFont() {
    var d = document.getElementById('data').querySelectorAll('input');
    d.forEach((item) => {
        item.style.color = '#fff'
    })
    var l = document.getElementById('data').querySelectorAll('label');
    l.forEach((item) => {
        item.style.color = '#fff'
    })
    document.getElementById('location-text').style.color = '#fff'
}

function setDarkFont() {
    var d = document.getElementById('data').querySelectorAll('input');
    d.forEach((item) => {
        item.style.color = '#000'
    })
    var l = document.getElementById('data').querySelectorAll('label');
    l.forEach((item) => {
        item.style.color = '#000'
    })
    document.getElementById('location-text').style.color = '#000'

}

function setImage(id) {
    if (img) {
        document.getElementById(imgId).style.display = 'none';
        imgId = id;
        document.getElementById(id).style.display = 'block';
    }
    else {
        img = true;
        imgId = id;
        document.getElementById(id).style.display = 'block';
        console.log('starting with', imgId)
    }
}

function setBackGround(name) {
    if (bg) {
        console.log('changed bg from ', bgClass)
        document.getElementById('body').classList.remove(bgClass);
        document.getElementById('body').classList.add(name);
        bgClass = name;
        console.log('to ', bgClass)
    }
    else {
        console.log('starting with normal');
        document.getElementById('body').classList.remove('normal');
        bg = true;
        document.getElementById('body').classList.add(name);
        bgClass = name;
        console.log('changed to ', bgClass)
    }
}

function noData() {
    document.getElementById('data').style.display = 'none';
    document.getElementById('error').style.display = 'block';
    setImage('error-img')
    setBackGround('error');
}