import React, { Component } from 'react';


class Todo extends Component {

	constructor() {
  	super();
  	this.state = { items: [], text: '' };
  	this.onChange = this.onChange.bind(this);
  	this.handleSubmit = this.onChange.bind(this);

 	}


	onChange(e) {
		this.setState({text: e.target.value});
		
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.state.text) {
			let nextItems = this.state.items.concat([{
				text: this.state.text
			}]);
			this.setState({
				items: nextItems,
				text: ''
			});
		}
		console.log(this.state.text);
	}

  render() {
    return (
      <div className="todo">
        <h3>TODO APP</h3>
        <form onSubmit={ this.handleSubmit }>
        <input onChange={ this.onChange } value={ this.state.text } />
        <button>{ 'Add #' + (this.state.items.length + 1) }</button>

        </form>
      </div>
    );
  }

} //TODO

export default Todo;