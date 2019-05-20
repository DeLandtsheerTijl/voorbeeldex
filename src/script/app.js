(function() {
	const colorMapping = {
		'white':'#000000' ,
        'grey': '#DFDFDF',
        'yellow' : '#FCB800',
        'red' : '#C03D08',
        'blue' : '#004E91'
	};
    
    document.addEventListener('DOMContentLoaded', function(){
        audiUI.setupAudi({
            exteriorClass : '.js-exterior-nav',
            interiorClass : '.js-interior-nav',
            enginesClass: '.js-engines-nav',
            buttonClass : '.js-engines-nav',
            imgClass : '.c-specific',
            tabcontentClass: '.c-tabs',
            colorClass : '.c-colors',
            bodyClass: '.c-content'
        });
    
        audiUI.handleNavigation();

        audiUI.handleColor(colorMapping);
        
        console.info(dataFetch.fetchEngines());
        
    })

   
})();
