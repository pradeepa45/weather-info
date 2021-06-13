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
            for (let j = 0; j < countryObj.data[i].cities.length; j++) {
                let newOption = document.createElement("option");
                newOption.innerHTML = countryObj.data[i].cities[j];
                document.getElementById("city-name").add(newOption);
            }
            break;
        }
    }
}


function getWeather() {
    cityName = document.getElementById("city-name").value;
    console.log(cityName);
    // let url = "http://api.weatherstack.com/current?access_key=220419e1d2eb28444afff031cb1bf17a&query="+cityName;
    const apiKey = 'bd7228b267c6855b266b2f63b49faf53';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();
    req.onload = () => {
        let obj = JSON.parse(req.response);
        console.log(obj);
        if (obj.cod == 404) {
            document.getElementById('error').style.display = 'block'
        }
        else {
            document.getElementById('data').style.display = 'block';
            console.log(obj.weather);
            const timeNow = obj.dt;
            var date = new Date(timeNow * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();
            var ctime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            document.getElementById("current-time").value = ctime;
            document.getElementById("temperature").value = obj.main.temp;
            document.getElementById("feels-like").value = obj.main.feels_like;
            document.getElementById("min-temp").value = obj.main.temp_min;
            document.getElementById("max-temp").value = obj.main.temp_max;
            document.getElementById("weather").value = obj.weather[0].description;
            document.getElementById("humidity").value = obj.main.humidity;
            document.getElementById("windspeed").value = obj.main.temp_max;
            document.getElementById("pressure").value = obj.main.pressure;
        }

    }
}