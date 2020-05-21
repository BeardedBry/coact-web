
import React, { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {

  const [serverData, setServerData] = useState('');

  useEffect(()=>{
    // https://programming-quotes-api.herokuapp.com/quotes
    axios.get('http://161.35.114.130:80/sandbox/get', {
      mode: 'no-cors'
    })
    .then(function (response) {
      console.log(response);
      setServerData(response);
    }).catch((error) => {
      console.log(error);
    });
  }, [])

  return (
    <div>
      {serverData.data}
    </div>
  )
}

export default App;
