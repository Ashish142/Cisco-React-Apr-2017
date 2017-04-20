function bugsReducer(currentState = [], action){
	switch(action.type){
		case 'ADD_NEW':
			var newBugId = currentState.reduce((result, bug) => result > bug.id ? result : bug.id, 0) + 1;
			var newBug = {
				id : newBugId,
				name : action.payload,
				isClosed : false
			}
			return currentState.concat([newBug]);
		case 'TOGGLE':
			var bugToToggle = action.payload;
			return currentState.map( bug => bug.id !== bugToToggle.id ? bug : Object.assign({}, bug, {isClosed : !bug.isClosed}));
		case 'REMOVE_CLOSED':
			return currentState.filter(bug => !bug.isClosed);
		default :
			return currentState;
	}
}
export default bugsReducer;