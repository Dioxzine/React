let Data = [
    {"gita in montagna":
        {
        "nome":"gita in montagna",
        "descrizione":"",
        "data":"",
        "luogo":"",
        "img":"https://th.bing.com/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?pid=ImgDet&rs=1",  
        "tag":["montagna","fuori" ]                
    },
},
    {"gita al mare":
        {
        "nome":"gita al mare",
        "descrizione":"",
        "data":"",
        "luogo":"",
        "img":"https://th.bing.com/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?pid=ImgDet&rs=1",  
        "tag":["mare","fuori" ]               
    },
},
    {"gita al museo":
        {
        "nome":"gita al museo",
        "descrizione":"",
        "data":"",
        "luogo":"",
        "img":"https://th.bing.com/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?pid=ImgDet&rs=1",  
        "tag":["museo","dentro" ]                 
    }
},
    
]
function buildImage(url) {
    let img = new Image();
    img.onerror = function() {
      console.log("could not load image on URL " + url);
    };
    img.src = url;
    return img;
  }
export default Data


