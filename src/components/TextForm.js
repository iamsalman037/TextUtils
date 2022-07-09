import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText] = useState("");
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClear =()=>{
        setText("");
        props.showAlert("Text has been cleared","success");
    }
    const handleTextLength=(text)=>{
        let words = text.trim().split(" ").length;
        if(words===1 && text.split(" ")[0]===""){
            words = 0;
            return words;
        }
        else{
            return words;
        }
    }
  return (
    <>
    <div className="container my-1" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            <textarea className="form-control" id="myBox" value= {text} style = {{backgroundColor: props.mode==='dark'?'#13466e':'white', 
            color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-1 my-1" onClick={handleUpClick}>Convert to Upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower case</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 my-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{handleTextLength(text)} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
    
  )
}
