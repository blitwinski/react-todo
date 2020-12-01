import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    tasks: this.props.tasks,
    filteredTasks: this.props.tasks,
    draft: ''
  } 

   Update = (e) => { 
    console.log(e.target.value)
    this.setState({draft: e.target.value})
  }
  
   AddTodo = () => {
    //tasks.push(this.state.draft)
    //tasks.push('aaa')
    //state.tasks.push(state.draft)
    console.log(this.state.tasks)
  
    //const {tasks, draft} = this.state
    //const list = tasks
    this.props.tasks.push(this.state.draft)
    this.setState({filteredTasks: this.state.tasks})
    //console.log(this.state.draft)
  }
  
  filterTasks(e) {
    const text = e.currentTarget.value;
    console.log(text)
    const filteredTasks = this.getFilteredTasksForText(text)
    this.setState({
      filteredTasks
    });
    console.log(this.state.filteredTasks)
  }

  getFilteredTasksForText(text) {
    return this.state.tasks.filter(task => task.toLowerCase().includes(text.toLowerCase()))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.props.title}
        </p>
       <input type="text" onChange={this.Update} value={this.draft} placeholder='Task name'></input>
       <input type="text" onInput={this.filterTasks.bind(this)} placeholder='Search tasks'></input>
       <button onClick={this.AddTodo}>Add</button>
       <TaskList tasks={this.state.filteredTasks} />
      </header>
    </div>
  );

  }
    
}

const TaskList = ({ tasks }) => {
  if (tasks.length > 0) {
    return (
      <p>
        {tasks.map(task=> <div>{task}</div>)}
      </p>
    );
  }

  return (
    <p>No results!</p>
  );
};
  

export default App;
