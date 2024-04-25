import React, { useState, useEffect } from 'react';

function JokeComponent() {
    // State to store the joke
    const [joke, setJoke] = useState('');
    const [dadJoke, setDadJoke] = useState('');

    function fetchJoke(){
        fetch('https://api.chucknorris.io/jokes/random')
                .then(response => response.json())
                .then(data => setJoke(data.value))
                .catch(error => console.error('Error fetching joke:', error));
    }

    function fetchDadJoke(){
        fetch('https://icanhazdadjoke.com/', {headers: {
            'Accept': 'application/json'
        }}).then(response => response.json())
        .then(data => setDadJoke(data.joke))
        .catch(error => console.error('Error fetching dad joke:', error));
    }

    // useEffect to fetch the joke
    useEffect(() => {
        let timer = setInterval(() => {
            fetchJoke();
            fetchDadJoke();
        }, 10000);
        return () => clearInterval(timer);
    }, []); // Empty dependency array means this runs once on mount

    // Render the joke
    return (
        <div>
            <p>{joke}</p>
            <p>{dadJoke}</p>
        </div>
    );
}




export default JokeComponent;
