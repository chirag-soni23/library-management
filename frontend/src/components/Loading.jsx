import React from 'react'

const Loading = () => {
  return (
    <div className='flex bg-[#212121] items-center justify-center h-screen'>
      <div className="w-20 h-20 border-4 border-green-500 border-solid border-t-transparent rounded-full animate-pulse text-green-500 font-bold text-5xl flex items-center justify-center p-2">
      <div className="w-16 h-16 border-4 border-green-500 border-solid border-t-transparent rounded-full animate-spin text-green-500 font-bold text-5xl flex items-center justify-center">
        C
      </div>
      </div>
    </div>
  )
}

export default Loading