const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_val = document.getElementById('temp_val');
const dataHide = document.querySelector('.middle_layer');

const getInfo= async(e) => {
    e.preventDefault();
    const apiKey = "7fe5e9eaa5ed9fef0adad1e2afc45dac";
    const unit = "metric";
    const cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Please Enter City Name.`;
        dataHide.classList.add('data_hide');
    }else{
        try{
            const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&appid=" + apiKey + "&units=" + unit;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_val.innerText = arrData[0].main.temp;
            
            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear"){
                console.log("clear");
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                console.log("cloud");
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                console.log("rain");
                temp_status.innerHTML = 
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else{
                console.log("other");
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            dataHide.classList.remove('data_hide');
        }catch{
            city_name.innerText = "Please Enter City Name Properly.";
            dataHide.classList.add('data_hide');
        }
    }
    
}

submitBtn.addEventListener('click', getInfo);