// import 'babel-polyfill';     // uncomment this if you want to use for...of, async/await
                                // or other things that require babel runtime

import Preloader from './modules/preloader';
import './modules/isMobile';
import './modules/ga';

window.addEventListener('load', () => {
    console.log('vml skeleton');
    Preloader.hide();
});
