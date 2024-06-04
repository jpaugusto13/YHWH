import Product from "../Product/Product";
import AliceCarousel, { Link } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Storage() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full flex items-center p-10">
        <div className="w-full">
          <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            autoPlay
            animationDuration={2000}
          >
            <Link href="#">
              <img width={400} height={400} src="image1.jpg" />
            </Link>
            <Link href="#">
              <img width={400} height={400} src="image2.jpg" />
            </Link>
            <Link href="#">
              <img width={400} height={400} src="image3.jpg" />
            </Link>
            <Link href="#">
              <img width={400} height={400} src="image4.jpeg" />
            </Link>
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
