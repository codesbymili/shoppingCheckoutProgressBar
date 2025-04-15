import { useState } from "react";

const messages = [
  "Choose your item 🧁",
  "Pick the quantity 🔢",
  "Enter the delivery address 📬",
  "Submit your Order 🛒",
];

export default function App(){

let [step, setStep] = useState(1);
const[isOpen, setIsOpen] = useState(true);

  function handlePrevious(){
    if(step>1)
    setStep(step-1);
  }

  function handleNext(){
    if(step<4)
    setStep(step+1);
  }

return (
<>
  <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
  {
    isOpen && (
<div className="steps">
  <div className="numbers">
    <div className={`${step >= 1 ? "active" : ""}`}>1</div>
    <div className={`${step >= 2 ? "active" : ""}`}>2</div>
    <div className={`${step >= 3 ? "active" : ""}`}>3</div>
    <div className={`${step >= 3 ? "active" : ""}`}>4</div>
  </div>

  <p className="message"> Step: {step} : {messages[step-1]}</p>

  <div className="buttons">
    <button style={{backgroundColor:"#f792b4", color:"#ffff"}} 
    onClick={handlePrevious}
    >Previous</button>
    <button style={{backgroundColor:"#f792b4", color:"#ffff"}} 
    onClick={handleNext}
    >Next</button>
  </div>

</div>
)}
</>

);

}
