import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

import { FaInstagram } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Home = () => (
  <div className="w-[100vw]">
    <NavBar />
    <Outlet />

    <div className="grid w-full max-xl:grid-cols-1 grid-cols-4 gap-8 justify-around items-center place-items-center">
      <Card
        icon={<FaInstagram size={36} />}
        title="Siga-nos no Instagram"
        paragraph="Fique por dentro das novidades e promoções exclusivas"
      />
      <Card
        icon={<MdOutlineSupportAgent size={36} />}
        title="Suporte Profissional"
        paragraph="Equipe de suporte pronta para lhe atender e tirar suas dúvidas"
      />
      <Card
        icon={<BsBoxSeam size={36} />}
        title="Envio com Rastreio"
        paragraph="Acompanhe seu pedido em tempo real através do nosso site"
      />
      <Card
        icon={<MdOutlineShoppingCartCheckout size={36} />}
        title="Satisfação ou Reembolso"
        paragraph="7 dias para Trocas e Devoluções da data de recebimento"
      />
    </div>
  </div>
);

export default Home;
