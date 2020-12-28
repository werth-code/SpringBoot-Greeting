import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios'

const Greeting = () => {

  const [greeting, setGreeting] = useState([]);
  const [name, nameSetter] = useState("");

  console.log("useState : " + useState(1))

  const fetchGreeting = () => {
    axios.get("http://localhost:8081/greeting").then(res => {
      setGreeting(res.data.content)
    })
  }

  useEffect(() => {
    console.log('running')
    fetchGreeting()
  }, [])

return <div>
  <h1 id="greet">{greeting}</h1>
  <input placeholder="Name" id="val"/>
  <button type="submit" onClick={()=>nameSetter(document.getElementById("greet").innerHTML = "Hello, " + document.getElementById("val").value  + "!")}>submit</button>
</div>

}

export default Greeting;