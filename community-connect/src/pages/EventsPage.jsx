import "./EventsPage.css"
import "../components/searchBar.css"
import "../components/CheckBox.css"
import React, {useState,useEffect} from "react";
import { FaSearch } from "react-icons/fa";

import "../components/EventBox.css"
import { FaPlus } from "react-icons/fa";
import "../components/AddEvent.css"

function EventsPage()  {
    const [input,setInput] = useState("");
    const [checkedIdArray,setCheckedIdArray]  = useState([]);
    const [addButton,setAddButton] = useState(false);
    const [localStorageData, setLocalStorageData] = useState(function(){
        const array = []
        const keys = Object.keys(localStorage)
        for (let i = 0; i < keys.length; i++) {                
            const key  = keys[i];
            array[i]= {}              
            array[i][key] = JSON.parse(localStorage.getItem(key))     
                         
          }
          return array
    });
      

    const array = [];
    
    localStorageData.map((item)=>(                
       array.push(item[Object.keys(item)].tag) 
    ))
    const uniqueArray = [...new Set(array)]

    

      const checkedId = () =>{
        let elements = document.getElementsByTagName("INPUT");
        let checkedArray =  [];
        for(var i=0;i<elements.length;i++)
        {
            if(elements[i].type === 'checkbox' && elements[i].checked)
            {
                checkedArray.push(elements[i].id);
            }
        }
        setCheckedIdArray(checkedArray)
    }
    const handleAddForm = () =>{
        setAddButton(true)
        const formClicked = document.getElementById("idFormAddEvent")
        formClicked.classList.add("formBackgroundActive")
    }
   
    const wasSubmitted = false;    
    function checkBeforeSubmit(){
      if(!wasSubmitted) {
        wasSubmitted = true;
        return wasSubmitted;
      }
      return false;
    }
    const addFormData = document.querySelector(".AddEventForm")
    if(addFormData){
        addFormData.addEventListener('submit',event =>{
            event.preventDefault();
        
            const formData = new FormData(addFormData);
            const dataForm = Object.fromEntries(formData)  
            dataForm.tag = [dataForm.nome]       
            localStorage.setItem(JSON.stringify(dataForm.nome),JSON.stringify(dataForm))
            setLocalStorageData(function(){
                const array = []
                const keys = Object.keys(localStorage)
                for (let i = 0; i < keys.length; i++) {                
                    const key  = keys[i];
                    array[i]= {}              
                    array[i][key] = JSON.parse(localStorage.getItem(key))     
                                 
                  }
                  return array
            });
        })
    }     
    console.log(localStorageData)  
return(
    <>  
    <div id="idFormAddEvent" className="formBackgroundDeactivated">
        <div className="formAddEvent">            
                <h1>Carica il tuo evento</h1>
                <form className="AddEventForm" onsubmit="return checkBeforeSubmit()">
                <input name="nome" type="" placeholder="Nome dell'evento" ></input>  
                <input name="descrizione" placeholder="Descrizione" ></input>  
                <input name="data" type="date" placeholder="Data"></input>  
                <input name="luogo" placeholder="Luogo"></input>  
                <input name="img" type="url" placeholder="URL immagine" ></input>  
                <input name="tag" type="" placeholder="tag"></input>   
                <button type="submit">Carica</button>
                </form>
        </div>
    </div>  
    <div className="divBody">        
        <div className="tagBox">
            <h1 className="title">Eventi</h1>
            <div>
                <div>
                <div className="ricerca">
                    <form className="Searchbar">
                        <FaSearch  color="black" className='lent' />
                        <input className="searchbar" type="text" placeholder="trova eventi intorno a te!"value={input} onChange={(e)=> setInput(e.target.value)}></input>
                    </form>
                </div>   
                </div>
                <div className="h">
                {uniqueArray.map((item)=> 
            <div className="wrapper">
            <div className="inputDiv">
                <input type="checkbox" name="tags" id={item} onClick={checkedId}></input>            
            </div>
                <label for={item}>{item}</label>
            </div>
            )}
                </div>
            </div>         
            <div className="addEvent">
                <button  className="button" onClick={handleAddForm}><FaPlus className="plusIcon"/> </button>                             
            </div>    
        </div>
        {/* space betwin grids*/}
        <div>            
        </div>
        {/* space betwin grids*/}
        <div className="eventBox">        
         {localStorageData.filter((item)=> {
         if(input === "" && checkedIdArray.length === 0){
            return item
        }else if (checkedIdArray.length === 0 ){
            return item[Object.keys(item)].nome.toLowerCase().includes(input.toLowerCase())
        }else if (input === "" ){
            return checkedIdArray.every(element => item[Object.keys(item)].tag.includes(element))
        } else {
            return item[Object.keys(item)].nome.toLowerCase().includes(input.toLowerCase()) && checkedIdArray.every(element => item[Object.keys(item)].tag.includes(element))
        }
        
    
    }).map((item)=> EventBox(
            item[Object.keys(item)].nome,
            item[Object.keys(item)].luogo,
            item[Object.keys(item)].data,
            item[Object.keys(item)].descrizione,
            item[Object.keys(item)].tag,
            item[Object.keys(item)].img))}   
                    
        </div>
        
    </div>
    </>

    );
};



function EventBox (title,place,date,info,tags,imgUrl){    

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



export default EventsPage;