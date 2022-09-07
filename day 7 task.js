// XMLDocument

const rc = new XMLHttpRequest();
rc.open("GET","https://restcountries.com/v3.1/all");
rc.send();
rc.responsetype="json";
var countries =[]
rc.onload = function result(){
    var allcountries= JSON.parse(rc.response);
// all the response
    console.log(allcountries); 
// countries in Asia
    countries = allcountries
    .filter((p)=>p.region=="Asia")
    .map((l)=>l.name.common);
    console.log(countries);
// less than 200000 populated countries among all
    var populationcountries= allcountries
    .filter((h)=>h.population < 200000)
    .map((g)=>g.name.common);
    console.log(`less than 2,00,000 populated countries are - ${populationcountries}`)
    console.log(`number of countries populated less than 2,00,000 are - ${populationcountries.length} countries`)
// population of all the countries
    var totalpopulation= allcountries
    .map((k)=>k.population)
    .reduce((acc,curr)=> (acc+curr));
    console.log("Total population of all the countries : " ,totalpopulation);

// displaying name capital and flag by using for each
    allcountries.forEach(function (z){
        console.log(z.name.common);
        console.log(z.capital);
        console.log(z.flag);
    })
}
