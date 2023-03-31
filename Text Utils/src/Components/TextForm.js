import React, { useState } from 'react'
import axios from 'axios'


export default function TextForm(props) {
  const [text, setText] = useState("Enter here"); // useState hook, text is variable and setText for making changes

  function handleLCClick() {
    setText("LowerCase button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "Success");
  }
  const handleUCClick = () => {
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "Success");
  }
  const processText = () => {
    let newText = ""
    // type the function to load data from external site 
    // const axios = require('axios')
    axios.get(text)
      .then((response) => {
        console.log(response)
        newText = response.data;
        setText(newText);
      })
      .catch((error) => {
        console.error(error)
      });
  }
  function handleChange(event) {
    console.log("On typing text, value handled");
    setText(event.target.value);
  }
  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "Success");
  }
  const clearText = () => {
    setText("");
    props.showAlert("Text is cleared", "Success");
  }
  const copyText = () => {
    var text = document.getElementById("textBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to Clipboard", "Success");
  }

  return (
    <div>
      <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : 'rgb(58 58 58)', color: props.mode === 'light' ? 'black' : 'white'}} id="textBox" rows="5" onChange={handleChange} ></textarea>
          {/* it is taking value={text}, our state value */}
          <button className="btn btn-primary mx-1 my-1" onClick={handleUCClick} >Convert to UpperCase </button>
          <button className="btn btn-primary my-1 my-1" onClick={handleLCClick}>Convert to LowerCase </button>
          <button className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>Remove extra spaces </button>
          <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear text</button>
          <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy text</button>
          <div className="mb-3" >
            <label htmlFor="basic-url" className="form-label">Enter URL for analysis</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3" style={{backgroundColor: props.mode === 'light' ? 'white' : 'rgb(58 58 58)', color: props.mode === 'light' ? 'black' : 'white'}}>Enter link here</span>
              <input type="text" className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : 'rgb(58 58 58)', color: props.mode === 'light' ? 'black' : 'white'}} onChange={handleChange} id="basic-url" aria-describedby="basic-addon3" />
              <button className="btn btn-primary mx-3" onClick={processText}> Click </button>
            </div>
          </div>
          <h3>Your text summary</h3>
          <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters <br/>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minute read</p>
          <h3>Preview </h3>
          <p>{text.length == 0 ? "Enter something to preview": text}</p>
        </div>
      </div>
    </div>
  )
}
