import "./EventBox.css"
import Data from "../Data"

function Box (title,place,date,info,tags,imgUrl){    
return(
    <div className="outsideBox">
        <div className="imgHolder" style={{
             backgroundImage:`url(${imgUrl})`}}>
            
        </div>
        <div>               
        </div>
        <div className="textHolder">            
            <h1 className="eventTitle">
                {title}
            </h1>
            <p className="place">   
            {"Luogo : "+ place}
            </p>
            <p className="Date">
            {"Data :  "+ date}
            </p>
            <p className="description">
            {"Info : "+ info}
            </p>
            <p className="tags">
            {"Tags : "+ tags}
            </p>
        </div>
    </div>
    )
}

function EventBox(){
    return(
        <>
        {Data.map((item)=> Box (item[Object.keys(item)].nome,item[Object.keys(item)].luogo,item[Object.keys(item)].data,item[Object.keys(item)].descrizione,item[Object.keys(item)].tag,item[Object.keys(item)].img))}
        </>
        )
};
export default EventBox