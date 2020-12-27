import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'

const Greeting = () => {

  const [greeting, setGreeting] = useState([])

  const fetchGreeting = () => {
    axios.get("http://localhost:8081/greeting").then(res => {
      console.log(res);
      setGreeting(res.data)
    })
  }

  useEffect(() => {
    fetchGreeting()
  }, [])

const data = greeting.content;

return <h1>{data}</h1>;
}

function App() {
  return (
    <div className="App">
      <Greeting/>
    </div>
  );
}

export default App;
