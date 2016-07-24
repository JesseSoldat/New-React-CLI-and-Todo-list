import React from 'react';

var TodoList = React.createClass({

	onRemove: function(index) {
		
		this.props.onRemove(index);
	},

	createItem: function(item, index) {
		var _this = this
		return (
			<div className="listContainer" key={index}  onClick={() => this.onRemove(index)}>
				<li>{item.text}</li> 
				<i  className="fa fa-times-circle" aria-hidden="true"></i>
			</div>);
	},

	render(){
		return (
		<div>
			<ul>{ this.props.items.map(this.createItem) }
			 </ul>
		</div>
		);
	}
});

module.exports = TodoList;