import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';

function App() {

  const [selectedDate, setSelectedDate] = useState(new Date());


  useEffect(() => {

    console.log(selectedDate + " ------ " + typeof (selectedDate));

  }, [selectedDate])

  return (
    <div className='App'>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1em", gap: "20px" }}>

        <span>
          <DatePicker
            dateFormat={'dd/MM/yyyy'}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
          />
        </span>
        <br />
        <select>
          <option value="Cotton">Cotton</option>
          <option value="Line">Line</option>
        </select>
        <input type="number" min={0} max={30} />
        <button style={{position:"absolute", marginTop:"2em"}}>Calculate</button>
      </div>
      <h1>RESULT</h1>
      {selectedDate.toDateString()}


    </div>
  );
}

export default App;
