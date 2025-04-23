import React, { useState } from "react";

const StringTransformers = () => {
  const [str, setStr] = useState("hello wolrd");
  const [text, setText] = useState("");

  const onChangeCamelCase = (str)=> str.trim().split(" ").reduce((a,b)=>a+b[0].toUpperCase()+b.substring(1))
  
  const onChangePascalCase = (str)=>{
    let text= onChangeCamelCase(str)
    setText(text[0].toUpperCase()+text.substring(1))
  }
  return (
    <div className="container">
      <textarea
        type="text"
        value={str}
        rows={5}
        onChange={(e) => setStr(e.target.value)}
      ></textarea>
      <div>
        <button onClick={() => setText(str.toLowerCase())}> Lower case</button>
        <button onClick={() => setText(str.toUpperCase())}> Upper case</button>
        <button onClick={()=>onChangePascalCase(str)}> Camel case</button>
        <button onClick={()=>setText(onChangeCamelCase(str))}> Pascal case</button>
        <button onClick={() => setText(str.trim().split(" ").join("_"))}> Snake case</button>
        <button onClick={() => setText(str.trim().split(" ").join("-"))}> Kebab case</button>
        <button onClick={() => setText(str.trim())}> trim</button>
      </div>
      <div>
        <p>Transformed String:</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default StringTransformers;
