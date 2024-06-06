import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

import { FaInstagram } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Home = () => (
  <div className="w-[99vw] bg-[#F7F7F7]">
    <NavBar />
    <Outlet />

    <div className="grid shadow-md bg-white p-10 w-full max-xl:grid-cols-1 grid-cols-4 gap-2 place-items-center">
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
    <footer className="w-full p-1 text-white bg-[#202020] shadow-md shadow-slate-400">
      <div className="w-full justify-center flex">
        <p className="w-2/3 text-center text-xs">
          Preços e condições de pagamento exclusivas para compras neste site
          oficial. Evite comprar produtos mais baratos ou de outras lojas, pois
          você pode estar sendo enganado(a) por um golpista. Caso você compre os
          mesmos produtos em outras lojas,{" "}
          <b>não nos responsabilizamos por quaisquer problemas.</b>
        </p>
      </div>
    </footer>
  </div>
);

export default Home;
