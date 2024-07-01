// import { useEffect, useState } from 'react'

function Messageregister({ message }) {
  return (
    <div
      className="-bottom-10 p-4 bg-sambayon text-[#212121] text-center absolute"
      style={message === null ? { display: 'none' } : { display: 'inherit' }}
    >
      <p>{message}</p>
    </div>
  )
}

export default Messageregister
