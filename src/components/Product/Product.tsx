interface ProductProps {
  name: string;
  price: number;
}

export default function Product({ name, price }: ProductProps) {
  return (
    <div className="w-[250px] shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100 duration-300">
      <img
        className="rounded-xl  h-[100%] w-[100%] object-cover"
        src="blusa.jpeg"
      />
      <div className="flex flex-col w-[100%] p-2">
        <p>{name}</p>
        <div>
          <p className="text-lg">R$ {price}</p>
        </div>
      </div>
    </div>
  );
}
