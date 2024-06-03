import Product from "../Product/Product";
import AliceCarousel, { Link } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Storage() {
  return (
    <div>
      <AliceCarousel mouseTracking>
        <Link href="#">
          <img src="path-to-image" />
        </Link>
      </AliceCarousel>

      <div className="grid justify-center place-items-center p-10 grid-cols-4">
        <Product name="Blusa Oversized lisa" price={75} />
        <Product name="Blusa Oversized lisa" price={75} />
        <Product name="Blusa Oversized lisa" price={75} />
        <Product name="Blusa Oversized lisa" price={75} />
      </div>
    </div>
  );
}
