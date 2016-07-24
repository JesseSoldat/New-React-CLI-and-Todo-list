import React from 'react';


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
				text: ''
			});
			console.log(this.state.text);
		}
	},
    render: function() {
        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                	<input onChange={this.onChange} value={this.state.text}/>
                	<button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});

module.exports = TodoApp;

