// THE 9 POSSIBLE POSITIONS
s1 = document.getElementById('s1')
s2 = document.getElementById('s2')
s3 = document.getElementById('s3')
s4 = document.getElementById('s4')
s5 = document.getElementById('s5')
s6 = document.getElementById('s6')
s7 = document.getElementById('s7')
s8 = document.getElementById('s8')
s9 = document.getElementById('s9')

// DEFINE WHETHER THE POSITION WILL BE OCCUPIED BY "X" OR "O"
v1 = document.getElementById("v1")
v2 = document.getElementById("v2")
v3 = document.getElementById("v3")
v4 = document.getElementById("v4")
v5 = document.getElementById("v5")
v6 = document.getElementById("v6")
v7 = document.getElementById("v7")
v8 = document.getElementById("v8")
v9 = document.getElementById("v9")

playersTurn = 0

// CHANGE PLAYER TIME
function changePlayer(val) {
    if(playersTurn == 0 && val.innerHTML == "X"){
        playersTurn = 1
    }else if(playersTurn == 1 && val.innerHTML == "O"){
        playersTurn = 0
    }
   
}

// ADD A MOVE
function addMove(val) {
    if(playersTurn == 0 && val.innerHTML == ""){
        val.innerHTML = "X"
    }else if(playersTurn == 1 && val.innerHTML == ""){
        val.innerHTML = "O"
    }else{
        
    }
}

// CHECK IF HAS A WINNER
function checkWinner() {

    if (playersTurn == 0) {

        if ((v1.innerHTML == v2.innerHTML && v2.innerHTML == v3.innerHTML) && v3.innerHTML != "") {
            insertWinner("X")
            gameOver()
            audio = document.getElementById("winAudio")
            audio.volume = 0.7
            audio.play()
        } else if ((v4.innerHTML == v5.innerHTML && v5.innerHTML == v6.innerHTML) && v4.innerHTML != "") {
            insertWinner("X")
            gameOver()
            audio = document.getElementById("winAudio")
            audio.volume = 0.7
            audio.play()
        } else if ((v7.innerHTML == v8.innerHTML && v8.innerHTML == v9.innerHTML) && v7.innerHTML != "") {
            insertWinner("X")
            gameOver()
            audio = document.getElementById("winAudio")
            audio.volume = 0.7
            audio.play()
        }

        else if ((v1.innerHTML == v4.innerHTML && v4.innerHTML == v7.innerHTML) && v1.innerHTML != "") {
            insertWinner("X")
            gameOver()
        } else if ((v2.innerHTML == v5.innerHTML && v5.innerHTML == v8.innerHTML) && v2.innerHTML != "") {
            insertWinner("X")
            gameOver()
        } else if ((v3.innerHTML == v6.innerHTML && v6.innerHTML == v9.innerHTML) && v3.innerHTML != "") {
            insertWinner("X")
            gameOver()
        }

        else if ((v1.innerHTML == v5.innerHTML && v5.innerHTML == v9.innerHTML) && v1.innerHTML != "") {
            insertWinner("X")
            gameOver()
        } else if ((v3.innerHTML == v5.innerHTML && v5.innerHTML == v7.innerHTML) && v3.innerHTML != "") {
            insertWinner("X")
            gameOver()
        }

        else if (v1.innerHTML != "" &&
        v2.innerHTML != "" &&
        v3.innerHTML != "" &&
        v4.innerHTML != "" &&
        v5.innerHTML != "" &&
        v6.innerHTML != "" &&
        v7.innerHTML != "" &&
        v8.innerHTML != "" &&
        v9.innerHTML != ""){
            insertWinner("DRAW!")
            draw()
            gameOver()
            audio = document.getElementById("drawAudio")
            audio.volume = 0.7
            audio.play()
        }
    }

    if (playersTurn == 1) {

        if ((v1.innerHTML == v2.innerHTML && v2.innerHTML == v3.innerHTML) && v1.innerHTML != "") {
            insertWinner("O")
            gameOver()
        } else if ((v4.innerHTML == v5.innerHTML && v5.innerHTML == v6.innerHTML) && v4.innerHTML != "") {
            insertWinner("O")
            gameOver()
        } else if ((v7.innerHTML == v8.innerHTML && v8.innerHTML == v9.innerHTML) && v7.innerHTML != "") {
            insertWinner("O")
            gameOver()
        }

        else if ((v1.innerHTML == v4.innerHTML && v4.innerHTML == v7.innerHTML) && v1.innerHTML != "") {
            insertWinner("O")
            gameOver()
        } else if ((v2.innerHTML == v5.innerHTML && v5.innerHTML == v8.innerHTML) && v2.innerHTML != "") {
            insertWinner("O")
            gameOver()
        } else if ((v3.innerHTML == v6.innerHTML && v6.innerHTML == v9.innerHTML) && v3.innerHTML != "") {
            insertWinner("O")
            gameOver()
        }

        else if ((v1.innerHTML == v5.innerHTML && v5.innerHTML == v9.innerHTML) && v1.innerHTML != "") {
            insertWinner("O")
            gameOver()
        } else if ((v3.innerHTML == v5.innerHTML && v5.innerHTML == v7.innerHTML) && v3.innerHTML != "") {
            insertWinner("O")
            gameOver()
        }

        else if (v1.innerHTML != "" &&
        v2.innerHTML != "" &&
        v3.innerHTML != "" &&
        v4.innerHTML != "" &&
        v5.innerHTML != "" &&
        v6.innerHTML != "" &&
        v7.innerHTML != "" &&
        v8.innerHTML != "" &&
        v9.innerHTML != ""){
            insertWinner("DRAW!")
            draw()
            gameOver()
            audio = document.getElementById("drawAudio")
            audio.volume = 0.7
            audio.play()
        }
    }
}

