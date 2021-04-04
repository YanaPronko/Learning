
const   btn = document.querySelector (".btn");
let timerID,
    i = 0;


/* btn.addEventListener ("click", () => {
        timerID = setInterval(logger, 500);
});

clearInterval(timerID);

function logger () {
    if (i == 3) {
        clearInterval(timerID);
    }
    console.log ("text");
    i++;
}

let id = setTimeout(function log () {
    console.log ("Hello");
    id = setTimeout (log, 500);
}, 500); */

function myAnimation () {
    const elem = document.querySelector (".box");
    let pos = 0;

    const id = setInterval (frame, 10);

    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
            elem.style.top = pos + "px";
            
        }
    }
}
btn.addEventListener ("click", myAnimation);
