import React, { useState } from 'react';
import Link from 'next/link';
const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://kaabstore.somee.com/WebAPI_Kaab_Haak/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log('Logged in successfully');
      } else {
        console.log('Failed to log in');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className=''>
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundColor: `` }}>
      <div className="flex justify-center items-center w-full">
        <div className="bg-gray-900 rounded-lg p-10 shadow-xl w-full max-w-md">
          <h2 className="text-2xl text-center font-bold mb-8">Bienvenido 🌮🇲🇽</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-center text-gray-100 text-sm font-bold mb-2">Correo Electronico</label>
              <input
                type="email"
                id="Correo Electronico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-center  w-full rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-100"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-center text-gray-100 text-sm font-bold mb-2">Contraseña</label>
              <input
                type="Password"
                id="Contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 w-full text-center rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-100"
              />
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" className="mr-2" id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-100">Recuérdame</label>
            </div>
            <div className="flex items-center mb-6">
            <p className=' text-base  text-gray-100 ml-2'>
                  ¿No tienes cuenta?{' '}
                  <Link className='text-red-500' href="/register">
                    Registrate
                  </Link>
                </p>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition-colors duration-300">
              Ingresar
            </button>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginUser;
