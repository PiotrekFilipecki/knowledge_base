/*class which saves from form's 
inputs and handle function which handles submit event on submit */

class OfflineForm {
    constructor(form) {
        this.id = form.id;
        this.action = form.action;
        this.data = {};

        form.addEventListener('submit', e => this.handleSubmit(e));
    }

  handleSubmit(e){

    e.preventDefault();

    //parsuje inputy z formularza do obiektu

    this.getFormData();

    if(!navigator.onLine) {
        
        //uzytkownik jest offline, dane sa przechowywane na urzadzeniu
        this.storeData();
    } else {
        this.sendData();
    }
  }

  
}



