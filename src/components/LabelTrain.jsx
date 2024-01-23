import { useState } from 'react'
import { Link } from 'react-router-dom'

const LabelTrain = ({ children }) => {
  const [train, setTrain] = useState(children)
  const path = children.replace(/\s/g, '')
  const ruta = '/' + path

  return (
    <Link to={ruta}>
      <div
        className="bg-customInterior p-4 rounded-md mx-4 md:w-1/2 md:mx-auto my-4 flex justify-between hover:bg-sambayon hover:text-customInterior "
        onClick={() => {
          setTrain(children)
        }}
      >
        <p>{train}</p>
        <img src="src/image/angulo-derecho.svg" className="w-4" alt="" />
      </div>
    </Link>
  )
}

export default LabelTrain
