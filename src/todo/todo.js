import React, { Component } from 'react';
import List from './../list/list';
import './todo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
        event.target.input.value = ''

    }

    delete = (index) => {
        let items = [...this.state.items];
        items.splice(index, 1)
        this.setState({
            items
        });
    }

    clearAll = (event) => {
        event.preventDefault();
        this.setState({
            items: [],
        });
    }

    render() {
        return (
            <div>
                <div className="form">
                    <h2>Todo App</h2>
                    <form onSubmit={this.onSubmit}>
                        <input className="input-field" name="input" onChange={this.onChange} placeholder="Add new todo"/>
                        <button className="submit-btn">Add New</button>
                    </form>
                </div>
                <List items={this.state.items} deleteMethod={this.delete.bind(this)} />
                <button className="clear-btn" onClick={this.clearAll}> Clear All </button>
                <br />
            </div>
        );
    }
}