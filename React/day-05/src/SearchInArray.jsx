import { useState } from "react";

export function SearchInArray(){
    let names = ["Alice","Bob","Charlie"];

    let [filterredNames,setFilteredNames] = useState([]);

    function handleInputChange(event){
      newNames = names.filter(name =>{
       return name.toLowerCase().includes(event.target.value.toLowerCase());
      });
       
      setFilteredNames(newNames);

    }


    return(
        <>
         <input type="text" placeholder="search name" onChange={handleInputChange} />

         {names.map(name => {
            return <p>{name}</p>
         })}

        </>
    )
}