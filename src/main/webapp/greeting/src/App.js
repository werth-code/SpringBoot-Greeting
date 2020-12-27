import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import NavigationBar from './components/NavigationBar'

const Greeting = () => {

  const fetchGreeting = () => {
    axios.get("http://localhost:8081/greeting").then(res=> {
      console.log(res);
    })
  }

  useEffect(()=> {
    fetchGreeting()
  }, [])

  return <h1>Hello</h1>
}

function App() {
  return (
    <div className="App">
      <Greeting/>
    </div>
  );
}

export default App;
