import './styles/App.css'
import React, {useState, useEffect} from 'react'
import {PersonList} from './components/PersonList'
import {PersonForm} from './components/PersonForm'
import { fetchData } from './util/persistence'

const blankPerson = {'id': '', 'name': '', 'age': '', 'email':'', 'gender': ''};

function App() {
  const[persons, setPersons] = useState([]);
  const[personToEdit, setPersonToEdit] = useState(blankPerson);
  const APIURL = 'http://localhost:3001/api';
  
  const editPerson = (person) => {
    setPersonToEdit(person);
  }

  const fetchPersons = (callback) => {
    fetchData(APIURL, callback, 'GET');
  };

  const deletePerson = (id) => {
    fetchData(`${APIURL}/${id}`, () => {}, 'DELETE');
    //We manually update the state to trigger a re-render, because Jons function doesn't return a promise. The question is how memory intensive this is.
    setPersons([...persons.filter((person) => person.id !== id)]);
  }

  const mutatePerson = (person) => {
    if(person.id != ''){ //Then the person exists and we should update it //PUT
      updatePerson(person);
    }else { //Then the person doesn't exist and we should create it //POST
      createPerson(person);
    }
  }

  const updatePerson = (person) => {
    console.log("update!", person);
    fetchData(`${APIURL}/${person.id}`, (person) => setPersons(persons.map((p) => p.id == person.id ? {...person} : p)), 'PUT', person);
  
  }

  const createPerson = (person) => {
    console.log("create!");
    const {id, ...personWithoutId} = person; //We destructure the id from the person object, so we can send the rest of the object to the server.
    fetchData(APIURL, (newPerson) => setPersons([...persons, newPerson]), 'POST', personWithoutId);
  }

  useEffect(() => {
    fetchPersons((data) => {setPersons(data)});
  }, []);

  return (
    <>
      <div>
        <h1>PERSON DB</h1>
        <PersonForm blankPerson={blankPerson} personToEdit={personToEdit} mutatePerson={mutatePerson} />
        <PersonList persons={persons} deletePerson={deletePerson} editPerson={editPerson}/>
      </div>
    </>
  )
}

export default App
