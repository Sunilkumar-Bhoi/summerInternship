setInterval(()=>{
    let dt = new Date()
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

     document.querySelector(".hour h1").innerHTML = hr;
     document.querySelector(".min h1").innerHTML = min;
     document.querySelector(".sec h1").innerHTML = sec;

    

},1000)