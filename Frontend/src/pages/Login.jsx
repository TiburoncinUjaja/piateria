import React from 'react'
import FormRegister from '../components/FormRegister'
import RegistroList from '../components/RegisterList'
import FormLogin from '../components/FormLogin'


const Login = () => {
  return (
    <div>
      <div className="g-6 h-full flex-wrap items-center justify-center flex h-50 divide-x divide-Azul-oscuro">
        <FormRegister />
        <FormLogin />
      </div>
      <RegistroList/> 

    </div>
  )
}

export default Login

