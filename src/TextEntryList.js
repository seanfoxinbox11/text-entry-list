import { useState } from 'react';
import './App.css';
import TextFieldSubmit from './TextFieldSubmit'; 

function TextEntryList(props) {

  const [userInputs, setUserInputs] = useState([]);
  const [sortDirection, setSortDirection] = useState(1); // props.defaultSortMode



const onTextSubmited = (userSubmittedText) => {
    
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


 return (
  
    <div className="textEntryList">  
      {/* Initially present the User with one <input type="text"/> element and one <input type="submit"/> element.
      Users will enter some text (anything type-able in an input box) and click the submit button to submit. */}
      
      <TextFieldSubmit submitCallback={onTextSubmited} /> 

 
 
 
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