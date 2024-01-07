import React,{useState} from "react";
import "./Form.css";

const Form = (props) => {
    const [age,setAge] = useState("")
    const [name,setName]= useState("")

    const ageHandler = (e)=>{
        const age = e.target.value;
        setAge(age);

    }

    const nameHandler =(e) =>{
        const personName = e.target.value
        setName(personName)

    }


    const submitHandler =(e) =>{
        e.preventDefault();
        const personData = {
            "ageEntered" : age,
            "nameEntered" : name
        }
        
        props.newDataHandler(personData);


    }

  return (
    <div >
      <form className="form" onSubmit={
      submitHandler
      }>
        <label htmlFor="username">Username</label>
        <input type="text" value={name} onChange={nameHandler}></input>
        <label htmlFor="age">Age(Years)</label>
        <input type="number" value={age}onChange={ageHandler}></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Form;
