// Getting the status area and writing something to it.
var statusArea = document.getElementById('status')
statusArea.innerHTML = "Plz start typing";

// Getting the input field

// Getting the result area
var resultarea = document.getElementById('resultarea')

// For the test buttton
// var testbtn = document.getElementById('testbtn')

// Main function of the project to handle the core data
function mainFun() {
    statusArea.innerHTML = "You are typing"
}

function ktdown() {
    statusArea.innerHTML = "You are typing"
}

function ktup() {
    // sleep(3000)
    statusArea.innerHTML = "Start typing"
    var ktname = document.getElementById('name').value;

    // entData = ktname.value
    // resultarea.innerHTML = 'Typing has been started'
    resultarea.innerHTML = ktname
}




// resultarea.innerHTML = ktname