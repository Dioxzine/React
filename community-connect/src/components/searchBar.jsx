import "./searchBar.css";
import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";



function SearchBar ()  {
  const [input,setInput] = useState("");
 
    return(
        <div className="ricerca2">
        <form className="Searchbar">
        <FaSearch  color="black" className='lent' />
          <input className="searchbar" type="text" placeholder="trova eventi intorno a te!"value={input} onChange={(e)=> setInput(e.target.value)}></input>
        </form>
      </div>        
    );
};


export default SearchBar;