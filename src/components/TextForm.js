import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText] = useState("");
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClear =()=>{
        setText("");
    }
  return (
    <>
    <div className="container my-5" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            <textarea className="form-control" id="myBox" value= {text} style = {{backgroundColor: props.mode==='dark'?'grey':'white', 
            color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to Lower case</button>
        <button className="btn btn-primary my-3" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the text box above to preview it here'}</p>
    </div>
    </>
    
  )
}
