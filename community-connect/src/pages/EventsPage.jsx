import React, { useState } from "react";
import { FaSearch, FaPlus ,FaStar ,FaArrowLeft} from "react-icons/fa";
import "./EventsPage.css";
import "../components/searchBar.css";
import "../components/CheckBox.css";
import "../components/EventBox.css";
import "../components/AddEvent.css";

function EventsPage() {
  const [input, setInput] = useState("");
  const [checkedIdArray, setCheckedIdArray] = useState([]);
  const [addButton, setAddButton] = useState(false);
  const [isYello2,setYellow2] = useState(false)
  const [isYellow,setYellow] = useState(false)

  const [localStorageData, setLocalStorageData] = useState(function () {
    const array = [];
    const keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      array[i] = {};
      array[i][key] = JSON.parse(localStorage.getItem(key));
    }
    return array;
  });

  const [nome, setNome] = useState('');
  const [descrizione, setDescrizione] = useState('');
  const [data, setData] = useState('');
  const [luogo, setLuogo] = useState('');
  const [img, setImg] = useState('');
  const [tag, setTag] = useState('');

  const array = [];

  localStorageData.map((item) => (
    array.push(item[Object.keys(item)].tag)
  ));
  const uniqueArray = [...new Set(array)];

  const checkedId = () => {
    let elements = document.getElementsByTagName("INPUT");
    let checkedArray = [];
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].type === 'checkbox' && elements[i].checked) {
        checkedArray.push(elements[i].id);
      }
    }
    setCheckedIdArray(checkedArray);
  };

  const handleAddForm = () => {
    setAddButton(true);
    const formClicked = document.getElementById("idFormAddEvent");
    formClicked.classList.add("formBackgroundActive");
  };

  let wasSubmitted = false;

  function checkBeforeSubmit() {
    if (!wasSubmitted) {
      wasSubmitted = true;
      return wasSubmitted;
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkBeforeSubmit) {
      // Handle form submission logic using the state variables (nome, descrizione, data, luogo, img, tag)
      console.log('Submitted:', { nome, descrizione, data, luogo, img, tag });
      const addFormData = document.querySelector(".AddEventForm");
      if (addFormData) {
        const formData = new FormData(addFormData);
        const dataForm = Object.fromEntries(formData);
        localStorage.setItem(JSON.stringify(dataForm.nome), JSON.stringify(dataForm));
        setLocalStorageData(function () {
          const array = [];
          const keys = Object.keys(localStorage);
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            array[i] = {};
            array[i][key] = JSON.parse(localStorage.getItem(key));
          }
          addFormData.reset();
          CloseAddForm();
          return array;
        });
      }
      setNome('');
      setDescrizione('');
      setData('');
      setLuogo('');
      setImg('');
      setTag('');
    }
  };

  const CloseAddForm = () => {
    setAddButton(false);
    const formClicked = document.getElementById("idFormAddEvent");
    formClicked.classList.remove("formBackgroundActive");
  };


  let [prefArray, setPrefArray] = useState([]);

  const Clicked = (id) => { 
    setYellow(!isYellow)
    const ClickedBut = document.getElementById(id)  
    if(!document.getElementById(id).classList.contains("ab")){
        setPrefArray((prevArray) => [...prevArray, id]);
      ClickedBut.classList.add("ab");

    }else{   
        ClickedBut.classList.remove("ab");   
        setPrefArray((prevArray) => prevArray.filter((item) => item !== id));
    }   
    
    
    
    
}
console.log(prefArray)


const PrefBut = () => { 
    const ClickedBut = document.getElementById("prefBut")  
    if(!document.getElementById("prefBut").classList.contains("eb")){
        
    ClickedBut.classList.add("eb")
    }else{           

        ClickedBut.classList.remove("eb")
    }
}

const toggleColor = () => {
    setYellow2(!isYello2);
  };

function EventBox(title, place, date, info, tags, imgUrl) {
  return (
    <div className="outsideBox" >
      <div
        className="imgHolder"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <div></div>
      <div className="textHolder">
        <h1 className="eventTitle">{title}</h1>
        <p className="place">{"Luogo : " + place}</p>
        <p className="Date">{"Data :  " + date}</p>
        <p className="description">{"Info : " + info}</p>
        <div className="tagPreferiti">
        <p className="tags">{"Tags : " + tags}</p>
        <button className="preferiti" id={title} onClick={() => Clicked(title)}><FaStar className={`star ${isYellow ? 'yellow' : ''}`}/></button>
        </div>
      </div>
    </div>
  );
}

  return (
    <>
      <div id="idFormAddEvent" className="formBackgroundDeactivated">
        <div className="formAddEvent">
          <h1>Carica il tuo evento</h1>
          <form className="AddEventForm" onSubmit={handleSubmit}>
            <input
              name="nome"
              type=""
              placeholder="Nome dell'evento"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              name="descrizione"
              placeholder="Descrizione"
              value={descrizione}
              onChange={(e) => setDescrizione(e.target.value)}
              required
            />
            <input
              name="data"
              type="date"
              placeholder="Data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
            <input
              name="luogo"
              placeholder="Luogo"
              value={luogo}
              onChange={(e) => setLuogo(e.target.value)}
              required
            />
            <input
              name="img"
              type="url"
              placeholder="URL immagine"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
            <input
              name="tag"
              type=""
              placeholder="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
            />
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
                  <FaSearch color="black" className='lent' />
                  <input
                    className="searchbar"
                    type="text"
                    placeholder="trova eventi intorno a te!"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  ></input>
                </form>
              </div>
            </div>
            <div className="h">
              {uniqueArray.map((item) => (
                <div className="wrapper" key={item}>
                  <div className="inputDiv">
                    <input
                      type="checkbox"
                      name="tags"                      
                      onClick={checkedId}
                    ></input>
                  </div>
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="returnPreferitiAddButton">
            <div className="goBack">
                <button className="button"><FaArrowLeft className="plusIcon"/> </button>
            </div>
            <div className="Preferiti">
            <button className="button" id="prefBut" onClick={PrefBut}> <FaStar className="noIdea"/> </button>
            </div>
          <div className="addEvent">
            <button className="button" onClick={handleAddForm}>
              <FaPlus className="plusIcon" />
            </button>
          </div>
          </div>
        </div>
        {/* space between grids*/}
        <div></div>
        {/* space between grids*/}
        <div className="eventBox" >
          {localStorageData
            .filter((item) => {
              if (input === "" && checkedIdArray.length === 0) {
                return item;
              } else if (checkedIdArray.length === 0) {
                return item[Object.keys(item)].nome
                  .toLowerCase()
                  .includes(input.toLowerCase());
              } else if (input === "") {
                return checkedIdArray.every((element) =>
                  item[Object.keys(item)].tag.includes(element)
                );
              } else {
                return (
                  item[Object.keys(item)].nome
                    .toLowerCase()
                    .includes(input.toLowerCase()) &&
                  checkedIdArray.every((element) =>
                    item[Object.keys(item)].tag.includes(element)
                  )
                );
              }
            })
            .map((item) =>
              EventBox(
                item[Object.keys(item)].nome,
                item[Object.keys(item)].luogo,
                item[Object.keys(item)].data,
                item[Object.keys(item)].descrizione,
                item[Object.keys(item)].tag,
                item[Object.keys(item)].img
              )
            )}
        </div>
      </div>
    </>
  );
}



export default EventsPage;
