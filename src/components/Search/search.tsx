export default function Search() {
  return (
    <div className="pt-6 w-100">
     <div className="flex flex-col md:flex-row justify-between items-center">
     <div className="text-3xl pl-10 md:order-1 text-center md:text-left mt-5 md:mt-0">
      <h1 className="not-italic ">Bienvenido Josue!!</h1>
     {/*  <h1 className="not-italic ">28/09/2023</h1> */}
    </div>
    <div className="relative mt-1 md:order-2">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
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
        className=" w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for items"
      />
    </div>
    
  </div>
</div>

  );
}
