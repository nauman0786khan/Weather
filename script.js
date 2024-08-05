function getweather(){

var w = document.getElementById("scan").value;
    console.log(w)

let v = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${w}&appid=beea3435003dac5511b106b3cd2c6350`);
v.then((vv)=>{

return vv.json();


}).then((rr)=>{

console.log(rr);
let temp = `<h2>${Math.round((rr.main.temp-273.15).toFixed(2))}&#176C</h2><p>Feels like ${(rr.main.feels_like-273.15).toFixed(2)}&#176C</p>`
let name = `<h2>${rr.name}</h2>`
let humidity = `<h2>${rr.main.humidity}</h2>`
let pressure = `<h2>${rr.main.pressure}</h2>`
let wind = `<h2>${Math.round((rr.wind.speed*1.60934).toFixed(2))}<span style=font-size:16px;>Km/h</sp></h2>`
let location =`<div style="max-width:100%;overflow:hidden;color:red;width:100%;height:300px;"><div id="google-maps-display" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=${rr.name},+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="the-googlemap-enabler" href="https://www.bootstrapskins.com/themes" id="authmaps-data">premium bootstrap themes</a><style>#google-maps-display img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div>`
let wc = rr.weather[0].main;
console.log(wc)
let highlo=`<div id="High"><p>High ${Math.round((rr.main.temp_max-273.15).toFixed(2))}&#176C</p></div><div id="low"><p>Low ${Math.round((rr.main.temp_min-273.15).toFixed(2))}&#176C</p></div>`
console.log(humidity);
let locname=`<Button class="location btn">${w}</Button>`
console.log(locname)
let deg = `<h2>${rr.wind.deg}</h2>`
var tm = rr.main.temp
var cal = (tm-273.15);

document.getElementById("highlow").innerHTML=highlo;
document.getElementById("gettemp").innerHTML=temp;
document.getElementById("getname").innerHTML= name;
document.getElementById("locget").innerHTML=location;
document.getElementById("getwind").innerHTML=wind;
document.getElementById("getpre").innerHTML=pressure;
document.getElementById("deg").innerHTML=deg;

document.getElementById("gethum").innerHTML= humidity;


let wh = document.getElementById("bo");
wh.classList.add("boxw1");




});
let U = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Uttar Pradesh
&appid=beea3435003dac5511b106b3cd2c6350`);
U.then((UP)=>{

return UP.json();


}).then((pp)=>{

console.log(pp);
let UPtemp = `<h2>${Math.round((pp.main.temp-273.15).toFixed(2))}&#176C</h2><p>Feels like ${Math.round((pp.main.feels_like-273.15).toFixed(2))}&#176C</p>`
document.getElementById("UPtem").innerHTML=UPtemp;
});

let hh = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Haryana&appid=beea3435003dac5511b106b3cd2c6350`);
hh.then((hr)=>{

return hr.json();


}).then((hr1)=>{

console.log(hr1);
let hrtemp = `<h2>${Math.round((hr1.main.temp-273.15).toFixed(2))}&#176C</h2><p>Feels like ${Math.round((hr1.main.feels_like-273.15).toFixed(2))}&#176C</p>`
document.getElementById("hrtem").innerHTML=hrtemp;
});
}
