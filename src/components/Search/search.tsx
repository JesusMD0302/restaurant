"use client"
import { BsCart3 } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import useDate from "@/hooks/useDate";
export default function Search() {
  const [date] = useDate(Date.now());
  return (
    <div className="pt-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Nombre en la parte superior para pantallas móviles */}
        <div className=" text-center md:text-left md:col-span-1">
          <h1 className="not-italic text-3xl">Bienvenido Josue!!</h1>
          <h1 className="text-2x1 mt-2 ">{date}</h1>
        </div>

        {/* Buscador */}
        <div className="relative mt-1 md:text-right md:col-span-1">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-white dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className={`w-full md:w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 p-2.5 pr-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Search for items"
            />
            <div className="items-center space-x-2 ml-10 hidden md:flex ">
              <BsCart3 className="text-xl cursor-pointer" title="Carrito" />
              {/* <BsPersonCircle className="text-xl cursor-pointer" /> */}
            </div>
            <div className="items-center space-x-2 ml-10 hidden md:flex">
              {/* <BsCart3 className="text-xl cursor-pointer" /> */}
              <BsPersonCircle className="text-xl cursor-pointer" title="Inicio de sesion" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
