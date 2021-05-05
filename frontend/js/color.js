function changeColor() {
    let Red= document.getElementById('rangeRed').value;
    let Green= document.getElementById('rangeGreen').value;
    let Blue= document.getElementById('rangeBlue').value;
    let color = "rgb("+ Red + "," + Green + "," + Blue + ")";
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').innerHTML = ':' + color;
    var pElement =document.getElementById("btnresult");
    pElement.innerHTML = "You Clicked Me!!"
    pElement.style.backgroundColor =color;
}
document.getElementById('rangeRed').addEventListener('input',changeColor);
document.getElementById('rangeGreen').addEventListener('input',changeColor);
document.getElementById('rangeBlue').addEventListener('input',changeColor);