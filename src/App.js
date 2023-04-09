import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor() {
      super()
      this.state = {
          firstName: '',
          lastName: '',
          age: '',
          gender: '', 
          destination: 'New York',
          isKosher: false,
          isVegan: false,
          isVegetarian: false,        
      }
      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
      const {name, value, type, checked} = event.target;
      type === 'checkbox' ? 
        this.setState({  
          [name] : checked
        }) 
      : 
        this.setState({ 
          [name] : value
        })
  }
  
  render() {
      return (
          <main>
              <form>
                  <input 
                      placeholder="First Name" 
                      type="text"
                      value={this.state.firstName}
                      name="firstName"
                      onChange={this.handleChange}
                  />    
                  <br />
                  <input 
                      placeholder="Last Name" 
                      type="text"
                      value={this.state.lastName}
                      name="lastName"
                      onChange={this.handleChange}
                  />
                  <br />
                  <input 
                      placeholder="Age" 
                      type="number"
                      value={this.state.age}
                      name="age"
                      onChange={this.handleChange}
                  />
                  <br />
                  
                  <label>
                      <input
                          type="radio"
                          name="gender"
                          value="Male"
                          checked={this.state.gender === "Male"}
                          onChange={this.handleChange}
                      /> Male
                  </label>
                  <br />
                  <label>
                      <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={this.state.gender === "Female"}
                          onChange={this.handleChange}
                      /> Female
                  </label>
                  <br />
                  <label>
                      <input
                          type="radio"
                          name="gender"
                          value="Other"
                          checked={this.state.gender === "Other"}
                          onChange={this.handleChange}
                      />Other
                  </label>
                  <br />
                  
                  <label>Destination: </label>
                      <select
                          value={this.state.destination}
                          name="destination"
                          onChange={this.handleChange}
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
                          checked={this.state.isKosher}
                          onChange={this.handleChange}
                      />Kosher
                  </label>
                  <br />
                  <label>
                      <input
                          type="checkbox"
                          name="isVegan"
                          checked={this.state.isVegan}
                          onChange={this.handleChange}
                      />Vegan
                  </label>
                  <br />
                  <label>
                      <input
                          type="checkbox"
                          name="isVegetarian"
                          checked={this.state.isVegetarian}
                          onChange={this.handleChange}
                      />Vegetarian
                  </label>
                  <br />
                  <button>Submit</button>
              </form>
              <hr />
              <h2>Entered information:</h2>
              <p>Your name: {this.state.firstName} {this.state.lastName}</p>
              <p>Your age: {this.state.age}</p>
              <p>Your gender: {this.state.gender}</p>
              <p>Your destination: {this.state.destination}</p>
              <p>Your dietary restrictions:</p> 
              <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
              <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
              <p>Vegetarian: {this.state.isVegetarian ? "Yes" : "No"}</p>
          </main>
      )
  }
}

export default App
