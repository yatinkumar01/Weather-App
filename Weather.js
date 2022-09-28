async function myCity(){
    let city_name=document.getElementById('city_name').value;
    let res1=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&cnt=7&appid=b709e4d74528e4227b090b0fb9e3a2b6`);
    let six_days=await res1.json();

    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&cnt=16&appid=b709e4d74528e4227b090b0fb9e3a2b6`);
    let weather_details=await res.json();

    document.getElementById('city_name').value="";
    if(weather_details.name!==undefined){

   document.getElementById('six_days').innerHTML="";
   document.getElementById('wrong_city').innerHTML="";
   document.getElementById('all_details').innerHTML="";
   document.getElementById('temp_degree').innerHTML="";

   for(let i=1;i<7;i++){
        
    let day="0"+i+"d";
    let night="0"+9+"n";
    if(i===1||i===2||i===3||i===4||i===5){
       
    if(i===5){
    let h4=document.createElement('h4');
    h4.innerText=Math.floor(Number(six_days.list[i].main.temp_max))-273;
    
    let img=document.createElement('img');
    img.src="https://openweathermap.org/img/wn/09d@2x.png";
    
    let div=document.createElement('div');
    div.append(img,h4);
    }
    else{
    let h4=document.createElement('h4');
    h4.innerText=Math.floor(Number(six_days.list[i].main.temp_max))-273;

    let img=document.createElement('img');
    img.src="https://openweathermap.org/img/wn/"+day+"@2x.png";

    let div=document.createElement('div');
    div.append(img,h4);
    document.getElementById('six_days').append(div);
    }
    }
    else{
    let h4=document.createElement('h4');
    h4.innerText=Math.floor(Number(six_days.list[i].main.temp_max))-273;

    let img=document.createElement('img');
    img.src="https://openweathermap.org/img/wn/"+night+"@2x.png";

    let div=document.createElement('div');
    div.append(img,h4);
    
    document.getElementById('six_days').append(div);
    }
    }

   let iframe=document.getElementById("gmap_canvas");
   iframe.src=`https://maps.google.com/maps?q=${weather_details.name}&t=&z=13&ie=UTF&&iwloc=&output=embed`;

   let other_details=document.createElement("div");
    other_details.setAttribute('id','other_details');

    let other=document.createElement("div");
    other.setAttribute('id','other');

    let h38=document.createElement('h4');
    h38.innerText='Description';

    let h31=document.createElement('h4');
    h31.innerText='Temperature Maximum';

    let h32=document.createElement('h4');
    h32.innerText='Temperature Minimum';

    let h33=document.createElement('h4');
    h33.innerText='Pressure';

    let h34=document.createElement('h4');
    h34.innerText='Humidity';

    let h35=document.createElement('h4');
    h35.innerText='Visibility';

    let h36=document.createElement('h4');
    h36.innerText='Wind Speed';

    let h37=document.createElement('h4');
    h37.innerText='Wind Degree';

    other.append(h38,h31,h32,h33,h34,h35,h36,h37);

    document.getElementById('all_details').append(other);


    let city_div=document.createElement('div');

    let city=document.createElement('h2');
    city.innerText=weather_details.name;

    city_div.append(city);

    document.getElementById('temp_degree').append(city_div);

    let temp=document.createElement("h1");
    temp.innerText=Math.floor(Number(weather_details.main.temp)-273);

    let temp_degree_icon=document.createElement("p");
    temp_degree_icon.innerText='o';

    document.getElementById('temp_degree').append(temp,temp_degree_icon);


    let temp_max=document.createElement("p");
    temp_max.innerText=Math.floor(Number(weather_details.main.temp)-273);


    let temp_min=document.createElement("p");
    temp_min.innerText=Math.floor(Number(weather_details.main.temp_min)-273);


    let pressure=document.createElement("p");
    pressure.innerText=weather_details.main.pressure;

    let humidity=document.createElement("p");
    humidity.innerText=weather_details.main.humidity;

    let visibility=document.createElement("p");
    visibility.innerText=weather_details.visibility;

    let wind_speed=document.createElement("p");
    wind_speed.innerText=weather_details.wind.speed;

    let wind_deg=document.createElement("p");
    wind_deg.innerText=weather_details.wind.deg;

    let weather_main=document.createElement("p");
    weather_main.innerText=weather_details.weather[0].description;

    other_details.append(weather_main,temp_max,temp_min,pressure,humidity,visibility,wind_speed,wind_deg);

    document.getElementById("all_details").append(other_details);

    }
    else{
       let iframe=document.getElementById("gmap_canvas");
       iframe.src="";
       document.getElementById('all_details').innerHTML="";
       document.getElementById('temp_degree').innerHTML="";
       document.getElementById('wrong_city').innerHTML="";
       document.getElementById('six_days').innerHTML="";
       let wrong_city=document.createElement('h1');
       wrong_city.innerText="Please Enter Valid City Name";
       wrong_city.style.color="red";
       document.getElementById('wrong_city').append(wrong_city);
    }
}