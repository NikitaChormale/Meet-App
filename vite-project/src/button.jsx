import React from 'react'
import "./button.css"
function button({title}) {
  return (
    <div>
      <button className='btn'>{title}</button>
    </div>
  )
}
function DisableButton({title}){
    return(
        <div>
 <button className='btn-disable'>{title}</button>
        </div>
    )
}
function ConfirmButton({title}){
    return(
        <div>
 <button className='btn-confirm'>{title}</button>
        </div>
    )
}


export default button
export{
    ConfirmButton,DisableButton
};
