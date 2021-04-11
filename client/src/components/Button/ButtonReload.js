export default function ButtonReload( {setItems, path} ) {

  const clicked = () => {
    fetch(path, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((data) => {
      console.log(data);
      setItems(data);
    });
  };

  return (
    <img className="icon btn-reload" src="https://imgur.com/tI2qWCY.png" alt="" onClick={clicked}/>
  );
}

