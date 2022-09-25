import React from 'react'

export default function SideBlock(props) {
 

  return (
    <div>

<div className="card">
        <div className="sideBlock">
            
            {props.children}

       
       
        </div>


      </div>
    </div>
  )
}
