interface ProductProps {
  name: string;
  price: number;
  image: string;
}

export default function Product({ name, price, image }: ProductProps) {
  return (
    <div className="flex flex-col w-[260px] h-[400px] rounded-2xl p-4 cursor-pointer shadow-md bg-white duration-300 hover:scale-110 hover:bg-slate-100">
      <div className="flex w-full h-full">
        <img
          className="rounded-lg h-[250px] w-[250px] object-cover"
          src={image}
        />
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
