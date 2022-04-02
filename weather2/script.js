// api.openweathermap.org/data/2.5/forecast?q=london&appid=7ed62d785872e161eeaf064739e5b004




async function GetInfo(){
    let newName = document.getElementById("cityInput");
    let cityName= document.getElementById("cityName");
    cityName.innerHTML ="Your City is: "+newName.value;

 fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newName.value}&appid=d4df0cddf27a227053c1a99fea8082a7`)

// let res = await  fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${newName}&appid=7ed62d785872e161eeaf064739e5b004&units=metric`)

// let data = await res.json()
// console.log("data",data)
.then(responce=> responce.json())

.then(data=>{
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1)+"Min").innerHTML="Min: "+ Number(data.list[i].main.temp_min -288.53).toFixed(1)+"°C";
    
    }
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1)+"Max").innerHTML="Max: "+ Number(data.list[i].main.temp_max+-288.53).toFixed(1)+"°C";
    
    }
 
for(i=0;i<5;i++){
    document.getElementById("img" + (i+1)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
}


})

.catch(err =>alert("Something went Wrong"))


}

let d= new Date();
let weekday= ["Sunday","Monday","Tuesday","Wedsnesday","Thursday","Friday","Saturday"]

function CheckDay(day){
    if(day +d.getDay() > 6){
        return day +d.getDay()-7
    }
    else{
        return day + d.getDay();
    }
}

for(i=0;i<5;i++){
    document.getElementById("day"+ (i+1)).innerHTML = weekday[CheckDay(i)];
}









