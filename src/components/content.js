import React from 'react'

function Welcome(props) {
  return <h1>DEPT: {props.DEPT}</h1>;
}



function Content() {
  return (
    <div>
        <Welcome DEPT="AI&DS" />
        
      
    </div>
  )
}

export default Content
