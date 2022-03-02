import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
      // console.log("uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
  }
  const handleClearClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = '';
    setText(newText);
}
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className={`container text-${props.mode === 'light' ? 'dark': 'light'}`}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey': 'white', Color:props.mode === 'dark' ? 'white': 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear text</button>
    </div>
    <div className={`container my-3 text-${props.mode === 'light' ? 'dark': 'light'}`}>
      <h1> Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2> Priview </h2>
      <p>{text}</p>
    </div></>
  )
}
