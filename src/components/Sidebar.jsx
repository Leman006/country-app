import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

function Sidebar({status,setStatus}) {
    
  return (
    <div className={`h-[100vh] w-[350px] bg-[white] ${status ? 'right-0 ' : 'right-[-100%] '} fixed top-0 transition-all duration-700 `}>
        <MdOutlineClose onClick={() => {setStatus(false)}} size={25}/>
    </div>
  )
}

export default Sidebar