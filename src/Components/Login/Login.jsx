import React from 'react'
import { useCommerce } from '../../Context/CommerceContext';



function Login() {
  const { isLoggedIn, setIsLoggedIn } = useCommerce();
  return (
    <div>

{isLoggedIn ? 'Logged In' : 'Please Login'}

    </div>
    
  )
}

export default Login