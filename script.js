var timer = 60;
var score = 0;
var hitrn = 0;
var clickCcount = 0;
function makebubble() {
    var clutter = "";
    for (let i = 1; i < 106; i++) {
        var ran = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble">${ran}</div>`;
    }

    document.querySelector("#panel-btm").innerHTML = clutter;

}

function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;

}
function runtime() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#panel-btm").innerHTML = `<h1 style="color: blueviolet; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;" >GAME OVER  <br> Your Score : ${score}</h1> <div id="start >  <button>REPLAY</button>
                    </div>
                      `;
        }
    }, 1000)


}
function increasescore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#panel-btm").addEventListener("click", function (dets) {
    console.log(Number(dets.target.textContent))
    var clicked = Number(dets.target.textContent);
    if (clicked == hitrn) {
        increasescore()
        makebubble()
        getnewhit()


    }
})

// document.querySelector("#panel-btm").addEventListener("click",function(){
//     runtime();
// })
document.querySelector("#start").addEventListener("click", function () {
    if (clickCcount == 0) {
        runtime();
        clickCcount++;
    }
    //    else{
    //     document.querySelector("#panel-btm").innerHTML = `<h1 style="color: blueviolet; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;" >GAME OVER  <br> Your Score : ${score}</h1>  `;
    //    }


})

document.querySelector("#reset").addEventListener("click",function(){
    document.location.reload()
})



makebubble();
getnewhit();

