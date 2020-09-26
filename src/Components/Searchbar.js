import React, {useState} from 'react';
import './static/searchbar.css'

const SearchBar = ({addTask}) => {
    const [text, setText] = useState("");

    const changeText = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    return(
        <div className="searchbar">
            <div className="form">
                <input type="text" name="name" autocomplete="off" required value={text} 
                placeholder="Enter Tasks Here!" onChange={changeText} />  
                <label for="name" class="label-name"></label>
            </div>
            <button type="submit" onClick={() => {addTask(text); setText("")}}>Add Task</button>
        </div>
    )
}

export default SearchBar;