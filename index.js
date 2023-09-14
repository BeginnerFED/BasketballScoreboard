let home = 0
let guest = 0

document.getElementById("home-score").textContent = home
document.getElementById("guest-score").textContent = guest



let scoreBoard = document.getElementById("home-score")
let guestBoard = document.getElementById("guest-score")


// Home

function addOne(){
    home += 1
    scoreBoard.textContent = home
}

function addTwo(){
    home += 2
    scoreBoard.textContent = home
}

function addThree(){
    home += 3
    scoreBoard.textContent = home
}

function reset(){
    home = 0
    scoreBoard.textContent = home
}



// Guest

function guestAddOne(){
    guest += 1
    guestBoard.textContent = guest
}

function guestAddTwo(){
    guest += 2
    guestBoard.textContent = guest
}

function guestAddThree(){
    guest +=3
    guestBoard.textContent = guest
}

function guestReset(){
    guest = 0
    guestBoard.textContent = guest
}