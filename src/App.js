import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';

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
    
   if (!this.state.draft) return (
    alert('Please insert a task!') ) 
  

    console.log(!this.state.draft)
  
    //const {tasks, draft} = this.state
    //const list = tasks
    this.props.tasks.push(this.state.draft)
    this.setState({filteredTasks: this.state.tasks})
    //console.log(this.state.draft)
  }
/*
  delTodo = () => {
    //tasks.splice(1)
    console.log(this.state.tasks.indexOf())
  }
  */  
  
 delTodo = (i) => {
  this.props.tasks.splice(i, 1)
  console.log(i)
  console.log(this.props.tasks)
  this.setState({
    tasks: this.state.tasks
  })
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
        <div className="Task">
        {this.state.filteredTasks.length > 0 ? 
        this.state.filteredTasks.map((task,i)=> 
        <div key={i}>{task}<button onClick=
        {() => this.delTodo(i)}>
          remove</button></div>)
          : 'No results!'}
      </div>
          
       </header>
    </div>
  );

  }
    
}

export default App;