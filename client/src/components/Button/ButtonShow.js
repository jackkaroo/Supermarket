import {useState} from "react"

export default function ButtonShow( {setItems, setClickedCheck, path} ) {

  const [btnClicked, setBtnClicked] = useState('Show');

  const clicked = () => {

    if(btnClicked === 'Show') {
      setBtnClicked('Hide');
      setClickedCheck(true);

      fetch(path, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch(err => console.log(err));

    } else {
      setBtnClicked('Show');
      setClickedCheck(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={clicked}>{btnClicked}</button>
  );
}

