setInterval(()=>{
    let dt = new Date()
    let time = dt.toLocaleTimeString()

    let clock = document.querySelector("#time")
    clock.textContent = time
},1000)