import {useState} from "react";

function MemberTable({ members }) {
  return (
    <>
    <table>
    <thead>
        <tr>
            
            {Object.keys(members[0]).map((key) => {
                return (
                    <th key={crypto.randomUUID()}>{key}</th>
                );
            })}
            
        </tr>
    </thead>
    <tbody>
    {members.map((member) => {
        return(
            <tr key={crypto.randomUUID()}>
                <td>{member.name}</td>
                <td>{member.age}</td>
            </tr>
        );
    })}
    </tbody>
    </table>
    </>

);
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members}/>
    </div>
  );
}

export default function ListDemo() {

  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];

  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}