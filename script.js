var image = document.createElement('img')
image.src = 'mole.png'
let time
let cs
let process 
let id

function begin(){
    id = Math.ceil(Math.random() * 9).toString()
    var gridContainer = document.getElementById(id)
    gridContainer.appendChild(image)
    time--
    document.getElementById('time-left').innerText = time
    if(time == 0){
        clearInterval(process)
        id = null
        document.getElementById('green').disabled = false
        alert('Game Over')
    }
}

function start(){
    process = setInterval(begin,1000);
    document.getElementById('green').disabled = true
    time = 60
    cs = 0
    document.getElementById('current-score').innerText = cs
}

function clicked(cid){
    if(cid == id){
        cs++
        document.getElementById('current-score').innerText = cs
    }
}