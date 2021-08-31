const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        /*   const h3 = document.createElement('h3');
         h3.innerText = country.name;
         div.appendChild(h3);
         const p = document.createElement('p');
         p.innerText = country.capital;
         div.appendChild(p); */
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick=loadCountryName('${country.name}')>Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}
const loadCountryName = name => {
    // console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => loadCountryDetails(data[0]));
}
const loadCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h3>CountryName: ${country.name}</h3>
        <p>Population: ${country.population}</p>
        <img src="${country.flag}">
`;
}