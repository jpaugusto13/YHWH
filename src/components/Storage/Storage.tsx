import Product from "../Product/Product";
import AliceCarousel, { Link } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Storage() {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full flex items-center p-10">
        <AliceCarousel mouseTracking infinite>
          <Link href="#">
            <img width={400} src="image1.jpg" />
          </Link>
          <Link href="#">
            <img width={500} height={300} src="image2.jpg" />
          </Link>
        </AliceCarousel>
      </div>

      <div className="grid justify-center place-items-center p-10 grid-cols-4">
        <Product image="blusa.jpeg" name="Blusa Oversized lisa" price={75} />
        <Product image="1.jpg" name="Blusa Oversized lisa" price={75} />
        <Product image="2.jpg" name="Blusa Oversized lisa" price={75} />
        <Product image="3.jpg" name="Blusa Oversized lisa" price={75} />
      </div>
    </div>
  );
}
