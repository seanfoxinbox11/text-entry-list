import './App.css';
import { useState } from 'react';
import TextEntryList from './TextEntryList';
import { useDispatch, useSelector } from 'react-redux'; 
import * as textEntryActions from './redux/actions/textEntry';

function App() {

  const [selectedListName, setSelectedListName] = useState("list1");

  const dispatch = useDispatch();
 
  const currentListItems = useSelector(appState => appState.textEntry.filter((item) => {
    return item.name === selectedListName;  
  }));

  const listItemAdded = (listItem) => {
    const listItemClone = {...listItem, name: selectedListName}
    
    dispatch(textEntryActions.listItemAdded(listItemClone));
  } 
  
  const selectedListChanged = (event) => {
    setSelectedListName(event.target.value);
  }
  
  return (
    <div>
      <select className="dropdown" onChange={selectedListChanged}>
        <option key="1" value="list1">List 1</option>
        <option key="2" value="list2">List 2</option>
      </select>

      <TextEntryList      
        listItems={currentListItems} 
        listItemAddedCallback={listItemAdded} 
        defaultSortMode={1}
      />
    </div>
  );
}

export default App;