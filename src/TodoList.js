import React from 'react';

var TodoList = React.createClass({

	render(){
		var createItem = function(item, index) {
		return <li key={index}>{item.text}</li>;
		};
		return (
		<div>
			<ul>{ this.props.items.map(createItem) } </ul>
		</div>
		);
	}
});

module.exports = TodoList;