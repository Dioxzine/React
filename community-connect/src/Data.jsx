let Data = helpMe();

function helpMe (){
    let array = []
    let name = ""
    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            name = key
            break                   
        }
    }

    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            
            array[key] = JSON.parse(localStorage.getItem(key))           
        }
        console.log(key[0])
    }
    
    return array

}

export default Data;
