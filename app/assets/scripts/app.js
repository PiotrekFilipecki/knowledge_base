// import 'babel-polyfill';     // uncomment this if you want to use for...of, async/await
                                // or other things that require babel runtime

import Preloader from './modules/preloader';
import './modules/isMobile';
import './modules/ga';
import './modules/drums';
//import './modules/minimum';

import './modules/offlineFriendlyForms';
import './modules/flexboxCarousel';
import './modules/clickCounter';
import './modules/calculator';

/*window.addEventListener('load', () => {
    console.log('vml skeleton');
    Preloader.hide();
});*/

/* js playground

let array = [];

array['one'] = 'First';
array['two'] = 'Second';
array['three'] = 'Third';

for (let indy in array) {
    console.log(array[indy])
}

//better construction of asociation array

let obj = {};

obj.one = "One";
obj.two = "Two";
obj.three = "Three";

for (let objy in obj) {
    console.log(obj[objy]);
}

//iterowanie funkcją forEach obiektu Array

let alertElement = function (value, index) {
    console.log('[' + index + '] = ' + value);
};

let array2 = [1, 'dwa', 3, 'cztery', 5];

array2.forEach(alertElement);*/

/* let var rabbit hole 

var funcs = [];

for(let i = 0; i < 5; i++){
    funcs.push( function(){
        console.log(i);
    });
}

funcs[3]();

var funcs = [];

for(var i = 0; i < 5; i++){
    funcs.push( function(){
        console.log(i);
    });
}

funcs[3]();

var funcs = [];

for(var i = 0; i < 5; i++){
    let j = i;
    funcs.push( function(){
        console.log(j);
    });
}

funcs[3]();

var funcs = [];

for(let i = 0; i < 5; i++){
    var j = i;
    funcs.push( function(){
        console.log(j);
    });
}

funcs[3]();*/

/* function count(x) {
    let numbers = [];
    if(x % 2 == 0){
        for(let i = 0; i < x; i += 2){
            numbers.push(i);
        }
    } else {
        for (i = 1; i < x; i += 2){
            numbers.push(i);
        }
    }
    return numbers;
    console.log(numbers);
}*/