import React, { useState } from 'react'

function KnowMoreButton({onClick}) {

    const [form, setForm] =useState()
    function handleClick(){
        setForm(form(onClick()))
    }

  return (
    <div>
        <button onClick={()=>handleClick()}>Know more</button>
    </div>
  )
}

export default KnowMoreButton