import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
    
    
    state = {
        items: [
            {id:1, name:'John', age:22},
            {id:2, name:'Doe', age:38},
            {id:3, name:'Mark', age:25}
        ]
    }


    
    deleteItem = (id) => {
        
        this.setState({ items: [...this.state.items.filter(item => {
            return item.id !== id
        })] })
        
    }
    
    
    addItem = (item) => {
        item.id = this.state.items.length+1;
        this.setState({
            items: [...this.state.items, item]
        })
    }
    
    
    
  render(){
      return (
        <div className="App container">
            <h1 className="text-center">Todo List</h1>
            <TodoItems items={ this.state.items } deleteItem={ this.deleteItem }/>
            <AddItem addItem={ this.addItem } />
        </div>
      );
  }
}

export default App;
