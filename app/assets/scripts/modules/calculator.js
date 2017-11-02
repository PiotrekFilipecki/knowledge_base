(function(){
    "use strict";
   //zbiera elementy
    var el = function(element) {
        if (element.charAt(0) === "#") { // jesli przekazane jest id ...
            return document.querySelector(element); // ...zwraca pojedynczy element
        }

        return document.querySelectorAll(element); // w przeciwnym wypadku zwraca nodelist
    };

    // zmienne

    var viewer = el("#viwer"), // 'ekran' kalkulatora - wyswietla wynik
        equals = el("#equals"), // znak rownosci
        nums = el(".num"), // numery
        ops = el(".ops"), // operatory
        theNum = "", // aktualnie wskazany numer
        oldNum = "", // pierwszy numer
        resultNum, //wynik
        operator; // operator
    
    //gdy numer jest kliknięty, wybiera właśnie ten numer
    var setNum = function() { // jesli wynik zostal wyswietlony - number resetowany
        if (resultNum) {
            theNum = this.getAttribute("data-num");
            resultNum = "";
        } else { //w przeciwnym wypadku doda cyfre do poprzedniego numeru - to jest string!
            theNum += this.getAttribute("data-num");
        }

        viewer.innerHTML = theNum; //wyswietla aktualna cyfre
    };
    // gdy operator jest kliknięty przekazuje number do oldNum i zapisuje operator
     var moveNum = function() {
        oldNum = theNum;
        theNum = "";
        operator = this.getAttribute("data-ops");

        equals.setAttribute("data-result", ""); //resetuje wynik w atrybucie
     };

     //oblicza wynik
     var displayNum = function() {
         oldNum = parseFloat(oldNum);
         theNum = parseFloat(theNum);

         //wykonanie operacji
         switch (operator) {
            case "plus":
                resultNum = oldNum + theNum;
                break;
            case "minus":
                resultNum = oldNum - theNum;
                break;
            case "times":
                resultNum = oldNum * theNum;
                break;
            case "divided by":
                resultNum = oldNum / theNum;
                break;
            
            default:
                resultNum = theNum;
         }


     if (!isFinite(resultNum)) {
         if (isNaN(resultNum)) {
             resultNum = "broken";
         } else {
             resultNum = "what you have done";
             el('#calculator').classList.add('broken');
             el('#reset').classList.add('show');
         }
     }

     viewer.innerHTML = resultNum;
     equals.setAttribute("data-result", resultNum);

     oldNum = 0;
     theNum = resultNum;
};


}());

