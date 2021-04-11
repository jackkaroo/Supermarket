import {useEffect, useState} from "react"
import Check from "./Check"

export default function Checks() {
  const [checks, setCheks] = useState([]);
  const fetchData = async () => {
    fetch('http://localhost:3001/api/checks', {
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
      setCheks(data);
    });
  };

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="checks-wrapper">
      <div className="header">
        <h2>Checks</h2>
        <button className="btn btn-primary">Add new</button>
      </div>
      <table className="table table-hover table-bordered">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Check Number</th>
          <th scope="col">Id Employee</th>
          <th scope="col">Card Number</th>
          <th scope="col">Print Date</th>
          <th scope="col">Total Sum</th>
          <th scope="col">Vat</th>
          <th width="80px"></th>
        </tr>
        </thead>
        <tbody>
        {checks.map((check,index) => <Check key={check.check_number} check={check} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}
