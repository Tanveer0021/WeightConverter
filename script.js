const toKgs = document.getElementById("toKgs");
const toLbs = document.getElementById("toLbs");
const result = document.getElementById("result");
const input = document.getElementById("input");

let weight;

input = Number(input);
function convert(){
    if(toKgs.checked){
        weight = Number(input.value);
        weight = weight / 2.2;
        result.innerHTML = weight.toFixed(1) + "kgs";
    }
    else if(toLbs.checked){
        weight = Number(input.value);
        weight = weight * 2.2;
        result.innerHTML = weight.toFixed(1) + "lbs";
    }
    else{
        result.innerHTML = `Select a unit`;
    }
}