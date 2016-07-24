import React from 'react';

import TodoList from './TodoList';



var TodoApp = React.createClass({

	getInitialState: function(){
		return {items: [], text: ''};
	},

	onChange: function(e){
		this.setState( {text: e.target.value } );
	},

	handleSubmit: function(e){
		e.preventDefault();
		if(this.state.text){
			var nextItems = this.state.items.concat([{
				text: this.state.text
			}]);
			this.setState({
				items: nextItems,
				text: ''
			});
			
		}
	},
	onRemove: function(index){

		var array = this.state.items;
		
		for(var i = 0; i < array.length; i++){
			if(i === index)
			array.splice(i, 1);
		}


		this.setState({
			items: array,
			text: ''
		})



		
	},


    render: function() {
        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                	<input onChange={this.onChange} value={this.state.text}/>
                	<button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
  				<TodoList onRemove={this.onRemove} items={this.state.items}></TodoList>
             	
            </div>
        );
    }
});

module.exports = TodoApp;

