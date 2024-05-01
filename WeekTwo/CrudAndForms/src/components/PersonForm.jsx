import React, {useEffect, useState} from 'react'

export const PersonForm = ({blankPerson, personToEdit, mutatePerson}) => {
    const[person, setPerson] = useState({...personToEdit});


    useEffect(() => {
        setPerson(personToEdit);
    }, [personToEdit])

    //Controller component:
    const handleOnChange = (e) => {
        const {id, value} = e.target;
        setPerson({...person, [id]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        mutatePerson(person);
    }

    const handleReset = (e) => {
        e.preventDefault();
        console.log("reset");
        setPerson(blankPerson);
    }
  
    return (
    <div>
        <h1>Add/Edit Person:</h1>
        {JSON.stringify(person)}
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Id</label>
            <input id="id" type="text" readOnly placeholder="id" value={person.id} onChange={handleOnChange}/>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="name" value={person.name} onChange={handleOnChange}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" min="1" max="120" placeholder="age" value={person.age} onChange={handleOnChange}/>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="email" value={person.email} onChange={handleOnChange}/>
            <label htmlFor="gender">Gender</label>
            <select id="gender" value={person.gender} onChange={handleOnChange}>
            <option defaultChecked>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
    </select>
    <button>Update</button>
    <button type="button" onClick={handleReset}>Reset</button>
</form>
    </div>
  )
}
