import { useState } from 'react';
import './App.css';

function App() {

  const [tarih, setTarih] = useState({

    varDate: new Date()

  });

  const handleDate = (e) => {
    e.preventDefault()
    // console.log(e.target[0].value);

    setTarih({
      varDate: e.target[0].value
    })
    console.log(tarih);
  }

  return (
    <div className='App'>

      {/* {tarih.getHours()} - {tarih.getMinutes()} - {tarih.getFullYear()} <br /> */}
      <form onSubmit={(e) => handleDate(e)}>
        <input style={{ marginTop: "2em" }} type="date" />
        <button type='submit'>ekle</button>
      </form>

      

    </div>
  );
}

export default App;