// ADD EVENTS IN SQUARES
s1.addEventListener("click", () => {
    addMove(v1)
    soundClick()
    checkWinner()
    changePlayer(v1)
})
s2.addEventListener("click", () => {
    addMove(v2)
    soundClick()
    checkWinner()
    changePlayer(v2)

})
s3.addEventListener("click", () => {
    addMove(v3)
    soundClick()
    checkWinner()
    changePlayer(v3)
})
s4.addEventListener("click", () => {
    addMove(v4)
    soundClick()
    checkWinner()
    changePlayer(v4)
})
s5.addEventListener("click", () => {
    addMove(v5)
    soundClick()
    checkWinner()
    changePlayer(v5)
})
s6.addEventListener("click", () => {
    addMove(v6)
    soundClick()
    checkWinner()
    changePlayer(v6)
})
s7.addEventListener("click", () => {
    addMove(v7)
    soundClick()
    checkWinner()
    changePlayer(v7)
})
s8.addEventListener("click", () => {
    addMove(v8)
    soundClick()
    checkWinner()
    changePlayer(v8)
})
s9.addEventListener("click", () => {
    addMove(v9)
    soundClick()
    checkWinner()
    changePlayer(v9)

})

// INSERT THE WINNER
function insertWinner(winner){
    document.getElementById("winner").textContent = winner
}

// WHEN NO ONE WINS
function draw(){
    document.getElementById("tplayer").textContent = ""
    document.getElementById("twin").textContent = ""
}

// CHANGE DISPLAY GAME OVER TO FLEX
function displayGameOver(){
    document.getElementById("gameover").style.display = "flex"
}

// ACTIVE THE GAME OVER SCREEN
function gameOver() {
    setTimeout(displayGameOver(), 100)
}

// RESTART GAME
function restart(){
    location.reload()
}

document.querySelector("button").addEventListener("click", restart)

function soundClick(){
    audio = document.getElementById("click")
    audio.volume = 0.7
    audio.play()
}

