import React, { Component } from 'react';

class AddItem extends Component{
    
    state = {
        name: "",
        age: ""
    }


    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name === ''){
            document.querySelector('#name').classList.add('empty');
        }else{
            this.props.addItem(this.state);
            this.setState({
                name: '',
                age: ''
            });
            if(document.querySelector('#name').classList.contains('empty')){
                document.querySelector('#name').classList.remove('empty');
            }
        }
    }
    
    
    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <input onChange={ this.handleChange } type="text" id="name" placeholder="Enter name" value={this.state.name} />
                <input onChange={ this.handleChange } type="number" id="age" placeholder="Enter age" value={this.state.age} />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default AddItem;