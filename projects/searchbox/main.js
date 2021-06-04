var target = document.getElementById('target')
var target2 = document.getElementById('ktTarget')
// var msgArea = document.getElementById('msg')
var ktKing;
function ktHover() {
    // msgArea.innerHTML = "Hover on search btn"
    target.classList.remove('toggle')
    clearInterval(ktKing)
}
function ktTime() {
    target.classList.add('toggle');
}

function ktFun() {
     console.log('Woring');

    // var ktFun = () => {
        // clearInterval(ktKing)
    // }
    ktKing  = setInterval(() => {
        
        target.classList.add('toggle');
    }, 4000);
}
function ktOut() {


    var ktKing = setTimeout(ktTime, 8000);
}

// var ktFun = ()=> {
    //  console.log('Woring');

// }

target2.addEventListener('mouseout', ktFun)