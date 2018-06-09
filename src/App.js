import React, { Component } from 'react';
class App extends Component {

  constructor() {
    super();

    this.state = {value:"", tasks:["Sacar la ropa","Hacer la cama","Leer un rato"]}
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);

  }

   handleChange(event) {
    this.setState({value: event.target.value});
    }

   keyPress(event){
      // if (this.state.value !== ""){
        if (event.keyCode === 13){
          event.preventDefault();
          this.setState({tasks: this.state.tasks.concat(this.state.value)});
          this.state.value = "";
        }
      }
      // }    
     
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            
            {this.state.tasks.map((task,i)=> <li key={i}>{task}</li>)}
            
          </ul>
           <form>
             <input type="text" id="new-task"  placeholder="Ingresa una tarea y oprime Enter" 
             value={this.state.value} onKeyDown={this.keyPress}  onChange={this.handleChange} />
           </form>
        </div>
      </div>
    )
  }
}
export default App;
