import React from 'react'
import FormRegister from '../components/FormRegister'
import FormLogin from '../components/FormLogin'


const Login = () => {
  return (
    <div>
      <div className="g-6 h-full flex-wrap items-center justify-center flex h-50 divide-x divide-Azul-oscuro">
        <FormRegister />
        <FormLogin />
      </div>

    </div>
  )
}

export default Login

