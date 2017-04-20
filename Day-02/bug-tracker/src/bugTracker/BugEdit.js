import React, { Component } from 'react';

class BugEdit extends Component{
	onAddNewClick(){
		var bugName = this.refs.txtBugName.value;
		console.log(bugName);
		this.props.createNew(bugName);
	}
	onRemoveClosedClick(){
		this.props.removeClosed();
	}
	render(){
		return (
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref="txtBugName" />
				<input type="button" value="Add New" onClick={this.onAddNewClick.bind(this)} />
				<input type="button" value="Remove Closed" id="btnRemoveClosed" onClick={this.onRemoveClosedClick.bind(this)}/>
			</section>
		)
	}
}
export default BugEdit;