<html>
<title>
    Weather Info
</title>
    <link rel="icon" href="Images/icon.jpg" type="image/x-icon">
    <link href="style.css" rel="stylesheet">
    <script src="script.js"></script>
<<<<<<< HEAD
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
=======
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
>>>>>>> d6e9a3b4bed14c002f72d3f2333d8ec3bc1d3c84
<body>
    <div class="header">
        <h1>Weather Info</h1>
    </div>
    <hr>
    <div class="frosted">
        <div class = "one-more">
            <label for="country-select" class="seperate">Select Country</label>
            <!-- </br> -->
            <select name="country-select" class ="selector" id="country-name" placeholder="Your Country" required onchange="setCity()">
                <option disabled>Select Country</option>
            </select> 
            </br>
            <label for="city-select" class="seperate">Select City</label>
            <!-- </br> -->
            <select name="city-select" class="selector" id="city-name" required onchange="getWeather()">
                <option disabled>Selct City</option>
            </select>
        </div>
        <form>
            <table>
                <tr>
                    <td><label for="place">Current Place: </label></td>
                    <td><input type="text" name="place" id="location" disabled></td>
                </tr>
                <tr>
                    <td><label for="region">Region: </label></td>
                    <td><input type="text" name="region" id="region" disabled></td>
                </tr>
                <tr>
                    <td><label for="local-time">Time: </label></td>
                    <td><input type="text" name="local-time" id="c-time" disabled></td>
                </tr>
                <tr>
                    <td><label for="utc-offset">UTC Offset: </label></td>
                    <td><input type="text" name="utc-offset" id="utc" disabled></td>
                </tr>
                <tr>
                    <td><label for="temp-c">Temperature (C): </label></td>
                    <td><input type="text" name="temp-c" id="c-temp" disabled></td>
                </tr>
                <tr>
                    <td><label for="temp-f">Temperature (F): </label></td>
                    <td><input type="text" name="temp-f" id="f-temp" disabled></td>
                </tr>
                <tr>
                    <td><label for="feels-like">Feels like: </label></td>
                    <td><input type="text" name="feels-like" id="f-like" disabled></td>
                </tr>
                <tr>
                    <td><label for="weather">Weather: </label></td>
                    <td><input type="text" name="weather" id="weather" disabled></td>
                </tr>
                <tr>
                    <td><label for="w-speed">Wind speed: </label></td>
                    <td><input type="text" name="w-speed" id="wind-speed" disabled></td>
                </tr>
                <tr>
                    <td><label for="pressure">Pressure: </label></td>
                    <td><input type="text" name="pressure" id="pressure" disabled></td>
                </tr>
                <tr>
                    <td><label for="humidity">Humidity: </label></td>
                    <td><input type="text" name="humidity" id="humidity" disabled></td>
                </tr>
                <tr>
                    <td><label for="uvi">UV Index: </label></td>
                    <td><input type="text" name="uvi" id="uv-index" disabled></td>
                </tr>
                <tr>
                    <td><label for="vis">Visibility: </label></td>
                    <td><input type="text" name="vis" id="visibility" disabled></td>
                </tr>
            </table>
            </form>
            <p id="last-observation" style="padding: 5px;"></p>
    </div>
<<<<<<< HEAD
    <hr>
    <p style="padding: 5px;">Copyright@WeatherInfo</p>
</body>
</html>
=======
	<p style="padding:5px;">Copyright@WeatherInfo</p>
</body>
</html>
>>>>>>> d6e9a3b4bed14c002f72d3f2333d8ec3bc1d3c84
