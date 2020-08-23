import './App.css';
import React, { Component } from 'react';
import ToDo from './ToDo';
import Countries from './Countries'
import countriesDb from './countriesDb'
//import { countriesDb } from './countriesDb' //  export ohne default
import CarList from './CarList';

//imrc  import React Component
//cc class Component
let todoList = ["work", "eat", "sleep", "repeat"]
let data = [
  {
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    capital: "Berlin",
    population: "83 million",
    language: "German"},
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg/250px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg.png",
      capital: "Paris",
      population: "67 million",
    language: "French"
  },
  {
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
        capital: "Brasilia",
        population: "210 million",
        language: "Portuguese"}
]

class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        {/* Class component */}
        {/* <ToDo todo={todoList[0]} /> */}
        <CarList />
        <article id="Countries-group">
        <div>
          <Countries
            url={data[0].url}
            capital={`Capital: ${data[0].capital}`}
            population={`Population: ${data[0].population}`}
            language={`Language: ${data[0].language}`}
          />
        </div>
        <div>
          <Countries
            url={data[1].url}
            capital={`Capital: ${data[1].capital}`}
            population={`Population: ${data[1].population}`}
            language={`Language: ${data[1].language}`}/>
        </div>
        <div>
        <Countries
            url={data[2].url}
            capital={`Capital: ${data[2].capital}`}
            population={`Population: ${data[2].population}`}
            language={`Language: ${data[2].language}`}/>
        </div>
        {countriesDb.map((country, i) =>
          <Countries
            key = {i}
            url={country.url}
            capital={country.capital}
            population={country.population}
            language={country.language}
          />
          )}
      </article>
      </div>
    );
  }
}

export default App;
