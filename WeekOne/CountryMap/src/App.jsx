import { useState, useRef, useEffect } from 'react'
import './App.css'
import CountryMap from './countryMap'


function App() {
  const [countryCode, setCountryCode] = useState('');
  const [countryData, setCountryData] = useState('');
  const [currentCountryInfo, setCurrentCountryInfo] = useState(''); //State to store the current country info. [country, population, area, borders
  const mapRef = useRef(null); //How to reference DOM elements in React
  const previousCountryRef = useRef(null); //How to reference DOM elements in React

  


useEffect(() => {
  const map = mapRef.current; //Reference to the SVG map.

  //Function to fetch country data when a country is clicked.
  const fetchCountry = (event) => {
    let code = event.target.id.toUpperCase(); //Get the country code from the clicked element.
    if(code === "svg2" || code === "SVG2"){ //If the clicked element is the map itself, return.
      return;
    }
    if(code === "GB-GBN"){ //If the country code is GB-GBN, change it to GB.
      code = "GB";  
    }
    if(code === "RU-MAIN"){ //If the country code is RU-MAIN, change it to RU.
      code = "RU";
    }
    //fetchCountryData(code); 
    setCountryCode(code);


  }

  if(map){ //If the map is available, add an event listener to it.
    map.addEventListener('click', fetchCountry);
  }

  return () => {
    if(map){ //If the map is available, remove the event listener from it. We do this to prevent memory leaks.
      map.removeEventListener('click', fetchCountry)
    }
  }

}, [])



useEffect(() => {
  try{
    fetchCountryData(countryCode); //Fetch country data when the country code changes.
  }catch(err){
    console.log();
  }
   
}, [countryCode])

useEffect(() => {
  try{
    const country = document.getElementById(countryData.cca2.toLowerCase());
    if(previousCountryRef.current){
      previousCountryRef.current.style.fill = "silver";
    }
    previousCountryRef.current = country;
    if(country){
      country.style.fill = "red";
      console.log(`Country: ${countryData.name.common}\nPopulation: ${countryData.population}\nArea: ${countryData.area}\nBorders: ${countryData.borders}`);
      let currentCountryInfoString = `Country: ${countryData.name.common}\nPopulation: ${countryData.population}\nArea: ${countryData.area}\nBorders: ${countryData.borders}`;
      setCurrentCountryInfo(currentCountryInfoString);
    }
  }catch(err){
    console.log();
  }
  
}, [countryData])

//Function to fetch country data from the restcountries API.
function fetchCountryData(id){
  fetch(`https://restcountries.com/v3.1/alpha/${id}`)
  .then(response => response.json())
  .then(data => {
    if(data[0].cca2 === id){ //If the country code from the API matches the clicked country code, set the country data.
      
      /* const country = document.getElementById(data[0].cca2.toLowerCase());
      if(previousCountryRef.current){ //If there is a previously clicked country, change its color back to silver. //ALTERNATIVE WAY OF DOING IT. FORGOT DEPENDENCY ARRAY WAS A THING
        previousCountryRef.current.style.fill = "silver";
      }
      previousCountryRef.current = country; //Set the current country as the previously clicked country. */
      
      console.log(data[0])
      setCountryData(data[0]);
      
      
    /* if(country){
      country.style.fill = "red";
    } */
    }
  })
  .catch(err => console.log(err))
}



  return (
    <>
    <div ref={mapRef}>
      <CountryMap/>
      <p style={{whiteSpace: 'pre-line'}}>{currentCountryInfo}</p>
    </div>
    </>
  )
}

export default App



