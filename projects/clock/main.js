// for the js of the clock

function clock() {
    let hour = document.getElementById('kthour')
    let minutes = document.getElementById('ktminutes')
    let seconds = document.getElementById('ktseconds')

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

setInterval(clock, 1000)