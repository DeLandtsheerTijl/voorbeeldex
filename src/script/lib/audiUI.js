const audiUI = (function(){
    navigation = null,
    button = null,
    img = null;

    const setupAudi = function({
        exteriorClass,
        interiorClass,
        enginesClass,
        buttonClass,
        imgClass,
        tabcontentClass,
        colorClass,
        bodyClass
    }){
        button = document.querySelector(buttonClass),
        img = document.querySelector(imgClass);
        exterior = document.querySelector(exteriorClass);
        interior = document.querySelector(interiorClass);
        engines = document.querySelector(enginesClass);
        tabcontent = document.querySelector(tabcontentClass);
        colors = document.querySelector(colorClass);
        body = document.querySelector(bodyClass);
    }

    const handleNavigation = function(/*callback*/){
        exterior.addEventListener('click', function(e){
            e.preventDefault();//tegengaan van submit action
            //callback(exterior);
            console.info("eventlistener active");
            tabcontent.classList = 'c-tabs';
            tabcontent.classList.add('c-tab-1-of-3');
            exterior.classList = "";
            interior.classList.remove('js-selected');
            engines.classList.remove('js-selected');
            exterior.classList.add('c-nav--item', 'js-exterior.nav', 'js-selected')
        })
        interior.addEventListener('click', function(e){
            e.preventDefault();//tegengaan van submit action
            //callback(interior);
            console.info("eventlistener active");
            tabcontent.classList = 'c-tabs';
            tabcontent.classList.add('c-tab-2-of-3');
            exterior.classList.remove('js-selected');
            interior.classList = "";
            engines.classList.remove('js-selected');
            interior.classList.add('c-nav--item', 'js-exterior.nav', 'js-selected')
        })
        engines.addEventListener('click', function(e){
            e.preventDefault();//tegengaan van submit action
            //callback(interior);
            console.info("eventlistener active");
            tabcontent.classList = 'c-tabs';
            tabcontent.classList.add('c-tab-3-of-3');
            exterior.classList.remove('js-selected');
            interior.classList.remove('js-selected');
            engines.classList = "";
            engines.classList.add('c-nav--item', 'js-exterior.nav', 'js-selected')
        })
    }
    const handleColor = function(colorMapping){
        colors.addEventListener('click', function(e){
            if(e.target.id){
                body.classList = `c-content c-accent-${e.target.id}`;
                img.src = `img/q2-${e.target.id}.png`
                console.info(`kleur is nu ${colorMapping[e.target.id]}`);
            } 
        });
    };

    return{
        setupAudi : setupAudi,
        handleNavigation : handleNavigation,
        handleColor : handleColor
    }
})();