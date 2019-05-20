const dataFetch = (function(){
    // const colorKey = 'audi-config'
    
    const fetchEngines = () => {
        //backticks
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        // .then(data => showCountries(data))
        .catch(err => console.error(`An error occured, ${err}`));
    };

    // const update

    return{
        fetchEngines : fetchEngines
    }
})();