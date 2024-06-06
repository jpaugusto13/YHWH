import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="flex flex-col p-4 w-full bg-[#000000] overflow-hidden justify-around shadow-md shadow-slate-400 gap-5 text-white">
    <div className="flex px-10 w-full overflow-hidden justify-between items-center gap-10">
      <div className="flex ml-14 gap-8">
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl">YHWH</h1>
        </div>

        <div className="flex h-[50px] w-[630px] relative">
          <input
            className="h-[50px] w-[630px] text-black outline-none rounded-2xl px-5 py-2"
            type="search"
            placeholder="O que está buscando?"
          />
          <button className="absolute right-2 top-1.5 rounded-lg p-1.5 bg-blue-500">
            Buscar
          </button>
        </div>
      </div>

      <div className="flex ml-4 w-full justify-around">
        <div>
          <p className="text-sm w-36">
            Faça seu{" "}
            <Link to="#" className="text-yellow-500 underline">
              LOGIN
            </Link>{" "}
            ou crie seu{" "}
            <Link to="#" className="text-yellow-500 underline">
              CADASTRO
            </Link>
          </p>
        </div>

        <div>
          <img src="icos/Carrinho.svg" width={30} className="fill-white" />
          <p className="text-sm w-36"></p>
        </div>

        <div>
          <p className="text-sm w-36">
            Faça seu{" "}
            <Link to="#" className="text-yellow-500 underline">
              LOGIN
            </Link>{" "}
            ou crie seu{" "}
            <Link to="#" className="text-yellow-500 underline">
              CADASTRO
            </Link>
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center overflow-hidden w-full">
      <ul className="flex gap-8">
        <li className="cursor-pointer hover:text-yellow-500 duration-150">
          Oversized
        </li>
        <li className="cursor-pointer hover:text-yellow-500 duration-150">
          Camisetas
        </li>
        <li className="cursor-pointer hover:text-yellow-500 duration-150">
          Babylooks
        </li>
        <li className="cursor-pointer hover:text-yellow-500 duration-150">
          Blusas
        </li>
        <li className="cursor-pointer hover:text-yellow-500 duration-150">
          Moletons
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
