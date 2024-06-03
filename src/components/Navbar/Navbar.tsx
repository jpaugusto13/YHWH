import { Link } from "react-router-dom";
import LinkUl from "./components/LinkUl/LinkUl";

const NavBar = () => (
  <div className="bg-white flex justify-around p-5 shadow-md items-center">
    <div className="flex gap-4 items-center">
      <h1 className="text-3xl">YHWH</h1>
    </div>

    <div>
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

    <div>
      <ul className="flex gap-4">
        <li>
          <Link to="#">
            <LinkUl ico="Cart" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <LinkUl ico="Instagram" />
          </Link>
        </li>
        <li>
          <Link to="#"></Link>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
