import {useState} from "react"

export default function ButtonShow( {setItems, setClickedCheck, path} ) {

  const [btnClicked, setBtnClicked] = useState('Show');

  const clicked = () => {

    if(btnClicked === 'Show') {
      setBtnClicked('Hide');
      setClickedCheck(true);

      fetch(path)
      .then((response) => {
        return response.json();

      })
      .then((data) => {
        console.log(data);
        setItems(data);
      });

    } else {
      setBtnClicked('Show');
      setClickedCheck(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={clicked}>{btnClicked}</button>
  );
}

