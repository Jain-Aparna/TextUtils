import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpCase= ()=>{
        console.log("handleUpCase was clicked");
        let newText=text.toUpperCase();
        setText( newText);
    }

    const handleLoCase= ()=>{
        console.log("Uppercase was clicked");
        let newText =text.toLowerCase();
        setText(newText);
    }

    const handleClearCase= ()=>{
        let newText ='';
        setText(newText);
    }


    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText]= useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{color:props.mode==='dark'?'white':'dark', backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea> 
 </div>
 <button className='btn btn-primary' onClick={handleUpCase}>Click here for Uppercase</button>
 <button className='btn btn-primary mx-3' onClick={handleLoCase}>Click here for Lowercase</button>
 <button className='btn btn-primary mx-3' onClick={handleClearCase}>Click here for clear text</button>
 
 
 </div>

 <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Text Summery</h2>
    <p>{text.split(" " ).length} words and {text.length} characters</p>
    <p>{0.08*(text.split(" ").length)} Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
 </div>
 </>
  )
}
