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

/*window.addEventListener('load', () => {
    console.log('vml skeleton');
    Preloader.hide();
});*/

// js playground

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

array2.forEach(alertElement);