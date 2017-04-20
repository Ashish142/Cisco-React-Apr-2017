import React, { Component } from 'react';

class BugItem extends Component{
	onBugClick(){
		this.props.toggle(this.props.model);
	}
	render(){
		var bug = this.props.model;
		var bugClass = "bugName " + (bug.isClosed ? 'closed' : '');
		return (
			<li>
				<span className={bugClass} onClick={this.onBugClick.bind(this)}>{bug.name}</span>
			</li>
		)
	}
}

export default BugItem;