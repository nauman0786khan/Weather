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
let location =`<div style="max-width:100%;overflow:hidden;color:red;width:100%;height:500px;"><div id="google-maps-display" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=${rr.name},+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="the-googlemap-enabler" href="https://www.bootstrapskins.com/themes" id="authmaps-data">premium bootstrap themes</a><style>#google-maps-display img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div>`

document.getElementById("gettemp").innerHTML=temp
document.getElementById("getname").innerHTML=name
document.getElementById("gethum").innerHTML=humidity
document.getElementById("getpre").innerHTML=pressure
document.getElementById("getwind").innerHTML=wind
document.getElementById("locget").innerHTML=location
});

}