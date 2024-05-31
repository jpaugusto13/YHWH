import NavBar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";

const Home = () => (
  <div>
    <NavBar />
    <main className="grid justify-center place-items-center p-10 grid-cols-3">
      <Product nome="Moletom"/>
      <div className="w-[80px] h-[80px] bg-black"></div>
      <div className="w-[80px] h-[80px] bg-black"></div>
    </main>
  </div>
);

export default Home;
