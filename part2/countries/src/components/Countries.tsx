import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
export type Country = {
  name: string;
  capital: string;
  population: number;
  languages: { name: string }[];
  flag: string;
};

type Weather = {
  temperature: number;
  wind_speed: number;
  wind_dir: string;
  weather_icons: string[];
};

const Country = ({ name, capital, population, languages, flag }: Country) => {
  const [weather, setWeather] = useState<Weather>();
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`
      )
      .then((response) => {
        setWeather(response.data.current);
        console.log(response.data);
      });
  }, []);
  return (
    <>
      <h2>{name}</h2>
      <p>
        {' '}
        Capital City of {name} is {capital}
      </p>
      Current population: {population}
      <h3>Spoken languages</h3>
      <ul>
        {languages.map((lang) => (
          <li key={lang.name}> {lang.name} </li>
        ))}
      </ul>
      <img
        style={{ marginTop: '1.5em', width: '6em' }}
        alt={`flag of ${name}`}
        src={flag}
      />
      <p></p>
      <p>
        Weather temperature:
        {weather?.temperature}
        <br />
        Current wind direction: {weather?.wind_dir}
        <br />
        Weather speed: {weather?.wind_speed}
      </p>
      <img
        alt="Hello"
        src={weather?.weather_icons[0]}
        style={{ marginRight: '5rem' }}
      />
    </>
  );
};

export const Countries = ({
  countries,
  filter,
}: {
  countries: Country[];
  filter: string;
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const matches = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (selectedCountry) {
    return <Country {...selectedCountry} />;
  } else if (matches.length === 1) {
    return <Country {...matches[0]} />;
  } else if (matches.length <= 10) {
    return (
      <>
        {matches.map((country) => (
          <p key={country.name}>
            {country.name}
            <button onClick={() => setSelectedCountry(country)}>
              show
            </button>{' '}
          </p>
        ))}
      </>
    );
  } else if (matches.length > 10 && filter.length > 0) {
    return <p>Too many matches, specify another filter</p>;
  }
  return null;
};
