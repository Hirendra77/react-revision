import React from 'react'

function InlineHtml() {

    let data =`<p style="font-size : 20 ">Thuis is my skill </p>`
    
  return (
    <div>
        <div dangerouslySetInnerHTML={{__html:data}}></div>
        <p style={{fontSize:23,color:"red"}}>Thuis is my skill </p>
    </div>
  )
}

export default InlineHtml;