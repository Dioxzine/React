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

function CheckBox() {
    return(
        <div>
            {Data[0].tags.map((item) => (
          box(item)
        ))}
        </div>
        );
};

export default CheckBox;