export default function OptionsTabs() {
  return (
    <>
      <div className="space-y-4 px-10 pt-10 ">
        <div className="border-b border-b-gray-700">
          <ul className="-mb-px flex items-center gap-4 text-lg font-medium">
            <li className="flex-1">
              <a
                href="#"
                className="relative flex items-center justify-center gap-2 px-1 py-3 text-[#EA7C69] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#EA7C69] hover:text-[#EA7C69]"
              >
                Platos Principales
              </a>
            </li>
            <li className="flex-1">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-1 py-3 text-white hover:text-[#EA7C69]"
              > 
              Tacos
              </a>
            </li>
            
            <li className="flex-1">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-1 py-3 text-white hover:text-[#EA7C69]"
              >
                Antojitos
              </a>
            </li>
            <li className="flex-1">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-1 py-3 text-white hover:text-[#EA7C69]"
              >
                Postres
              </a>
            </li>
            <li className="flex-1">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-1 py-3 text-white hover:text-[#EA7C69]"
              >
                Bebidas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
