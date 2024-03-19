function getweather(){

let w = document.getElementById("scan").value;
    console.log(w)

let v = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${w}&appid=beea3435003dac5511b106b3cd2c6350`);
v.then((vv)=>{

return vv.json();


}).then((rr)=>{

console.log(rr);
let temp = `<h2>${rr.main.temp}</h2><p>feels like ${rr.main.feels_like}</p>`
let name = `<h1>${rr.name}</h1>`
let humidity = `<h2>${rr.main.humidity}</h2>`
let pressure = `<h2>${rr.main.pressure}</h2>`
let wind = `<h2>deg ${rr.wind.deg} Speed ${rr.wind.speed}</h2>`
document.getElementById("gettemp").innerHTML=temp
document.getElementById("getname").innerHTML=name
document.getElementById("gethum").innerHTML=humidity
document.getElementById("getpre").innerHTML=pressure
document.getElementById("getwind").innerHTML=wind
});

}