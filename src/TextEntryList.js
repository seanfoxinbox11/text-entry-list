import { useState } from 'react';
import './App.css';
import TextFieldSubmit from './TextFieldSubmit'; 

function TextEntryList(props) {

  const [userInputs, setUserInputs] = useState([]);
  const [sortDirection, setSortDirection] = useState(1); // props.defaultSortMode


  const addUserInput = (userSubmittedText) => {
      
      /* Upon submission, the User inputs should be appended to a central store as strings, one entry per submission. This should trigger an
      Update to the UI that shows a list of the User inputs in the store, below the form fields. The list should display the User inputs in the order
      in which they were entered (first input = first list item). */
      if (userSubmittedText.length > 0) {   
        
        setUserInputs(userInputs => {
          return [...userInputs, {text: userSubmittedText, time: Date.now()}];
        });

        console.log(userInputs);
      }
  }

  const sortAlphabetical = () => {
    /* The first is a button that allows the User to toggle between showing the list in ascending
    or descending alphabetical order. */
    
    setUserInputs((userInputs) => {
      const userInputsClone = [...userInputs];

      // sort alphabetical
      userInputsClone.sort(function(a, b) {
        var textA = a.text.toUpperCase(); // ignore upper and lowercase
        var textB = b.text.toUpperCase(); // ignore upper and lowercase
        if (textA < textB) {
          return -1 * sortDirection;
        }
        if (textA > textB) {
          return 1 * sortDirection;
        }

        // must be equal
        return 0;
      });

      return userInputsClone;

    });

    setSortDirection(sortDirection => sortDirection * -1);

    console.log(userInputs);    
  }


const sortByTimeStamp = () => {
  /* The second button should allow the User to reset the list back to the order in which
  the inputs were originally entered. */

  setUserInputs(userInputs => {
    const userInputsClone = [...userInputs];
    userInputsClone.sort((a, b) => a.time - b.time); 
    return userInputsClone;
  });

  console.log(userInputs);
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
      onClick={sortByTimeStamp} /> 
 
      {userInputs.length > 0 ? /* The list should not display until there is at least one User input. */
        <ul className="list">
          {userInputs.map((userInput, index) => {
            return <li key={index}>{userInput.text}</li>
          })}
        </ul> 	
       : null
      }     

    </div>
  );
}
export default TextEntryList;