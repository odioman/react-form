import React from 'react';

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                    placeholder="First Name" 
                    type="text"
                    value={props.data.firstName}
                    name="firstName"
                    onChange={props.handleChange}
                />    
                <br />
                <input 
                    placeholder="Last Name" 
                    type="text"
                    value={props.data.lastName}
                    name="lastName"
                    onChange={props.handleChange}
                />
                <br />
                <input 
                    placeholder="Age" 
                    type="number"
                    value={props.data.age}
                    name="age"
                    onChange={props.handleChange}
                />    
                <br />
                
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={props.data.gender === "Male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={props.data.gender === "Female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={props.data.gender === "Other"}
                        onChange={props.handleChange}
                    />Other
                </label>
                <br />
                
                <label>Destination: </label>
                    <select
                        value={props.data.destination}
                        name="destination"
                        onChange={props.handleChange}
                    >
                    <option value="New York">New York, NY</option>
                    <option value="Newark">Newark, NJ</option>
                    <option value="Washington, D.C.">Washington, D.C.</option> 
                </select>   
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleChange}
                    />Kosher
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                    />Vegan
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isVegetarian"
                        checked={props.data.isVegetarian}
                        onChange={props.handleChange}
                    />Vegetarian
                </label>
                <br />
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:</p> 
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Vegetarian: {props.data.isVegetarian ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent