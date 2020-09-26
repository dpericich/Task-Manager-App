import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import SearchBar from './Searchbar';
import Task from './Task';

class App extends Component {
  state = {
    tasks : [
      {id : 1999, task: "Add more tasks to the list", isComplete : true},
      {id : 2000, task: "Just need one more for three tasks!", isComplete : false}
    ]} 

  removeTask = (id) => {
    this.setState({tasks : this.state.tasks.filter(item => item.id !== id)})
  }

  addTask = (task) => {
     this.setState({tasks: [...this.state.tasks, {id: uuidv4(), task: task, isComplete: false}]}) 
  }

  changeStatus = (id) => {
    this.setState({tasks: this.state.tasks.map(item => item.id === id ? {id : item.id, task : item.task, isComplete : !(item.isComplete)}: item)})
  }

  render() {
    return(
      <div style={appStyle}>
        <div style={headStyle}>
          <h1>Task Manager Tool</h1>
          <SearchBar addTask={this.addTask}/>
        </div>
        {this.state.tasks.map(item => (
          <Task id={item.id} 
          task={item.task} 
          taskStatus={item.isComplete} 
          removeTask={this.removeTask}
          changeStatus={this.changeStatus}/>
      ))}
      </div>
    )
  }
}

const appStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between"
}

const headStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ff9149",
  color: "#ffffff",
  textShadow: "2px 2px #424242",
  width: "100vw",
  paddingBottom: "20px",
  borderRadius: "0px 5px",
}

export default App;
