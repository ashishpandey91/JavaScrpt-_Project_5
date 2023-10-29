// creating function for random color
function randomColor() {
    const hex = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];      
    };
    return color
};

const start =  document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");
let intervalId;

function colorChaFn() {
    if (intervalId == null) {
        intervalId = setInterval( ()=>{
            body.style.backgroundColor = randomColor();
            }, 1000 );
    }
   
};

start.addEventListener( "click", ()=>{
    colorChaFn();
});

stop.addEventListener( "click", ()=>{
    clearInterval(intervalId);
    intervalId = null;
   
});
