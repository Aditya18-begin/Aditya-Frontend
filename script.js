function makeBubble(){
    var clutter = ""

for(var i=0; i<=159; i++){
     var ran = Math.floor(Math.random()*10)
     clutter += `<div id="bubble">${ran}</div>`
    // console.log(clutter)
    document.querySelector("#rand-num").innerHTML=clutter;
}

}

var timer = 60;
function runTimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        }
        else{
            clearInterval(timer)
            document.querySelector("#rand-num").innerHTML = "`<h1>Game Over </h1>`";
        }
    },1000)
}

var hitrn = 0;

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#newHit").innerHTML = hitrn;
}


var score =0;
function IncScore(){
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}

function scoreInc(){
    document.querySelector("#rand-num")
    .addEventListener("click",function(dets){
        // alert("Chal raha hai");
        // console.log(dets.target.textContent)
        var clickednum = Number(dets.target.textContent);
        if(clickednum === hitrn ){
            IncScore();
            getNewHit();
            makeBubble();
        }
        else{
            score -= 10;
            IncScore();
            getNewHit();
            makeBubble();
        }
    })
        

}

makeBubble();
runTimer();
getNewHit();
scoreInc();
