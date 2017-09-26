function minimum(x, y){
    let min = Math.min(x,y);
    return min;
    console.log(minimum());
}



var minInput = document.getElementById('minInput');
var maxInput = document.getElementById('maxInput');


console.log(minInput.value);

function checkMinimum(){

}

var submit = document.getElementById('submit');

submit.addEventListener('click', minimum(2,76));
