export default function textEntryReducer(listState = getInitialState(), action) {
	
	switch(action.type) {

		case 'LIST_ITEM_ADDED':
		{	
			const listStateClone = [...listState, action.listItem];
			return listStateClone;
		}
	
		default:
			return listState;
	}	
}

////////////////////////////////////////////////////////

function getInitialState() {	
	return []; // {name: "", text: ""};
}