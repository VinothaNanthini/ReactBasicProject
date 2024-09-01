import React from 'react'
function Welcome(props) {
    return <h1>Course: {props.Course}</h1>;
  }
  

function Header() {
  return (
    <div>
       <Welcome Course="MERN" />
        
    </div>
  )
}

export default Header
