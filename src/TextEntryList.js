import './App.css';
import { useState, useMemo } from 'react';
import TextFieldSubmit from './TextFieldSubmit'; 

function TextEntryList(props) {

  const [sortDirection, setSortDirection] = useState(props.defaultSortMode); 
  const [sortByTimestamp, setSortByTimestamp] = useState(true); 

  const addUserInput = (userSubmittedText) => {
      
      if (userSubmittedText.length > 0) {   
        props.listItemAddedCallback({text: userSubmittedText});
      }
  }


  const sortedItems = useMemo(() => {
    
    if (sortByTimestamp) {
      
      /* The second button should allow the User to reset the list back to the order in which
      the inputs were originally entered. */

      return props.listItems
    }
    else {

        /* The first is a button that allows the User to toggle between showing the list in ascending
        or descending alphabetical order. */
      
        const listItemsClone = [...props.listItems];
        
        // sort alphabetical
        listItemsClone.sort(function(a, b) {
          var textA = a.text.toUpperCase(); // ignore upper and lowercase
          var textB = b.text.toUpperCase(); // ignore upper and lowercase
          if (textA < textB) {
            return 1 * sortDirection;
          }
          if (textA > textB) {
            return -1 * sortDirection;
          }

          // must be equal
          return 0;
        });   

        return listItemsClone;
    }  
  }, [sortDirection, sortByTimestamp, props.listItems]);


  const sortAlphabetical = () => {
    setSortByTimestamp(sortByTimestamp => false);
    
    setSortDirection(sortDirection => sortDirection * -1);
  }

  const sortTimeStamp = () => {
    setSortByTimestamp(sortByTimestamp => !sortByTimestamp);
  }


 return (
  
    <div className="textEntryList">  
      {/* Initially present the User with one <input type="text"/> element and one <input type="submit"/> element.
      Users will enter some text (anything type-able in an input box) and click the submit button to submit. */}
      
      <TextFieldSubmit submitCallback={addUserInput} /> 

      <input type="button" className="sortingButton" 
      value={sortDirection > 0 ? "Sort Ascending" : "Sort Descending" } 
      onClick={sortAlphabetical} /> 
     
      <input type="button" className="sortingButton" 
      value="Timestamp" 
      onClick={sortTimeStamp} /> 
 
      {sortedItems.length > 0 ? /* The list should not display until there is at least one User input. */
        <ul className="list">
          {sortedItems.map((userInput, index) => {
            return <li key={index}>{userInput.text}</li>
          })}
        </ul> 	
       : null
      }     

    </div>
  );
}
export default TextEntryList;