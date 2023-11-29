import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Swal from 'sweetalert2';

const LoginUser = () => {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5285/api/LoginCustomer/SignIn', {
        UserName,
        Password,
      });
  
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('token', data.token);
  
        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido de nuevo',
          showConfirmButton: false,
          timer: 1500,
        });
  
        console.log('Logged in successfully');
        router.push('/menu');
      } else {
        // Show error alert
        Swal.fire({
          icon: 'error',
          title: 'Usuario no encontrado',
          text: 'Por favor, verifica tus credenciales e intenta nuevamente.',
        });
  
        console.log('Failed to log in');
      }
    } catch (error) {
      // Show error alert for unexpected errors
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error. Por favor, intenta nuevamente.',
      });
  
      console.error('Error:', error);
    }
  };
  

  return (
    <div className=''>
      <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundColor: '' }}>
        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-900 rounded-lg p-10 shadow-xl w-full max-w-md">
            <h2 className="text-2xl text-center font-bold mb-8">Bienvenido 🌮🇲🇽</h2>
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
                  ¿No tienes cuenta?{' '}
                  <Link href="/register" className='text-red-500'>
                    Regístrate
                  </Link>
                </p>
                <p className='text-base text-gray-100 ml-2 text-center'>
                  ¿Eres Administrador?{' '}
                  <Link href="/loginAdmin" className='text-red-500'>
                    Entrar
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
