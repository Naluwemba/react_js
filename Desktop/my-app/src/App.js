import './App.css';
import './form1.css'
import Greet from './Greet';
import React from 'react';
// import Garage from './Garage';
import MyForm from './form1';
import TextAreaForm from './form2';
import SelectForm from './form3';



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
    
    

    <div>
      {/* <Garage /> */}
      <MyForm />
      <TextAreaForm />
      <SelectForm />
    </div>


   
    </div>
    
    
  );
}

export default App;
