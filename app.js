const colors = ["green", "red", "blue"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number between 0-2
    const rngNum = getRng();

    document.body.style.backgroundColor = colors[rngNum];
    color.textContent = colors[rngNum];
});

function getRng(){
    return Math.floor(Math.random()*colors.length);
}
