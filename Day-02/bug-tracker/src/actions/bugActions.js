var bugActionCreators = {
	createNew : function(bugName){
		return {
			type : 'ADD_NEW',
			payload : bugName
		}
	},
	toggle : function(bug){
		return {
			type : 'TOGGLE',
			payload : bug
		}
	},
	removeClosed : function(){
		return {
			type : 'REMOVE_CLOSED'
		}
	}
}
export default bugActionCreators;