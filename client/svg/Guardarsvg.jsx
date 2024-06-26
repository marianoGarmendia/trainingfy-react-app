import { useState } from 'react'
function GuardarSVG() {
  const [save, setSave] = useState(false)
  return (
    <div onClick={() => setSave(!save)}>
      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="15"
        height="15"
        style={save ? { fill: '#9ECB18' } : { fill: 'black' }}

        //   class="save-icon"
      >
        <path
          id="save-path"
          d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z"
        />
      </svg>
    </div>
  )
}

export default GuardarSVG
