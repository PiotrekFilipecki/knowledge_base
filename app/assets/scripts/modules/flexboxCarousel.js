import $ from 'jquery';

//przechowaj w zmiennych karuzelę i jej elementy
let carousel = $('.carousel'),
    carouselItems = $('.carousel-item');

//*** PRZYCISK NASTĘPNY

$(document).ready(()=>{
 $('#button-next').click(()=>{
  
  let item, newStart;

  carousel.removeClass('is-back');

  //znajdź pierwszy element i usuń z niego klasę 'is-first'
  item= $('.is-first').removeClass('is-first');

  //znajdź element po pierwszym elemencie i spraw, że będzie pierwszy
  newStart = nextItem(item);
  newStart.addClass('is-first').css('order',1);

  //przejdź przez pozostałe elementy i zmień ich właściwości order
  for (let j=2;j<=carouselItems.length;++j){
   newStart = nextItem(newStart).css('order',j); 
  }

  //spraw, że ruch będzie płynny
  carousel.removeClass('is-steady');
  setTimeout(()=>{
   carousel.addClass('is-steady')
   },50);
 });

//*** PRZYCISK POPRZEDNI

$('#button-previous').click(()=>{
 
 let item, newStart;

 //znajdź pierwszy element i usuń z niego klasę 'is-first'
 item= $('.is-first').removeClass('is-first');

 //znajdź element przed pierwszym elementem i spraw, że będzie pierwszy
 newStart = prevItem(carouselItems,item);
 newStart.addClass('is-first').css('order',1);

 //przejdź przez pozostałe elementy i zmień ich właściwości order
 for (let j=2;j<=carouselItems.length;++j){
  newStart = nextItem(carouselItems,newStart).css('order',j);
 }

 //spraw, że ruch będzie płynny
 carousel.removeClass('is-steady');
  setTimeout(()=>{
   carousel.addClass('is-steady')
  },50);

});

//*** DODATKOWE FUNKCJE

//znajdź następny element
function nextItem(el){
 if (el.next().length>0){
  return el.next();
 } else {
  return carouselItems.first();
}}

//znajdź poprzedni element
function prevItem(el){
 if (el.prev().length>0){
  return el.prev();
 } else {
  return carouselItems.last();
}}
});