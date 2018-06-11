import React, { Component } from 'react';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {value:"", tasks:["Sacar la ropa","Hacer la cama","Leer un rato"]}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

   handleChange(event) {
    this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    event.preventDefault();
    // alert('Está agregando la siguiente tarea: ' + this.state.value);
    this.setState({tasks: this.state.tasks.concat(this.state.value)});
    this.state.value = "";
    
    }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task,i)=> <li key={i}>{task}</li>)}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type="text" id="new-task"  placeholder="Ingresa una tarea y oprime Enter" 
             value={this.state.value} onChange={this.handleChange}  />
           </form>
        </div>
      </div>
    )
  }
}
export default App;
