import Product from "../Product/Product";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Storage() {
  return (
    <div className="w-full grid grid-cols-1 gap-10 justify-center py-10 px-24">
      <div className="w-full h-[450px] overflow-hidden shadow-md rounded-xl">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          autoPlayInterval={10000}
          animationDuration={2000}
        >
          <img className="object-contain" src="image1.jpg" />
          <img className="object-contain" src="image2.jpg" />
          <img className="object-contain" src="image3.jpg" />
        </AliceCarousel>
      </div>

      <div>
        <div className="flex flex-col mb-10 gap-2">
          <h1 className="text-2xl">Lançamentos</h1>
          <span className="flex rounded-lg shadow-md bg-blue-600 h-2 w-36"></span>
        </div>

        <div className="w-full grid place-items-center gap-y-10 max-xl:grid-cols-2 grid-cols-5">
          <Product image="blusa.jpeg" name="Blusa Oversized lisa" price={75} />
          <Product image="1.jpg" name="Blusa Oversized lisa" price={75} />
          <Product image="2.jpg" name="Blusa Oversized lisa" price={75} />
          <Product image="3.jpg" name="Blusa Oversized lisa" price={75} />
          <Product image="4.jpg" name="Blusa Oversized lisa" price={75} />
        </div>
      </div>
    </div>
  );
}
