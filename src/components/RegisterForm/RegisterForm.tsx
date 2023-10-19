import React, { useState } from 'react';
import { register } from '@/app/api/Register';
import Link from 'next/link';

interface FormData {
  Email: string;
  UserName: string;
  PassWord: string;
}

const Registers: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Email: '',
    UserName: '',
    PassWord: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await register(formData);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-cover bg-center">
        <div className="bg-gray-900 rounded-lg p-10 shadow-xl w-full max-w-md">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-2xl text-center font-bold mb-8">Registro</h2>
            <div className="mb-6">
              <input
                type="text"
                name="UserName"
                value={formData.UserName}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg "
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg "
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="PassWord"
                value={formData.PassWord}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg "
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition-colors duration-300"
            >
              Crear cuenta
            </button>
            <div className="text-white text-center mt-5">
              <p>
                Tengo una cuenta{' '}
                <Link className=' text-red-500 ' href="/login" passHref>
                  entrar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Registers;
