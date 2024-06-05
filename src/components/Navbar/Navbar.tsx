import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="flex flex-col p-5 w-full bg-[#000000] overflow-hidden justify-around shadow-md shadow-slate-400 gap-10 text-white">
    <div className="flex px-10 w-full overflow-hidden justify-between items-center gap-10">
      <div className="flex gap-4 items-center">
        <h1 className="text-3xl">YHWH</h1>
      </div>

      <div className="flex w-2/3 relative h-[60px]">
        <input
          className="w-full text-black outline-none rounded-2xl px-5 py-2"
          type="search"
          placeholder="O que está buscando?"
        />
        <button className="absolute right-3 top-3 rounded-lg p-2 bg-blue-500">
          Buscar
        </button>
      </div>

      <div>
        <p className="text-sm w-36">
          Faça seu <Link className="text-yellow-500 underline">LOGIN</Link> ou
          crie seu <Link className="text-yellow-500 underline">CADASTRO</Link>
        </p>
      </div>
      <div>
        <p className="text-sm w-36">
          Faça seu <Link className="text-yellow-500 underline">LOGIN</Link> ou
          crie seu <Link className="text-yellow-500 underline">CADASTRO</Link>
        </p>
      </div>
      <div>
        <p className="text-sm w-36">
          Faça seu <Link className="text-yellow-500 underline">LOGIN</Link> ou
          crie seu <Link className="text-yellow-500 underline">CADASTRO</Link>
        </p>
      </div>
    </div>
    <div className="overflow-hidden">
      <ul className="flex gap-8">
        <li>
          <Link to={"lancamentos"}>Lançamentos</Link>
        </li>
        <li>Camisetas</li>
        <li>Babylooks</li>
        <li>Blusas</li>
        <li>Moletons</li>
      </ul>
    </div>
  </div>
);

export default NavBar;
