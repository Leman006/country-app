import React from 'react'

function Loading() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    </div>
  )
}

export default Loading
