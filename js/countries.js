
const fetchcountries = () =>{
 
    fetch("https://restcountries.com/v3.1/all")
    .then(result => result.json())
    .then(data => displaycountries(data))

}

fetchcountries();

const displaycountries = countries =>{
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(" ")
}

const getCountry = (country) =>{
    return `
    <div class ="country-div">
    <img src="${country.flags.png}">
    <h4> Country :${country.name.common}</h4>
    <h4> Capital : ${country.capital}</h4>
    <h4> Population :${country.population}</h4>


    </div>
    `
}