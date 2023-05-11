function show_block(x) {
    x.style.display = 'block';

}
function hide_block(x) {
    x.style.display = 'none';
    x.style.color = 'red';
}
function show(y){
y.style.display="block";
}
function slide_left(x){
    x.style.transform = 'translateX(-614px)';
}
function slide_right(x){
    x.style.transform = 'translateX(0px)';
}
function hide(x){
    x.style.display="none";
}

// --------------------------Dark Mode-------------------------------------------

function changeMode(){
        let mybody = document.body;
        mybody.classList.toggle('mydark');
        document.getElementById('sec1').classList.toggle('mydark1');
        document.getElementById('sec2').classList.toggle('mydark1');
}

// ------------------------------------------------------------------------------------

// --------------------Coupon------------------------------------------------------
 
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.3'

    document.querySelector("body").style.overflow='hidden';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1'
    document.querySelector("body").style.overflow='visible';
}

// -------------------------------------------------------------------------------


// ------------------------------------------GeoLocation------------------------------

window.onload(geolocation());
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        p.innerText="Geo Not Supported"
    }
}

function showPosition(data){
    let p = document.getElementById('out');
    let q = document.getElementById('weather');
    console.log(data)
    let lat = data.coords.latitude
    let lon = data.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url,{method: 'GET'})
    //return promise
    .then((res) =>res.json())
    //resolve the promise
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day+" °C"
        p.innerText= cityName;
        q.innerText =temp;
    })
}

// ----------------------------------------------------------------------------------------------------------------------------