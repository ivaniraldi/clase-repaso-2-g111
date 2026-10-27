import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-dark d-flex justify-content-center text-white p-3'>
      <div>
        <h5>FriendStore @{new Date().getFullYear()}</h5>
      </div>
    </footer>
  )
}
