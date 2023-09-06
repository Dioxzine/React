import "./CheckBox.css"
import Data from "../Data"

function box(tag){
return(
    <div className="wrapper">
        <div className="inputDiv">
            <input type="checkbox" id={tag}></input>            
        </div>
            <label for={tag}>{tag}</label>
        </div>
        
    );
};

function CheckBox(){    
    const array = [];
    Data.map((item)=>(            
        item[Object.keys(item)].tag.map((item2)=>array.push(item2)) 
    ))
    const uniqueArray = [...new Set(array)]
    return(        
        <div>
        {uniqueArray.map((item)=> box(item))}
        </div>
        );
};

export default CheckBox;