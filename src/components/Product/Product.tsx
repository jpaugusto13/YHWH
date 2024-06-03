interface ProductProps {
  name: string;
  price: number;
  image: string;
}

export default function Product({ name, price, image }: ProductProps) {
  return (
    <div className="w-[350px] shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100 duration-300">
      <img
        className="rounded-xl h-[350px] w-[350px] object-cover"
        src={image}
      />
      <div className="flex flex-col w-[100%] p-2">
        <p>{name}</p>
        <div>
          <p className="text-lg">R$ {price.toFixed(2).replace(".", ",")}</p>
        </div>
      </div>
    </div>
  );
}
