import React, { Component } from 'react';

export class BugStats extends Component{
	render(){
		var bugs = this.props.model,
			closedCount = bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
		return (
			<section className="stats">
					<span className="closed">{closedCount}</span>
					<span> / </span>
					<span>{bugs.length}</span>
				</section>
		)
	}
}
