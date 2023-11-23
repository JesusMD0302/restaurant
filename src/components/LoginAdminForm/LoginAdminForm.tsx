import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginUser = () => {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5285/api/Login/SignIn', {
        UserName,
        Password,
      });

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('token', data.token);
        console.log('Logged in successfully');
        router.push('/dashboard');
      } else {
        console.log('Failed to log in');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className=''>
      <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundColor: '' }}>
        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-900 rounded-lg p-10 shadow-xl w-full max-w-md">
            <h2 className="text-2xl text-center font-bold mb-8">Bienvenido Administrador</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="UserName" className="block text-center text-gray-100 text-sm font-bold mb-2">Nombre de Usuario</label>
                <input
                  type="text"
                  id="userName"
                  required
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)} 
                  className="px-4 py-2 text-center w-full rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-100"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="Password" className="block text-center text-gray-100 text-sm font-bold mb-2">Contraseña</label>
                <input
                  type="password"
                  id="Password"
                  required
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 w-full text-center rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-100"
                />
              </div>
              <div className="flex items-center mb-6">
                <input type="checkbox" className="mr-2" id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-100">Recuérdame</label>
              </div>
              <div className="flex items-center mb-6">
                <p className='text-base text-gray-100 ml-2 text-center'>
                  volver a{' '}
                  <Link href="/menu" className='text-red-500'>
                    inicio
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
