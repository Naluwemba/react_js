import './App.css';
import Greet from './Greet';
function App() {
  const friend = "Edith";
  const myName = "Latifah";
  const otherName = "Muhammad";
  return (
    <div className="App"> 
      <h1>Names</h1>
      <Greet name={myName} age='21' school='WITU' address='Matugga'/>
      <Greet name={friend} age='20'school='WITU' address='Bukotto'/>
      <Greet name={otherName} age='22'school='WITU' address='Kawempe'/>

    
    </div>
    
  )
}

export default App;
