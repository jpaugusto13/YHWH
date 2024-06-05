import Product from "../Product/Product";
import AliceCarousel, { Link } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Storage() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full flex items-center py-10 px-16">
        <div className="w-full h-[450px] overflow-hidden bg-black shadow-sm rounded-xl">
          <AliceCarousel
            disableButtonsControls
            mouseTracking
            infinite
            disableDotsControls
            autoPlay
            animationDuration={4000}
          >
            <img className="h-full w-full object-cover" src="image1.webp" />
            <img className="h-full w-full object-cover" src="image2.webp" />
            <img className="h-full w-full object-cover" src="image3.webp" />
          </AliceCarousel>
        </div>
      </div>

      <div className="grid justify-center place-items-center gap-y-10 p-10 max-xl:grid-cols-1 grid-cols-4">
        <Product image="blusa.jpeg" name="Blusa Oversized lisa" price={75} />
        <Product image="1.jpg" name="Blusa Oversized lisa" price={75} />
        <Product image="2.jpg" name="Blusa Oversized lisa" price={75} />
        <Product image="3.jpg" name="Blusa Oversized lisa" price={75} />
      </div>
    </div>
  );
}
