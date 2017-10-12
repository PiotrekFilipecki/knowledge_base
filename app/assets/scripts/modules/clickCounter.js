if(window.location.href.indexOf('clickCounter') > -1){
let model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Photo1',
            imgSrc: './resources/files/img/1.jpg'      
        },
        {
            clickCount: 0,
            name: 'Photo2',
            imgSrc: './resources/files/img/2.jpg'
        },
        {
            clickCount: 0,
            name: 'Photo3',
            imgSrc: './resources/files/img/3.jpg'      
        },
        {
            clickCount: 0,
            name: 'Photo4',
            imgSrc: './resources/files/img/4.jpg'       
        },
        {
            clickCount: 0,
            name: 'Photo5',
            imgSrc: './resources/files/img/5.jpg'       
        }
    ]
}

let octopus = {
    init: function() {
        model.currentCat = model.cats[0];
        
        catListView.init();
        catView.init();
    },

    getCurrentCat: function(){
         return model.currentCat;
    },

    getCats: function(){
        return model.cats;
    },

    setCurrentCat: function(cat){
        model.currentCat = cat;
    },

    incrementCounter: function(){
        model.currentCat.clickCount++;
        catView.render();
    }
};

//view 
let catView = {
    init: function(){
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function(){
        let currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.src = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

let catListView = {
    
    init: function(){
        this.catListElem = document.getElementById('cat-list');

        this.render();
    },

    render: function(){
        let cat, elem, i;

        let cats = octopus.getCats();
        this.catListElem.innerHTML = '';
        

        for (i=0; i < cats.length; i++){
            cat = cats[i];

            elem = document.createElement('li');
            elem.textContent = cat.name;
            elem.addEventListener('click', (function(catCopy){
                return function(){
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            this.catListElem.appendChild(elem);
        };
    }
};

octopus.init();

}