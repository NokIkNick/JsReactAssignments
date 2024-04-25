import React from 'react';
import {persons} from './file2';

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        {persons.map((person) => (<WelcomePerson person={person} />))}
        <WelcomePerson person={persons[0]} />
        <WelcomePerson person={persons[1]} />
        <WelcomePerson person={persons[2]} />
    </div>
);
}


export function WelcomePerson(props){
    return (
        <div>
            <h2>{props.person.firstName}</h2>
            <h2>{props.person.lastName}</h2>
            <h2>{props.person.email}</h2>
        </div>
    );
}