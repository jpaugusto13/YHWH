interface ProductProps {
  name: string;
  price: number;
  image: string;
}

export default function Product({ name, price, image }: ProductProps) {
  return (
    <div className="flex flex-col w-[300px] h-[420px] rounded-2xl p-4 cursor-pointer bg-white duration-300">
      <div className="flex p-2 w-full h-full">
        <img className="rounded-lg h-[300px] w-full object-cover" src={image} />
      </div>

      <div className="flex flex-col gap-y-4 w-[100%] p-2">
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p className="text-xl text text-[#00D864]">
            R$ {price.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>
    </div>
  );
}
