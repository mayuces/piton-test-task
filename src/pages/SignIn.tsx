import React from 'react'
import picture from "./../assets/Picture.png";
import Logo from "./../assets/Logo.png";

const SignIn = () => {
  return (
    <div className='flex justify-center flex-wrap max-w-8xl mx-auto'>
      <div className='w-1/2 bg-cover bg-left'>
        <img src={picture} alt="sign" className="w-full max-w-[720px] max-h-[1024px]"/>
      </div>
      <div className="w-1/2 flex justify-center flex-col max-w-[400px] mx-auto">
        <div className='mb-[111px] mx-auto'>
          <img src={Logo} alt="logo" />
        </div>
        <p className='mb-2 text-gray-600 text-[24px] '>Welcome back!</p>
        <h1 className='mb-[80px] text-dark-700 font-bold text-[32px]'>Login to your account</h1>

        <form className="" action="#">
          <div className='mb-10'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
            <input type="email" name="email" id="email" className="bg-purple-50 border-none text-gray-900 sm:text-sm rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-4" placeholder="john@mail.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-purple-50 border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 " required />
          </div>
          <div className="flex items-center justify-between mt-2 leading-none">
            <div className="flex items-start mb-[120px]">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-purple-800 rounded bg-purple-800 focus:ring-3 focus:ring-primary-300"/>
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-purple-800 font-bold">Remember me</label>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full text-white bg-orange-400 p-3 mb-2">Log in</button>
          <button className="w-full text-purple-800 border border-purple-800 p-3">Register</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn