import React, { Component } from 'react';
import { BugStats } from './BugStats';
import BugItem from './BugItem';
import BugEdit from './BugEdit';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import bugActionCreators from '../actions/bugActions';

class BugTracker extends Component{
	
	render(){
		var bugs = this.props.model;
		var bugItems = bugs.map(bug => (
			<BugItem model={bug} key={bug.id} toggle={this.props.toggle}></BugItem>
		));

		return (
			<div>
				<BugStats model={bugs}></BugStats>
				<BugEdit createNew={this.props.createNew} removeClosed={this.props.removeClosed}></BugEdit>
				<section className="list">
					<ol>
						{bugItems}
					</ol>
				</section>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		model : state
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(bugActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);