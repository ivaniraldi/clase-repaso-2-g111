import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingView() {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        Imagen
      </div>
      <div>
        <h2>FriendStore</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sed reprehenderit porro facilis, nobis doloremque commodi eveniet totam sequi culpa expedita temporibus enim facere earum autem fuga numquam neque. Sit.</p>
        <button onClick={()=> navigate("/home")}>Entrar</button>
      </div>
    </div>
  )
}
