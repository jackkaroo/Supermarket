import {useState} from "react"

export default function ButtonReload( {setItems, path} ) {

  const clicked = () => {
    fetch(path)
    .then((response) => {
      return response.json();

    })
    .then((data) => {
      console.log(data);
      setItems(data);
    });
  };

  return (
    <img className="icon btn-reload" src="https://imgur.com/tI2qWCY.png" onClick={clicked}/>
  );
}

