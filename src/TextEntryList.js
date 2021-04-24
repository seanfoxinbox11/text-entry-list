import { useState } from 'react';
import './App.css';

function TextEntryList(props) {

  const [userInputs, setUserInputs] = useState([]);
  const [sortDirection, setSortDirection] = useState(1); // props.defaultSortMode


 return (
    <div className="textEntryList">  

    </div>
  );
}
export default TextEntryList;