import React, { useState } from "react";

const Demo = () => {

  const [ name, setName ] = useState("");

  return(
    <div>
      <h1 data-testid="my-heading">Hello Test!</h1>
      <button onClick={() => console.log("I'm clicked")}>Submit</button>
      <input type="text" name={name} onChange={ (e) => setName(e.target.value)} />
    </div>
  )
}

export default Demo;