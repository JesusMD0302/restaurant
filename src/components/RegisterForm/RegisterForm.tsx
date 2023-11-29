import React, { useState } from 'react';
import { register } from '@/app/api/Register';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FormData {
    UserName: string;
    Password: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Email: string;
    Phone: string;
    CellPhone: string;
    CreatedAtBranchStoreId: number;
    CustomerTypeId: number;
    Gender: string;
    BirthDate: string;
    BranchStoreIds: string[];

}

const Registers: React.FC = () => {
  const router= useRouter();
  const [formData, setFormData] = useState<FormData>({
  UserName: '',
  Password: '',
  FirstName: '',
  MiddleName: '',
  LastName: '',
  Email: '',
  Phone: '',
  CellPhone: '',
  CreatedAtBranchStoreId: 1,
  CustomerTypeId: 1,
  Gender: '',
  BirthDate: '',
  BranchStoreIds: ["1"],
   
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'BranchStoreIds') {
      setFormData({ ...formData, [e.target.name]: [e.target.value] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await register(formData);
      router.push('/login');
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
    className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg"
    placeholder="Username"
    required
  />
  <input
    type="password"
    name="Password"
    value={formData.Password}
    onChange={handleChange}
    className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg"
    placeholder="Password"
    required
  />
  <input
    type="text"
    name="FirstName"
    value={formData.FirstName}
    onChange={handleChange}
    className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg"
    placeholder="First Name"
    required
  />
</div>

<div className="mb-6">
  <input
    type="text"
    name="MiddleName"
    value={formData.MiddleName}
    onChange={handleChange}
    className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg"
    placeholder="Middle Name"
  />
</div>

<div className="mb-6">
  <input
    type="text"
    name="LastName"
    value={formData.LastName}
    onChange={handleChange}
    className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg"
    placeholder="Last Name"
    required
  />
</div>

<div className="mb-6">
  <input
    type="text"
    name="Phone"
    value={formData.Phone}
    onChange={handleChange}
    className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg"
    placeholder="Phone"
  />
</div>

<div className="mb-6">
  <input
    type="text"
    name="CellPhone"
    value={formData.CellPhone}
    onChange={handleChange}
    className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg"
    placeholder="Cell Phone"
  />
</div>





<div className="mb-6">
  <label className="text-white">Gender:</label>
  <select
    name="Gender"
    value={formData.Gender}
    onChange={handleChange}
    className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg"
    required
  >
    <option value="" disabled>Select Gender</option>
    <option  value="1">Hombre</option>
    <option value="2">Mujer</option>
  </select>
</div>

<div className="mb-6">
  <input
    type="date"
    name="BirthDate"
    value={formData.BirthDate}
    onChange={handleChange}
    className="w-full h-12 bg-transparent border-b-2 border-white text-white focus:outline-none rounded-lg"
    placeholder="Birth Date"
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
